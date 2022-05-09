import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'xd'];
  
  public heroesBorrados: string[] = [];

  constructor() { }

  public borrar(): void {
    let heroeBorrado = this.heroes.pop() || '';

    if (heroeBorrado != '')
      this.heroesBorrados.push(heroeBorrado);
  }
}
