import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IGenre} from "../../interfaces";
import {GenreService} from "../../services";


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input()
  genre: IGenre;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private genreService:GenreService) { }

  ngOnInit(): void {
    this.genreService.getGenreById(this.genre.id).subscribe(value => this.genre = value)
  }

  genreBadge(): void {
    this.router.navigate([this.genre.id], {relativeTo: this.activatedRoute})
  }

}
