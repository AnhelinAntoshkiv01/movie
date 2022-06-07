import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IMovie, IMovies} from "../../interfaces";
import {MovieService} from "../../services";



@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movies: IMovie[];
  page: number;


  constructor(private router:Router,
              private activatedRoute: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page: page}) => {
      this.movieService.getMovies(page || 1).subscribe(value => {
        this.movies = value.results
      })
    })
  }


  prevPage (num: number) {
    this.movieService.getMovies(num-1).subscribe(value => this.movies =value.results)
  }

  nextPage (num: number) {
    this.movieService.getMovies(num+1).subscribe(value => this.movies =value.results)
  }

}
