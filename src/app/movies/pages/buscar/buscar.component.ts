import { Component, OnInit } from '@angular/core';
import {
  MovieDisplay,
  SearchPetition,
} from '../../interfaces/searchPetition.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  movies: MovieDisplay[] = [];
  selectedMovie!: Movie;
  petitionState: String = '';
  error: String = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  buscando(termino: String) {
    this.moviesService.getMoviesByName(termino).subscribe((searchPetition) => {
      this.petitionState = searchPetition.Response;
      this.movies = searchPetition.Search;
      if (this.petitionState !== 'True') {
        this.error = searchPetition.Error;
      }
    });
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    const movie: MovieDisplay = event.option.value;
    if (this.petitionState == 'True') {
      this.termino = movie.Title;
      this.buscando(this.termino);
    }
  }
}
