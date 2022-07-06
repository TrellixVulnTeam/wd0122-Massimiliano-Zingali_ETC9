import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { UsersPage } from './pages/users/users.page';
import { AccountsPage } from './pages/accounts/accounts.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    UsersPage,
    AccountsPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
