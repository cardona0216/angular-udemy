import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  nuevo:Personaje={
    nombre: 'kjfhskjfdh',
    poder: 756476
  }

  // get personajes():Personaje[]{
  //   return this.dbzService.personajes
  // }


  constructor(){
    // this.personajes = this.dbzService.personajes

  }

  // nos definimos un objeto
  

 
}
