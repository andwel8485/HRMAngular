import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCandidateComponent } from './add-edit-candidate/add-edit-candidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';

const routes: Routes = [
  {
    path: 'candidate-list',
    component: CandidateListComponent,
  },

  {
    path: 'add-edit-candidate/:id',
    component: AddEditCandidateComponent,
  },
  {
    path: 'add-edit-candidate',
    component: AddEditCandidateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecruitingRoutingModule {}
