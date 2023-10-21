import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl:'./heroe.component.html'
})
export class HeroeComponent {
    nombre:string = 'Ironman';
    edad:number = 45

    /**
     como es una clase me puedo crear los get y set
     y se vera como una propiedad normal
     */

     get nombrecapitalizado(){
        return this.nombre.toUpperCase()
     }



    obteneredad():string{
        return `${this.nombre}-${this.edad}`
        // return this.nombre+ ''+this.edad// estos dos coidgos son 
        //lo mismo
    }

    cambiarnombre(){
        this.nombre = 'walter'
    }

    cambiaredad(){
        this.edad = 55
    }


}