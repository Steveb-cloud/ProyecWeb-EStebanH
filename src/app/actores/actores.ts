export interface ActorDTO {
  id: number;
  nombre: string;
  fechaNacimiento: Date | null;  // Usamos Date | null
  foto: File | null;
}

export interface ActorCreacionDTO {
  nombre: string | null;
  fechaNacimiento: Date | null;  // Usamos Date | null
  foto: File | null;
}
