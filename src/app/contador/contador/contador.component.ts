import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>

        <button (click)="acumular(base)">+{{ base }}</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base)">-{{ base }}</button>

        <h3>La base es: <strong> {{ base }}</strong></h3>
    `
})
export class ContadorComponent {
    public title : string = 'bases1';
    public numero: number = 0;
    public base  : number = 5;

    public acumular(valor: number): void {
        this.numero += valor;
    }
}