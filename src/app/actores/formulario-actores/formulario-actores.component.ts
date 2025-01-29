import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActorDTO, ActorCreacionDTO } from '../actores';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-actor',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, CommonModule],
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActorComponent implements OnInit {
  @Output()
  posteoFormulario = new EventEmitter<ActorCreacionDTO>();

  @Input() modelo?: ActorDTO;

  private formBuilder = inject(FormBuilder);

  fotoSubida: File | null = null;

  form = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    fechaNacimiento: [null, [Validators.required]],
    foto: [null as File | null, [Validators.required]]
  });

  ngOnInit(): void {
   
  }
  
  obteneMensajeError(campo: string): string {
    const control = this.form.get(campo);
    if (control?.hasError('required')) {
      return 'El campo es requerido';
    }
    return '';
  }

  onArchivoSeleccionado(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fotoSubida = input.files[0];
      this.form.controls.foto.setValue(this.fotoSubida); 
    } else {
      this.fotoSubida = null;
      this.form.controls.foto.setValue(null); 
    }
  }

  guardarCambios(): void {
    if (!this.form.valid) {
      return;
    }
  
    const actor: ActorCreacionDTO = {
      nombre: this.form.value.nombre || null,
      fechaNacimiento: this.form.value.fechaNacimiento ? new Date(this.form.value.fechaNacimiento) : null, // Fecha como Date o null
      foto: this.fotoSubida 
    };
  
    console.log(actor);
    this.posteoFormulario.emit(actor);
  }
  
}

