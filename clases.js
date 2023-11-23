//clase es como una plantilla o molde, para realizar diferentes dibujos, objetos, etc. 

class Jugador /*empieza con la primer letra en mayuscula*/ {
    constructor(nombre, apellido, clubes, logros){
        this.nombre = nombre /*nombre de la variable y el valor que le damos, que se recibe en este caso desde el constructor */
        this.apellido = apellido
        this.clubes = clubes
        this.logros = logros
    }
}

let maradona = new Jugador ("diego", "maradona")


maradona.clubesDeFutbol = {
    argentina:["boca","newells", "argentinos juniors"],
    italia: ["napoli"]
}
//modificamos variable y agregamos informacion al objeto, y se lo asigna aunque no haya estado en el constructor

maradona.logros = ["campeon del mundo", "mundial sub 20", "copa del rey" ]
//en este caso no estaba dado los logros desde un comienzo, pero luego lo agrega

console.log(maradona)

