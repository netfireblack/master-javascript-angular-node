// Sintaxis de constructor breve para clases

class Player {

    constructor(public nombre: string, public apellidos: string, private goles: number) {

    }

    setGoles(goles: number): void {
        this.goles = goles;
    }

    getGoles(): number {
        return this.goles;
    }
}

// Interfaces
// Las interfaces permiten declarar un grupo de propiedades que posteriormente las clases que implementen esas interfaces tenga la obligación de tener

interface DatosMaestros {
    nombre: string;
    cif: string;
}

class Proveedor implements DatosMaestros {
    nombre: string;
    cif: string;
    formaPago: string;

    constructor(nombre: string, cif: string) {
        this.nombre = nombre;
        this.cif = cif;
    }

    // Resto de métodos, etc...
}