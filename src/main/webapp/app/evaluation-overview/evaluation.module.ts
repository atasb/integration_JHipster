import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EvaluationOverviewComponent } from './evaluation-overview.component';
import { EvaluationRoutingModule } from './evaluation-routing.module';
import { EvaluationQuestionComponent } from './evaluation-question/evaluation-question.component';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    EvaluationRoutingModule,
  ],
  declarations: [
    EvaluationOverviewComponent,
    EvaluationQuestionComponent,
  ],
  providers: []
} )
export class EvaluationModule {

}
