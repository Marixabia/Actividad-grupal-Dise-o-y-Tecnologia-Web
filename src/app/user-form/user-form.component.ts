import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  inputMessage='Escribe tu nombre dentro del cuadro';
  valor1: 0;
  valor2: 0;
  resultado=0;
  sumar(){
    this.resultado=this.valor1 + this.valor2;
  }
}

