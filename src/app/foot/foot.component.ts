import { Component } from '@angular/core';


@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})

export class FootComponent {
  textFormulario = 'del equipo número 3'
  currentDate = new Date();
  copyrightText: string = '© App Angular';
  footLinks: { label: string, url: string }[] = [
    { label: 'Inicio', url: '/home' },
    { label: 'Acerca de nosotros', url: '/about' },
    { label: 'Contacto', url: '/contact' }
  ];
}

