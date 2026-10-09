import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  // ----- Carreras y filtro (VALOR AGREGADO) -----
  facultades = ['Todas', 'Ingeniería', 'Ciencias de la Salud', 'Derecho', 'Ciencias de la Empresa', 'Humanidades'];
  filtro = 'Todas'; // facultad seleccionada

  carreras = [
    { nombre: 'Ingeniería de Sistemas e Informática', facultad: 'Ingeniería', duracion: '10 ciclos' },
    { nombre: 'Ingeniería Civil', facultad: 'Ingeniería', duracion: '10 ciclos' },
    { nombre: 'Medicina Humana', facultad: 'Ciencias de la Salud', duracion: '14 ciclos' },
    { nombre: 'Psicología', facultad: 'Ciencias de la Salud', duracion: '10 ciclos' },
    { nombre: 'Derecho', facultad: 'Derecho', duracion: '10 ciclos' },
    { nombre: 'Administración y Negocios Internacionales', facultad: 'Ciencias de la Empresa', duracion: '10 ciclos' },
    { nombre: 'Contabilidad y Finanzas', facultad: 'Ciencias de la Empresa', duracion: '10 ciclos' },
    { nombre: 'Comunicación y Marketing', facultad: 'Humanidades', duracion: '10 ciclos' },
  ];

  // Cambia la facultad seleccionada cuando se hace clic en un botón
  seleccionar(facultad: string) {
    this.filtro = facultad;
  }

  // Devuelve solo las carreras de la facultad seleccionada
  carrerasFiltradas() {
    if (this.filtro === 'Todas') {
      return this.carreras;
    }
    return this.carreras.filter(c => c.facultad === this.filtro);
  }

  // ----- Facultades -----
  listaFacultades = [
    { icono: '⚙️', nombre: 'Facultad de Ingeniería', detalle: 'Sistemas, Civil, Industrial y más.' },
    { icono: '🩺', nombre: 'Facultad de Ciencias de la Salud', detalle: 'Medicina, Psicología y Enfermería.' },
    { icono: '⚖️', nombre: 'Facultad de Derecho', detalle: 'Formación jurídica con práctica real.' },
    { icono: '📊', nombre: 'Facultad de Ciencias de la Empresa', detalle: 'Administración, Contabilidad y Negocios.' },
    { icono: '📚', nombre: 'Facultad de Humanidades', detalle: 'Comunicación, Educación y Ciencias Sociales.' },
    { icono: '🏛️', nombre: 'Facultad de Arquitectura', detalle: 'Diseño y construcción de espacios.' },
  ];

  // ----- Información para estudiantes -----
  pasos = [
    'Elige tu carrera',
    'Inscríbete en línea',
    'Rinde tu evaluación de admisión',
    'Realiza tu matrícula',
  ];

  modalidades = [
    { icono: '🏫', nombre: 'Presencial', detalle: 'Clases en el campus con docentes en vivo.' },
    { icono: '🔀', nombre: 'Semipresencial', detalle: 'Combina clases en aula y clases en línea.' },
    { icono: '💻', nombre: 'Virtual', detalle: 'Estudia desde tu casa con clases en línea.' },
  ];

  beneficios = [
    { icono: '🎓', nombre: 'Becas', detalle: 'Descuentos por rendimiento académico.' },
    { icono: '📖', nombre: 'Biblioteca', detalle: 'Libros físicos y recursos digitales.' },
    { icono: '💼', nombre: 'Bolsa de trabajo', detalle: 'Prácticas y empleo para estudiantes.' },
    { icono: '🧠', nombre: 'Bienestar', detalle: 'Apoyo psicológico y deportes.' },
  ];

  // ----- Noticias y eventos -----
  noticias = [
    { tipo: 'Noticia', fecha: '15 de octubre', titulo: 'Estudiantes ganan concurso nacional de innovación', resumen: 'Un equipo de ingeniería presentó una solución tecnológica para la región.' },
    { tipo: 'Evento', fecha: '22 de octubre', titulo: 'Feria de empleabilidad 2026', resumen: 'Empresas aliadas ofrecerán prácticas y empleo a estudiantes y egresados.' },
    { tipo: 'Evento', fecha: '5 de noviembre', titulo: 'Jornada de puertas abiertas', resumen: 'Conoce el campus, los laboratorios y habla con nuestros docentes.' },
  ];
}