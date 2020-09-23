import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TraduceComponent } from './traduce/traduce.component';
import { AgregaComponent } from './agrega/agrega.component';
import { DiccionarioComponent } from './diccionario/diccionario.component';

@NgModule({
  declarations: [
    AppComponent,
    TraduceComponent,
    AgregaComponent,
    DiccionarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
