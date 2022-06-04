import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movielist-card',
  templateUrl: './movielist-card.component.html',
  styleUrls: ['./movielist-card.component.css']
})
export class MovielistCardComponent implements OnInit {

  @Input()
  movie: IMovie;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

}
