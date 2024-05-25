import { Component, NgModule } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  irANuevaPagina() {
    this.router.navigate(['/nueva-pagina']);
  }

}
