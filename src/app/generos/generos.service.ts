import { Observable } from 'rxjs';
import { GeneroDTO } from './generos';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  private http = inject(HttpClient);

  constructor() { }

  public obtenerGeneros(): Observable<GeneroDTO[]>{
    return this.http.get<GeneroDTO[]>("http://apicodersnet.runasp.net/api/Generos")
  }

 /* public obtenerTodos():GeneroDTO[]{
    return[
      {id:1, nombre:'Accion'},
      {id:2, nombre:'terror'},
      {id:3, nombre:'fantacia'}

    ]
  }*/
}
