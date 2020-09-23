import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregaComponent } from './agrega/agrega.component';
import { TraduceComponent } from './traduce/traduce.component';
import { DiccionarioComponent } from './diccionario/diccionario.component';

const routes: Routes = [
  {path: 'agrega', component: AgregaComponent},
  {path: 'traduce', component: TraduceComponent},
  {path: 'diccionario', component: DiccionarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
