import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IMovie, IMovies} from "../interfaces";
import {urls} from "../constants";


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovies(page: number = 1): Observable<IMovies> {
    return this.httpClient.get<IMovies>(urls.movies, {params: {page}});
  }

  getById(id: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movie}/${id}`);
  }

}
