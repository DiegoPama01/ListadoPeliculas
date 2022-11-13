import { Component, Input } from '@angular/core';
import { MovieDisplay } from '../../interfaces/searchPetition.interface';

@Component({
  selector: 'app-movie-card-component',
  templateUrl: './movie-card-component.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
      }
    `,
  ],
})
export class MovieCardComponentComponent {
  @Input() movie!: MovieDisplay;
}
