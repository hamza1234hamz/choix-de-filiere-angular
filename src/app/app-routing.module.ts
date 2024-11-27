import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {FilierDetailsComponent} from './pages/filier-details/filier-details.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {ChoixFilireComponent} from './pages/choix-filire/choix-filire.component';
import {FilierListComponentComponent} from './pages/filier-list-component/filier-list-component.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {ProfilComponent} from './pages/profil/profil.component'; // Assurez-vous que ce chemin est correct.

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filiere-details', component: FilierDetailsComponent },
  // { path: 'filier-details/:id', component: FilierDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'choix-filire' , component: ChoixFilireComponent },
  { path: 'Filire-list' ,component: FilierListComponentComponent},
  { path: 'forgot-password' , component: ForgotPasswordComponent },
  { path: 'profil' , component: ProfilComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule] // Exportation pour permettre son utilisation dans le module principal
})
export class AppRoutingModule{}
