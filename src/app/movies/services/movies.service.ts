import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/movies.interface';
import { SearchPetition } from '../interfaces/searchPetition.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private busquedaEjemplo: string[] = [
    'Matrix',
    'Iron Man',
    'Toy Story',
    'Superman',
    'Spiderman',
    'Evangelion',
  ];

  private baseUrl: string = environment.baseUrl;
  private apikey: string = environment.apikey;

  constructor(private http: HttpClient) {}

  getMovies() {
    let number: number = Math.floor(
      Math.random() * this.busquedaEjemplo.length
    );
    return this.http.get<SearchPetition>(
      `${this.baseUrl}?s=${this.busquedaEjemplo[number]}&type=movie&apikey=${this.apikey}`
    );
  }

  getMoviesByID(id: String) {
    return this.http.get<Movie>(
      `${this.baseUrl}?i=${id}&type=movie&apikey=${this.apikey}`
    );
  }

  getMoviesByName(name: String) {
    return this.http.get<SearchPetition>(
      `${this.baseUrl}?s=${name}&type=movie&apikey=${this.apikey}`
    );
  }
}
