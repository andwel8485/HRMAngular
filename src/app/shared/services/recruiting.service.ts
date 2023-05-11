import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecruitingService {
  constructor(private httpClient: HttpClient) {}

  getAllCandidates() {
    return this.httpClient.get('https://localhost:50100/api/Candidate');
  }

  addCandidate(candiate: any) {
    return this.httpClient.post(
      'https://localhost:50100/api/Candidate',
      candiate
    );
  }

  deleteCandiate(id: string) {
    return this.httpClient.delete(
      'https://localhost:50100/api/Candidate/' + id
    );
  }

  updateCandidate(candidate: any) {
    return this.httpClient.put(
      'https://localhost:50100/api/Candidate/' + candidate.id,
      candidate
    );
  }

  getCandidateById(id: string) {
    return this.httpClient.get('https://localhost:50100/api/Candidate/' + id);
  }
}
