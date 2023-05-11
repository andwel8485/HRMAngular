import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruitingService } from 'src/app/shared/services/recruiting.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
})
export class CandidateListComponent implements OnInit {
  candidates: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    resumeURL: string;
  }[] = [];

  constructor(
    private router: Router,
    private recruitingService: RecruitingService
  ) {}
  ngOnInit(): void {
    this.getCandidate();
  }

  getCandidate() {
    this.recruitingService.getAllCandidates().subscribe((d: any) => {
      this.candidates = d;
      console.log(d);
    });
  }

  deleteCandidate(id: string) {
    this.recruitingService.deleteCandiate(id).subscribe((d: any) => {
      console.log(d);
      if (d) {
        this.getCandidate();
      }
    });
  }

  editCandidate(id: string) {
    this.router.navigateByUrl('app/recruiting/add-edit-candidate/' + id);
  }
}
