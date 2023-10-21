import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {
// con esta linea @Input() personajes:any [] = [] le decimos a angular que los personajes van a 
// vemnir desde el compornente padre
//el decorador @Input le dice a angular que la informacion a a llegar desde elcomponente padre 
// @Input() personajes:Personaje[] = []
get personajes(){
  return this.dbzService.personajes
}

constructor(private dbzService:DbzService){

}

}
