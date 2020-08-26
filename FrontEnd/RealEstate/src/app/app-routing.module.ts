import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EstatesComponent } from './components/estates/estates.component';
import { EstateComponent } from './components/estate/estate.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ingatlanok/lista', component: EstatesComponent },
  { path: 'ingatlanok/adatlap/:external_id', component: EstateComponent },
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
