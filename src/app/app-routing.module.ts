import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'nueva-pagina',
    loadChildren: () => import('./nueva-pagina/nueva-pagina.module').then( m => m.NuevaPaginaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'participantes',
    loadChildren: () => import('./participantes/participantes.module').then( m => m.ParticipantesPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'conferencias',
    loadChildren: () => import('./conferencias/conferencias.module').then( m => m.ConferenciasPageModule)
  },  {
    path: 'agregar-registro',
    loadChildren: () => import('./agregar-registro/agregar-registro.module').then( m => m.AgregarRegistroPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
