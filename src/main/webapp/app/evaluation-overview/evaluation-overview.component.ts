import { slideInDownAnimation } from '../animations'
import { Component, OnInit, HostBinding } from '@angular/core';

@Component( {
  selector: 'jhi-evaluation',
  templateUrl: 'evaluation-overview.component.html',
  animations: [ slideInDownAnimation ]
} )
export class EvaluationOverviewComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor() { }

  ngOnInit() {
  }

}
{

}
