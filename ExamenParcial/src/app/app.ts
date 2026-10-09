import { Component } from '@angular/core';
import { Header } from './Componentes/header/header';
import { Main } from './Componentes/main/main';
import { Footer } from './Componentes/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}