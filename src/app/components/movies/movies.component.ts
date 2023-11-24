import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
})

export class MoviesComponent {
  title = 'Catalogo de Peliculas';
  movies: Array<any> = [];
  showForm = false;
  formulario: FormGroup;

  constructor(private moviesService: MoviesService) {
    this.getMovies();
    this.formulario = this.crearFormulario();
  }

  getMovies() {
    this.moviesService
      .obtener()
      .subscribe((movies: any) => {
        this.movies = movies;
      });
  }

  crearFormulario() {
    return new FormGroup({
      title: new FormControl(''),
      synopsis: new FormControl(''),
      year: new FormControl(''),
      cover: new FormControl(''),
    });
  }

  crearPelicula() {
    this.moviesService
      .crear(this.formulario.value)
      .subscribe((data: any) => {
        this.getMovies();
      });

    this.showForm = false;
  }
};
