import { slideInDownAnimation } from '../animations'
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'jhi-analysis-overview',
  templateUrl: './analysis-overview.component.html',
  styleUrls: ['./analysis-overview.component.css'],
   animations: [ slideInDownAnimation ]
})
export class AnalysisOverviewComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor() { }

  ngOnInit() {
  }

}
