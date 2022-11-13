import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { MovieCardComponentComponent } from './components/movie-card-component/movie-card-component.component';


@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    ListadoComponent,
    BuscarComponent,
    MovieCardComponentComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ],
})
export class MoviesModule {}
