import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarRegistroPage } from './agregar-registro.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarRegistroPageRoutingModule {}
