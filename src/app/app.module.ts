import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackendConnService } from './backend-conn.service';
import { HttpClientModule } from '@angular/common/http';
import { FirstpageComponent } from './firstpage/firstpage.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    LoginComponent,
    HomeComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [BackendConnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
