import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager, ParseLinks, PaginationUtil, AlertService } from 'ng-jhipster';

import { Book } from './book.model';
import { BookService } from './book.service';
import { ITEMS_PER_PAGE, Principal } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-book',
    templateUrl: './book.component.html'
})
export class BookComponent implements OnInit, OnDestroy {
books: Book[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private bookService: BookService,
        private alertService: AlertService,
        private eventManager: EventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.bookService.query().subscribe(
            (res: Response) => {
                this.books = res.json();
            },
            (res: Response) => this.onError(res.json())
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInBooks();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId (index: number, item: Book) {
        return item.id;
    }



    registerChangeInBooks() {
        this.eventSubscriber = this.eventManager.subscribe('bookListModification', (response) => this.loadAll());
    }


    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}
