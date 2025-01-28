import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormularioActorComponent } from "../formulario-actores/formulario-actores.component";
import { ActorCreacionDTO } from '../actores';

@Component({
  selector: 'app-crear-actor',
  imports: [MatButtonModule, FormularioActorComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {
  router = inject(Router);

  guardarCambios(actor: ActorCreacionDTO) {
    console.log('Insertar actor', actor);
    // Lógica para insertar actor, por ejemplo, enviar a un servicio
    // Redirigir a otra ruta después de guardar
    // this.router.navigate(['/actores']);
  }
}