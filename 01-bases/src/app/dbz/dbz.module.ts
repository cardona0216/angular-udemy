//primero van las importaciones de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 // despues van las imnpoirtaciones de terceros


 //y despues van nuestras propias importaciones
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.service';

//angular nos ofrece varios tipos de manejo de fromularios este es el tradicioonal
// el FormsModule
@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    //aqui importamos un modulo
    FormsModule
  ],
  // los provaiders son los servicios
  providers:[
    DbzService
  ]
})
export class DbzModule { }
