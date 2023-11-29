import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './header/about/about.component';
import { BloodBankComponent } from './header/blood-bank/blood-bank.component';
import { DonorComponent } from './header/donor/donor.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { loginComponent } from './header/login/login.component';
import { RecipientComponent } from './header/recipient/recipient.component';

const appRoute:Routes=[

{path:'', redirectTo:'login' , pathMatch: 'full'},
{path:'home', component: HomeComponent},
{path:'login', component: loginComponent},

{path:'Donor', component: DonorComponent},
{path:'Recipient', component: RecipientComponent},
{path:'BloodBank', component: BloodBankComponent},
{path:'About', component: AboutComponent},



];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    DonorComponent,
    RecipientComponent,
    BloodBankComponent,
    HomeComponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
