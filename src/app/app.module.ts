import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import {NgOptimizedImage} from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { FilierDetailsComponent } from './pages/filier-details/filier-details.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChoixFilireComponent } from './pages/choix-filire/choix-filire.component';
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import { FilierListComponentComponent } from './pages/filier-list-component/filier-list-component.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    FilierDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ChoixFilireComponent,
    FilierListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    CdkDropList,
    CdkDrag,
    CdkDropListGroup,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
