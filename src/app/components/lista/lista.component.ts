import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  items: any;
  editarItem: any = {
    name: ''
  };
  constructor(private conexion: ConexionService) {
    this.conexion.listarItem().subscribe(item => {
      this.items = item;
      console.log(this.items); } );
   }
  ngOnInit() {
  }
  eliminar(item) {
  this.conexion.eliminarItem(item);
}
  editar(item) {
  this.editarItem = item;
  }
  agregarItemEditado() {
    this.conexion.editarItem(this.editarItem);
  }
}
