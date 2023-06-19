import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {USER_REPOSITORY} from "./ports/user.repository.token";
import {UserRepositoryHttp} from "./adapters/user.repository.http";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: USER_REPOSITORY, useClass: UserRepositoryHttp },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
