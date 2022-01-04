import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cerveja } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = window.location.href.split('/')[2]=='localhost:4200' ? "http://localhost:8081/" : "http://5.183.9.193:8081/"; 

  constructor(private http: HttpClient) { }

  createCerveja(request: Cerveja):Observable<any>{
    return this.http.post(this.url,request);
  }

  updateCerveja(id:number, request: Cerveja):Observable<any>{
    return this.http.put(this.url+id,request);
  }

  getAllCerveja():Observable<Cerveja[]>{
    return this.http.get<Cerveja[]>(this.url);
  }

  getOneCerveja(id: number):Observable<Cerveja>{
    return this.http.get<Cerveja>(this.url+id);
  }
}
