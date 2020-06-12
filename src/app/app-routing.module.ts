import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/shared/faq/faq.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
