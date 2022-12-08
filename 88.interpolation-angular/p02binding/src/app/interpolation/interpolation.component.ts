import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  actor: any = {
    nombre: 'Robert',
    apellidos: 'De Niro',
    fechaNacimiento: new Date(1943, 7, 17)
  }

  getEdad(): number {
    const edad = (new Date().getTime() - this.actor.fechaNacimiento.getTime()) / (365 * 24 * 60 * 60 * 1000);
    return Math.ceil(edad);
  }

}
