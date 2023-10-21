
//ppanrtamos el component de angulae core para 
//crear el decorardor

import {Component} from '@angular/core'
//estamos creando un componete de forma manual

@Component({
    selector:'app-contador',
    template:`

        <h1>{{titulo}}</h1>

        <h3>la base es: <strong>{{base}}</strong></h3>

        <button (click)="acumular(base)">+{{base}}</button>

        <span>{{numero}}</span>

        <button (click)="acumular(-base)">-{{base}}</button>
    
    `
})

export class ContadorComponent{
  titulo: string = 'Contador App';
  numero:number = 10

//base number =55

  base:number= 5

  acumular(valor:number){
    this.numero += valor
  }
  sumar() {
    this.numero += 1
  }

  restar() {
    this.numero =this.numero -1//esta la forma larga
  }
}