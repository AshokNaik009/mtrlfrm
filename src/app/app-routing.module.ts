import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegFrmComponent } from './reg-frm/reg-frm.component';

const routes: Routes = [
  { path: '', redirectTo: 'register-form', pathMatch: 'full' },
  { path: 'register-form', component: RegFrmComponent,  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
