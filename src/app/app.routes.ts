import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    {path:'signup', component:SignUpComponent},
    {path:'signin', component:SignInComponent}, 
    {path:'home', component:HomeComponent},
    { path: '**', redirectTo: '/signin' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }

