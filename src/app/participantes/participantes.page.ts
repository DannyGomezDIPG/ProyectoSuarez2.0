import { Component, EnvironmentProviders, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Participante {
    idParticipante: number;
    nombre: string;
    apellidos: string;
    email: string;
    twitter: string;
    avatar?: string; 
}

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.page.html',
  styleUrls: ['./participantes.page.scss'],
})
export class ParticipantesPage implements OnInit {
  participantes: Participante[] = [];
  url : string = environment.BASE_URL;
  constructor() { }

  ngOnInit() {
    this.fetchData();
  }

  async fetchData(): Promise<void> {
    try {
      const response = await fetch(this.url + '/participantes'); // Asegúrate de que el puerto coincide

      if (!response.ok) {
        throw new Error(`Error de la API: ${response.status}`);
      }
      this.participantes = await response.json();
    } catch (error) {
      console.error('Error al obtener datos:', (error as Error).message);
    }
  }
}
