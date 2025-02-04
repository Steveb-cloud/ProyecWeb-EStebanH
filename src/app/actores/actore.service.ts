import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActorDTO } from './actores';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActoreService {
  private http = inject(HttpClient);

  constructor() { }

  public obtenerGeneros(): Observable<ActorDTO[]>{
      return this.http.get<ActorDTO[]>("http://apicodersnet.runasp.net/api/actores")
    }
  
}
