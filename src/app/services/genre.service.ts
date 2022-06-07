import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IGenre} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) { }

  getGenres(): Observable<IGenre[]> {
    return this.httpClient.get<IGenre[]>(urls.genres);
  }

  getGenreById(id: number): Observable<IGenre> {
    return this.httpClient.get<IGenre>(`${urls.movies}?with_genres=${id}`)
  }
}
