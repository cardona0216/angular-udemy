import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

//voy  a crear un arreglo para trabajar con el ngfor
// en el html el ngfor se trabaja en el html

//con el ngfor recorremos todo el arreglo en le html
heroes: string[] = ['ironman','superman','thor','hulk','walter']
 heroeborrad:string = ''
removerheroe(){
  const heroeborrado = this.heroes.shift()
  
 this.heroeborrad = heroeborrado || ''
}

}
