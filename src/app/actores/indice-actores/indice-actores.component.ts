import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { ActorDTO } from '../actores';
import { ActoreService } from '../actore.service';

@Component({
  selector: 'app-indice-actores',
  imports: [MatButtonModule,RouterLink,MatTableModule],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css'
})
export class IndiceActoresComponent {
 listadoActor!: ActorDTO[];

  displayedColumns: string[] = ['Id', 'nombre', 'fechaNacimiento', 'foto', 'accion'];

  actor = inject(ActoreService);

  constructor(){
      this.actor.obtenerGeneros()
        .subscribe(actor => this.listadoActor = actor);
        console.log(this.listadoActor);
  }
}
