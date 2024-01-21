import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  equip: any = {
    name: 'Alba',
    city: 'Madrid'
  }
  equipDos: any = {
    nameDos: 'Raquel',
    cityDos: 'Gran Canaria'
  }
  equipTres: any = {
    nameTres: 'Mari Carmen',
    cityTres: 'Xàbia'
  }
  lista = ['Madrid es la capital de España']
  listados = ['Gran Canaria está en Islas Canarias']
  listatres = ['Xàbia está en Alicante']
}
