import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nueva-pagina',
  templateUrl: './nueva-pagina.page.html',
  styleUrls: ['./nueva-pagina.page.scss'],
})
export class NuevaPaginaPage implements OnInit {
  
  @ViewChild('sidenav') sidenav!: MatSidenav;
  
  constructor(
  ) { }

  ngOnInit() {
  }

}
