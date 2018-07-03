import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-adicionlista',
  templateUrl: './adicionlista.component.html',
  styleUrls: ['./adicionlista.component.css']
})
export class AdicionlistaComponent implements OnInit {
  item: any = {
    name: ''
  };
  constructor(private conexion: ConexionService) { }

  ngOnInit() {
  }
agregar() {
this.conexion.agregarItem(this.item);
this.item.name = '';
}

}
