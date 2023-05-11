import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecruitingService } from 'src/app/shared/services/recruiting.service';
@Component({
  selector: 'app-add-edit-candidate',
  templateUrl: './add-edit-candidate.component.html',
  styleUrls: ['./add-edit-candidate.component.css'],
})
export class AddEditCandidateComponent implements OnInit {
  id!: string;
  candidateForm!: FormGroup;
  isAddMode!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recruitingService: RecruitingService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.candidateForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      resume: new FormControl(''),
    });

    if (!this.isAddMode) {
      this.recruitingService.getCandidateById(this.id).subscribe((c) => {
        this.candidateForm.patchValue(c);
      });
    }
  }

  onSubmit() {
    let candidate = {
      id: this.id,
      firstName: this.candidateForm.value.firstName,
      lastName: this.candidateForm.value.lastName,
      email: this.candidateForm.value.email,
      resumeURL: this.candidateForm.value.resume,
    };
    console.log(this.candidateForm.value);
    if (this.isAddMode) {
      this.addCandidate(candidate);
    } else {
      this.updateCandidate(candidate);
    }
  }

  private updateCandidate(candidate: any) {
    this.recruitingService.updateCandidate(candidate).subscribe((d) => {
      if (d) {
        this.router.navigateByUrl('app/recruiting/candidate-list');
      }
    });
  }

  private addCandidate(candidate: any) {
    this.recruitingService.addCandidate(candidate).subscribe((d) => {
      if (d) {
        this.router.navigateByUrl('app/recruiting/candidate-list');
      }
    });
  }
  get f() {
    return this.candidateForm.controls;
  }
}
