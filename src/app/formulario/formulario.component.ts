import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() usuario: string = "";
  @Input() clave: string = "";
  verificacion1: string = "";
  verificacion2: string = "";

  constructor() { }

  ngOnInit() {
  }

  verificar() {
    if (this.usuario.length <= 6) {
      this.verificacion1 = 'Campo del usuario incorrecto.';
      return false;
    }
    if (this.clave.length <= 4) {
      this.verificacion2 = 'Campo de la contraseña incorrecto.';
      return false;
    }
    return true;
  }

  ingresar() {
    if (this.verificar()) {
      this.verificacion1 = "";
      this.verificacion2 = "";
      alert("Ingreso correcto.");
    }
  }

}
