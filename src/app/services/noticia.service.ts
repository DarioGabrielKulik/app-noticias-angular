import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  

  constructor(private http:HttpClient){}

  getNoticias(parametros:any):Observable<any>{
    const key = 'f17fffb49fd54d689be32c67698915e2'
 const url= 'https://newsapi.org/v2/top-headlines?country='+ parametros.pais+'&category='+ parametros.categoria+'&apiKey='+ key ;
 return this.http.get(url)
  }

}
