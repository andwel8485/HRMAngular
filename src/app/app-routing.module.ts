import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'app',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'interview',
        loadChildren: () =>
          import('./interview/interview.module').then((m) => m.InterviewModule),
      },
      {
        path: 'onboarding',
        loadChildren: () =>
          import('./onboarding/onboarding.module').then(
            (m) => m.OnboardingModule
          ),
      },
      {
        path: 'recruiting',
        loadChildren: () =>
          import('./recruiting/recruiting.module').then(
            (m) => m.RecruitingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
