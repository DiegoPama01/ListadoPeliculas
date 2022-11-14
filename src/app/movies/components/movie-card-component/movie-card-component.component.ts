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

      img{
        height: 480px;
        width: 100;
      }
    `,
  ],
})
export class MovieCardComponentComponent {
  @Input() movie!: MovieDisplay;
}
