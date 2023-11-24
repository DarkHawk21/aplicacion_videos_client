import { Component } from '@angular/core';
import { VideoService } from './video.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'video',
  templateUrl: './video.component.html',
})

export class VideoComponent {
  title = 'Video';
  movie: any;
  showForm = false;
  formulario: FormGroup;

  constructor(
    private movieService: VideoService,
    private route: ActivatedRoute
  ) {
    this.formulario = this.crearFormulario();
  }

  ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id');
    this.getMovie(movieId);
  }

  async getMovie(id: any) {
    this.movieService
      .obtener(id)
      .subscribe((movie: any) => {
        this.movie = movie;
        this.formulario = this.crearFormulario();
      });
  }

  editMovie(id: any) {
    this.movieService
      .editar(id, this.formulario.value)
      .subscribe((movie: any) => {
        this.movie = movie;
      });

    this.showForm = false;
  }

  crearFormulario() {
    return new FormGroup({
      title: new FormControl(this.movie ? this.movie.title : ''),
      synopsis: new FormControl(this.movie ? this.movie.synopsis : ''),
      year: new FormControl(this.movie ? this.movie.year : ''),
      cover: new FormControl(this.movie ? this.movie.cover : ''),
    });
  }

  eliminar(id: number) {
    if (window.confirm("¿Estás seguro de eliminar esta película?")) {
      this.movieService
        .eliminarPelicula(id)
        .subscribe((data: any) => {
          window.location.href = '/movies';
        });
    }
  }
};
