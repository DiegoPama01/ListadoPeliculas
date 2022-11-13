import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Movie } from '../../interfaces/movies.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles:[
    `
    img{
      width: 100%;
      border-radius: 5px;
    }
    `
  ]
})
export class MovieComponent implements OnInit {
  movie!: Movie;

  constructor(
    private activaterRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.activaterRoute.params
      .pipe(switchMap(({ id }) => this.moviesService.getMoviesByID(id)))
      .subscribe((movie) => (this.movie = movie));
  }

  regresar(){
    this.router.navigate(['movies/listado'])
  }
}
