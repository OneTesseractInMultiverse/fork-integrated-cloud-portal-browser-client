import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SkillDashboardComponent} from './skill-dashboard.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
    {
        path: '**', component: SkillDashboardComponent
    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SkillDashboardRoutingModule { }
