import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllUsersService } from './global_services/all-users.service';
import { HomeComponent } from './home/home.component';
import { CreateThreadComponent } from './home/create-thread/create-thread.component';
import { ShowThreadComponent } from './home/show-thread/show-thread.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    SignInComponent,
    HomeComponent,
    CreateThreadComponent,
    ShowThreadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AllUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
