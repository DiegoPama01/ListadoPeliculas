import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchPetition } from '../interfaces/searchPetition.interface';
import { Movie } from '../interfaces/movies.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getMovies() { 
    return this.http.get<SearchPetition>(`${this.baseUrl}?s=Matrix&apikey=4c5e476e`);
  }

  getMoviesByID(id:String) { 
    return this.http.get<Movie>(`${this.baseUrl}?i=${id}&apikey=4c5e476e`);
  }

  getMoviesByName(name:String) { 
    return this.http.get<SearchPetition>(`${this.baseUrl}?s=${name}&apikey=4c5e476e`);
  }

}
