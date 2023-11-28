import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class CatalogoService {
  rutaApi = "https://app-imagenes-api-396204a15f66.herokuapp.com/public/api/";

  constructor(private http: HttpClient) {}

  obtener() {
    return this.http.get(`${this.rutaApi}imagenes`);
  }

  crear(item: any) {
    return this.http.post(`${this.rutaApi}imagenes`, item);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.rutaApi}imagenes/${id}`);
  }
}
