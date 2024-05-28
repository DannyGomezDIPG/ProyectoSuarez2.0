import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-agregar-registro',
  templateUrl: './agregar-registro.page.html',
  styleUrls: ['./agregar-registro.page.scss'],
})
export class AgregarRegistroPage implements OnInit {
  registroForm!: FormGroup;
  url : string = environment.BASE_URL;
  private router!: Router;
  
  constructor(private fb: FormBuilder, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      twitter: ['', Validators.required],
      avatar: ['', Validators.required],
      terminos: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.registroForm.invalid) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const confirmacion = window.confirm("¿Estás seguro de que deseas registrarte?");
    if (!confirmacion) {
      return;
    }

    const participante = this.registroForm.value;
    this.http.post( this.url + '/insertarParticipantes', participante)
      .subscribe({
        next: (response) => {
          console.log('Participante insertado con éxito:', response);
          alert('Participante insertado con éxito');
          this.router.navigate(['/participantes']); 
        },
        error: (error) => {
          console.error('Error al insertar el participante:', error);
          alert('Error al insertar el participante');
        }
      });
  }


}
