import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data!: Pelicula;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('http://www.omdbapi.com/?t=Star&apikey=4c5e476e')
      .subscribe((data: any) => {
        this.data = data;
      });
  }
}

export interface Pelicula {
  Title: String;
  Year: Number;
  Rated: String;
  Released: String;
  Runtime: String;
  Genre: String[];
  Poster: String;
  Director: String;
}
