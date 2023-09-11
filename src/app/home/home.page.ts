import { Component } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  componente:Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'airplane-outline',
      name: 'Alert',
      redirecTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirecTo: '/avatar'
    },
  ];
  constructor() { }

  aa() {
    console.log("aa");

  }

}
