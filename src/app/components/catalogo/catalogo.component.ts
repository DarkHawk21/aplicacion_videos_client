import { Component } from '@angular/core';
import { CatalogoService } from './catalogo.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})

export class CatalogoComponent {
  items: Array<any> = [];
  showModal: boolean = false;
  formulario: FormGroup;

  constructor(private catalogoService: CatalogoService) {
    this.getItems();
    this.formulario = this.crearFormulario();
  }

  getItems() {
    this.catalogoService
      .obtener()
      .subscribe((data: any) => {
        this.items = data;
      }
    );
  }

  crearFormulario() {
    return new FormGroup({
      titulo: new FormControl(''),
      imagen: new FormControl(''),
    });
  }

  agregarItem() {
    this.catalogoService
      .crear(this.formulario.value)
      .subscribe((data: any) => {
        this.getItems();
        this.formulario.reset();
        this.showModal = false;
      }
    );
  }

  eliminarItem(id: number) {
    if (window.confirm("¿Estás seguro de eliminar este elemento?")) {
      this.catalogoService
        .eliminar(id)
        .subscribe((data: any) => {
          this.getItems();
        });
    }
  }
};
