import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor1: string = "";
  valor2: string= "";
  resultado: string = "";
  resultado2: string = "";
  constructor() {
  }

  ingresar() {
    if (this.valor1.length == 0 && this.valor2.length == 0) {
      this.resultado = 'Ganó';
      this.resultado = 'Ganó';
    }
    else {
      this.resultado = 'Perdió';
      this.resultado = 'Perdió';
    }
  }

}
