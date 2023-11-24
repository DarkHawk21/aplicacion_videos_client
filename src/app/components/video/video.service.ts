import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class VideoService {
  rutaApi = "http://localhost:8000/api/movies";

  constructor(private http: HttpClient) {}

  obtener(id: any) {
    return this.http.get(`${this.rutaApi}/${id}`);
  }

  editar(id: any, movie: any) {
    return this.http.put(`${this.rutaApi}/${id}`, movie);
  }

  eliminarPelicula(id: number) {
    return this.http.delete(`${this.rutaApi}/${id}`);
  }
};
