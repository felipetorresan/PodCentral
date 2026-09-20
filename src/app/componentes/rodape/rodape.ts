import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-rodape',
  styleUrl: './rodape.css',
  templateUrl: './rodape.html',
})
export class Rodape {
  anoAtual = new Date().getFullYear();
  desenvolvedor = 'Estudante Angular';
}
