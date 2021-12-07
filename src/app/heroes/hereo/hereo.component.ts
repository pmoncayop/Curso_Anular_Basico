import { Component  } from "@angular/core";

@Component({
    selector: 'app-hereo',
    templateUrl: 'hereo.component.html'
})
export class HereoComponent {
    nombre: string = 'ironMan';
    edad: number = 45;

get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
}

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 32;
    }


}