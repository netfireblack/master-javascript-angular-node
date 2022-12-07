// Clases en TypeScript (Implementar el tipo de miembros y modificadores de acceso)

class Jugador {
    public nombre: string;
    public apellidos: string;
    private goles: number;

    constructor(nombre: string, apellidos: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    setGoles(goles: number): void {
        this.goles = goles;
    }

    getGoles(): number {
        return this.goles;
    }
}

let jugador1 = new Jugador('Lionel', 'Messi');

let jugadores = Array<Jugador>

// jugadores = [jugador1, {nombre: 'Sergio', apellidos: 'Ramos'}]; Error porque el literal no a sido instanciado con la clase jugador o mejor dicho no se ha creado un objeto jugador para asignarlo al array con clase Jugador (array de objetos)

jugador1.nombre = 'Leo';
// jugador1.goles = 10; Error porque la propiedad goles no se puede establecer directamente y solo se tiene que asignar a traves de un metodo definido en la clase