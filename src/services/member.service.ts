import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/Member';

@Injectable({ //decorateur -> annotation  le serv se declare qu il peut etre injecter => donc peut etre utiliser a l ext soit dans un aute serv ou component
  providedIn: 'root' // accepte d etre injecter sur tout le src du projet

})
export class MemberService {

  constructor(private http: HttpClient) { }
  //fonction qui envoie la req en mode GET
  GetAllMembers(): Observable<Member[]> {
    // httpClient 
    return this.http.get<Member[]>('http://localhost:3000/members')
  }

  addMember(member: Member): Observable<void> { //type de retour  de la fnct est Observalble
    return this.http.post<void>('http://localhost:3000/members', member);
  }
  delete(id: String): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/members/${id}`);
  }
  edit(id: String, member: Member): Observable<void> {
    return this.http.put<void>(`http://localhost:3000/members/${id}`, member);
  }
  getMembeById(id: String): Observable<Member> {
    return this.http.get<Member>(`http://localhost:3000/members/${id}`)
  }
}
