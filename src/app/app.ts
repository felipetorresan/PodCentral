import { Component, signal } from '@angular/core';
import { Rodape } from './componentes/rodape/rodape';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { CardItem } from './componentes/card-item/card-item';
import { Detalhes } from './componentes/detalhes/detalhes';


@Component({
  imports: [CardItem, Cabecalho, Rodape, Detalhes],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  titulo = 'PodCentral - O seu Portal de Podcasts';
  usuarioLogado = false;
  podcastSelecionado: any = null;

  alterarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }

  selecionarPodcast(podcast: any): void {
    this.podcastSelecionado = podcast;
  }
}
