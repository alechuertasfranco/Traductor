import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traduce',
  templateUrl: './traduce.component.html',
  styleUrls: ['./traduce.component.css']
})
export class TraduceComponent {

  a: string;
  b: string;
  public traduce() {
    switch (this.a.toUpperCase()) {
      case 'CASA':
        this.b ='HOUSE';
        break;
      case 'LIBRO':
        this.b ='BOOK';
        break;
      case 'MUNDO':
        this.b ='WORLD';
        break;
      case 'PAIS':
        this.b ='COUNTRY';
        break;
      default:
        this.b ='';
    }

  }

}
