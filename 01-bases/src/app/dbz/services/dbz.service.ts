import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

// esta es la difencia que hay entre un componete es el decarador
@Injectable()
export class DbzService{

    private _personajes:Personaje[]=[
        {
          nombre:'Goku',
          poder:15000
        },
        {
          nombre:'vegeta',
          poder:7500
        }
      ];
      get personajes():Personaje[]{
        return [...this._personajes]
      }
    constructor(){}
//el servicio solos e ejecuta hasta que laguin lo solicite
    agregarpersonaje(personaje:Personaje){
          this._personajes.push(personaje)  
    }
}