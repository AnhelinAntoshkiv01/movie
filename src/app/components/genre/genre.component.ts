import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {IGenre} from "../../interfaces";
import {urls} from "../../constants";


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input()
  genre: IGenre;

  constructor(private router: Router,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  genreBadge() {
    this.router.navigate([`${urls.movie}?with_genres=${this.genre.id}`])
  }
}
