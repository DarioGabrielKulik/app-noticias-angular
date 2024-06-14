import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
@Output() parametrosSeleccionados = new EventEmitter<any>();

categoriaSeleccionada:string = 'general';
paisSeleccionado:string = 'ar';

  categorias: any[] = [
    {value:'general', nombre:'General'},
    {value:'business', nombre:'Negocio'},
    {value:'entertainment', nombre:'Entretenimiento'},
    {value:'health', nombre:'Salud'},
    {value:'science', nombre:'Ciencia'},
    {value:'sports', nombre:'Deporte'},
    {value:'technology', nombre:'Tecnologia'}
  ];

  paises: any[]=[
    {value:'ar', nombre:'Argentina'},
    {value:'br', nombre:'Brasil'},
    {value:'fr', nombre:'Francia'},
    {value:'hu', nombre:'Hungria'},
    {value:'mx', nombre:'Mexico'},
    {value:'gb', nombre:'Reino Unido'}
  ];

  constructor(){}

 buscarNoticia(){
  const PARAMETROS = {
    categoria: this.categoriaSeleccionada,
    pais: this.paisSeleccionado
  }

  this.parametrosSeleccionados.emit(PARAMETROS)
 }
}
