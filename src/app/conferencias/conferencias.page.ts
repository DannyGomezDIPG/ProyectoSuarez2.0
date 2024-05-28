import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-conferencias',
  templateUrl: './conferencias.page.html',
  styleUrls: ['./conferencias.page.scss'],
})
export class ConferenciasPage implements OnInit {

  conferencias: any[] = [];
  url : string = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerConferencias();
  }

  obtenerConferencias(): void {
    this.http.get<any[]>(this.url + '/Conferencias/todasLasConferencias').subscribe({
      next: (data) => {
        this.conferencias = data;
      },
      error: (error) => {
        console.error('Error al obtener las conferencias:', error);
      }
    });
  }
}
