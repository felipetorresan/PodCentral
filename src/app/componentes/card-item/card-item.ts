import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card-item',
  styleUrl: './card-item.css',
  templateUrl: './card-item.html',
})
export class CardItem {
    podcast = {
      titulo: 'Podcast do Zezin',
      apresentador: 'Zezinho',
      duracao: '45 min',
      descricao: 'Aula basica de angular',
      imagem: 'https://picsum.photos/300/200?random=1',
      disponivel: true
    };

  favorito = false;

  @Output() aoSelecionar = new EventEmitter<any>();

  alternarFavorito(): void {
    this.favorito = !this.favorito;
  }

  verDetalhes(): void {
    this.aoSelecionar.emit(this.podcast);
  }
}
