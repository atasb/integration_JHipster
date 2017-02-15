import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InnovationComponent } from './innovation-overview/innovation.component';
import { EvaluationOverviewComponent } from './evaluation-overview/evaluation-overview.component';
import { AnalysisOverviewComponent } from './analysis-overview/analysis-overview.component';

const appRoutes: Routes = [
  {
    path: '/innovation',
    component: InnovationComponent
  },
  {
    path: '/evaluation',
    component: EvaluationOverviewComponent
  },
  {
    path: '/analysis',
    component: AnalysisOverviewComponent
  },
  {path: '', redirectTo: '/innovation', pathMatch: 'full'},
];

@NgModule( {
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
} )
export class AppRoutingModule {

}
