import { slideInDownAnimation } from '../animations'
import { Component, HostBinding } from '@angular/core';

@Component( {
  templateUrl: 'innovation.component.html',
   animations: [ slideInDownAnimation ]
} )
export class InnovationComponent {
   @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

}
