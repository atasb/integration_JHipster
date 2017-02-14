import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InnovationComponent } from './innovation.component';
import { InnovationListComponent } from './innovation-list/innovation-list.component';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    InnovationComponent,
    InnovationListComponent
  ],
  providers: []
} )
export class InnovationModule {

}
