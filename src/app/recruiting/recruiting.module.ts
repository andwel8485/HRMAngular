import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitingRoutingModule } from './recruiting-routing.module';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditCandidateComponent } from './add-edit-candidate/add-edit-candidate.component';

@NgModule({
  declarations: [CandidateListComponent, AddEditCandidateComponent],
  imports: [CommonModule, RecruitingRoutingModule, ReactiveFormsModule],
})
export class RecruitingModule {}
