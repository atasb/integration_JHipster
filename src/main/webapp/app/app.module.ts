import './vendor.ts';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { RealylastSharedModule, UserRouteAccessService } from './shared';
import { RealylastAdminModule } from './admin/admin.module';
import { RealylastAccountModule } from './account/account.module';
import { RealylastEntityModule } from './entities/entity.module';

import { LayoutRoutingModule } from './layouts';
import { HomeComponent } from './home';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { InnovationModule } from './innovation-overview/innovation.module';
import { EvaluationModule } from './evaluation-overview/evaluation.module';
import { MenuComponent } from './menu/menu.component';
import { AnalysisOverviewComponent } from './analysis-overview/analysis-overview.component';
import { AppRoutingModule } from './app-routing.module'

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';


@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        RealylastSharedModule,
        RealylastAdminModule,
        RealylastAccountModule,
        RealylastEntityModule,
        EvaluationModule,
        InnovationModule,
        AppRoutingModule
    ],
    declarations: [
        JhiMainComponent,
        HomeComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent,
        MenuComponent,
        AnalysisOverviewComponent,
    ],
    providers: [
        ProfileService,
        { provide: Window, useValue: window },
        { provide: Document, useValue: document },
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class RealylastAppModule {}
