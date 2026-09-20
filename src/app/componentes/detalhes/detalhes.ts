import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-detalhes',
  styleUrl: './detalhes.css',
  templateUrl: './detalhes.html',
})
export class Detalhes {
  @Input() item: any = null;

  reproduzindo = false;
  favorito = false;
  curtidas = 42;

  alternarPlay(): void {
    this.reproduzindo = !this.reproduzindo;
  }

  alternarFavorito(): void {
    this.favorito = !this.favorito;
    this.favorito ? this.curtidas++ : this.curtidas--;
  }

  fecharDetalhes(): void {
    this.item = null;
  }
}
