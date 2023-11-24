import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class MoviesService {
  rutaApi = "http://localhost:8000/api/movies";

  constructor(private http: HttpClient) {}

  obtener() {
    return this.http.get(`${this.rutaApi}`);
  }

  crear(pelicula: any) {
    return this.http.post(`${this.rutaApi}`, pelicula);
  }
};
