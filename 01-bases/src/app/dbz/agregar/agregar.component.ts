import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  // @Input() personajes: any[] = []

  @Input() nuevo:Personaje={
    nombre: '',
    poder: 0
  }
// este  @Output() es usado cuando se tiene un componente hijo y este componente hijo desea emitir un valor
// al componente padre es como cualquier otro evento
// vamos a crearnos un nuevo evento personalizado  que cuando algo suceda en el componente, quien sea que use en componente
// sea capaz de reaccionar a este evento
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
constructor(private dbzService:DbzService){}
  agregar(){
    if (this.nuevo.nombre.trim().length === 0) {return}
   
this.dbzService.agregarpersonaje(this.nuevo)
    // this.onNuevoPersonaje.emit(this.nuevo)
    
    this.nuevo= {
      nombre:'',
      poder:0}
    
  }
  

}
