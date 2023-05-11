import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { InterviewListComponent } from './interview-list/interview-list.component';


@NgModule({
  declarations: [
    AddInterviewComponent,
    InterviewListComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule
  ]
})
export class InterviewModule { }
