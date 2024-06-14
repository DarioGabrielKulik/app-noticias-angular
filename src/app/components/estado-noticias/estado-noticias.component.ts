import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estado-noticias',
  templateUrl: './estado-noticias.component.html',
  styleUrl: './estado-noticias.component.css'
})
export class EstadoNoticiasComponent {


  @Input() recibirNoticias: any;

  constructor(){}
}
