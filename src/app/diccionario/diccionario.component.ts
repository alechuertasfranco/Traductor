import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-diccionario',
  templateUrl: './diccionario.component.html',
  styleUrls: ['./diccionario.component.css']
})
export class DiccionarioComponent implements OnInit {

  brews: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getPokemons().subscribe(data => {
      this.brews = data['results'];
      console.log(this.brews);
    });
  }

}
