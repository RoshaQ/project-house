import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { HouseRoutingModule } from './house-routing.module';
import { LoginComponent } from './login/components/login/login.component';
import { HomeComponent } from './home/components/home/home.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HouseRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent
  ]
})
export class HouseModule { }
