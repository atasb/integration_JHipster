import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EvaluationOverviewComponent } from './evaluation-overview.component';
import { EvaluationQuestionComponent } from './evaluation-question/evaluation-question.component';

const evaluationRoutes: Routes = [
  {
    path: 'evaluation',
    component: EvaluationOverviewComponent,
    children: [
      {
        path: ':questionId',
        component: EvaluationQuestionComponent
      }
    ]
  }
];

@NgModule( {
  imports: [
    RouterModule.forRoot(
      evaluationRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
} )
export class EvaluationRoutingModule {

}
