import { Component, OnInit } from '@angular/core';
import { MovieDisplay, SearchPetition } from '../../interfaces/searchPetition.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  movieList: MovieDisplay[] = [];
  constructor(private moviesService: MoviesService) { }
  ngOnInit(): void {
    this.moviesService.getMovies().subscribe( movies => {
      this.movieList = movies.Search;
    });
  }

}
