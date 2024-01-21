import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  inputSearch='Escribe y lo busco';
  lista = ['de Alba', 'de Raquel', 'de Mari Carmen'];
}
