import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

listNoticia: any[] = []

constructor(private _services:NoticiaService ){}

buscarNoticias(parametros:any){

this._services.getNoticias(parametros).subscribe(data => {
  console.log(data)
this.listNoticia = data.articles
})  
}
}
