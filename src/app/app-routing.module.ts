import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";

import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {MovielistComponent} from "./components/movielist/movielist.component";
import {GenreBadgeComponent} from "./components/genre-badge/genre-badge.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {GenreComponent} from "./components/genre/genre.component";


const routes: Route[] = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'movies', pathMatch: 'full'},
      {path: 'movies', component: MovielistComponent, children: [
          {path: ':id', component: MovieDetailsComponent}
        ]},
      {path: 'genres', component: GenreBadgeComponent, children: [
          {path: ':id', component: GenreComponent}
        ]}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
