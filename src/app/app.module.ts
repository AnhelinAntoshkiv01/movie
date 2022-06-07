import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MainInterceptor} from "./main.interceptor";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import { HeaderComponent } from './components/header/header.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { GenreBadgeComponent } from './components/genre-badge/genre-badge.component';
import { GenreComponent } from './components/genre/genre.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { MovielistCardComponent } from './components/movielist-card/movielist-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';




@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    UserinfoComponent,
    GenreBadgeComponent,
    GenreComponent,
    MovielistComponent,
    MovielistCardComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
