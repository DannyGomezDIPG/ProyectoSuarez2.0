import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./app.component').then(m => m.AppComponent)
      },
    {
      path: 'nueva-pagina',
      loadChildren: () => import('./inicio/inicio.component').then(m => m.InicioComponent)
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }