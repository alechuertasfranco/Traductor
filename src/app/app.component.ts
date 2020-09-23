import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a: string;
  b: string;
  public traduce() {
    switch (this.a.toUpperCase()) {
      case 'CASA':
        this.b = 'HOUSE';
        break;
      case 'LIBRO':
        this.b = 'BOOK';
        break;
      case 'MUNDO':
        this.b = 'WORLD';
        break;
      case 'PAIS':
        this.b = 'COUNTRY';
        break;
      default:
        this.b = '';
    }
  }
}
