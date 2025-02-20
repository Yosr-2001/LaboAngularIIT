import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/models/Evt';

@Injectable({ // si le decorateur n existe pas il ne peut pas etre injecter
  providedIn: 'root' // il est injectable sur toute l hierchie du code
})
export class EventService {

  constructor(private http: HttpClient) { }

  GetAllEvts(): Observable<Evt[]> {
    return this.http.get<Evt[]>('http://localhost:3000/evts')
  }
  delete(id: String): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/evts/${id}`);
  }
}
