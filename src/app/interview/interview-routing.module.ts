import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { InterviewListComponent } from './interview-list/interview-list.component';

const routes: Routes = [
  {
    path: 'add-interview',
    component: AddInterviewComponent,
  },
  { path: 'interview-list', component: InterviewListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterviewRoutingModule {}
