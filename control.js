//let player1 = prompt('Ingrese nombre del primer jugador', '')
//let player2 = prompt('Ingrese nombre del segundo jugador', '')

let boton = document.getElementById('b1')
boton.addEventListener('click', lanzar)

let p1 = new Persona('player1')
let p2 = new Persona('player2')
let d = new Dado()
let orden = true

document.getElementById('name1').innerHTML = p1.getName()
document.getElementById('name2').innerHTML = p2.getName()


function lanzar(){
    var tiro = d.getVal()
    var np = 0

    while (getWinner(p1) || getWinner(p2))
    {
        if (orden) {
            switch (tiro) {
                case 1:
                    np = p1.getPosicion() + 1
                    p1.setPosicion(np)
                case 2:
                    np = p1.getPosicion() + 1
                    p1.setPosicion(np)
                case 3:
                    np = p1.getPosicion() - 1
                    p1.setPosicion(np)
                case 4:
                    np = p1.getPosicion() - 1
                    p1.setPosicion(np)
                case 5:
                    np = p1.getPosicion() + 2
                    p1.setPosicion(np)
                case 6:
                    np = p1.getPosicion() + 2
                    p1.setPosicion(np)
                case 7:
                    np = p1.getPosicion() + 2
                    p1.setPosicion(np)
                case 8:
                    np = p1.getPosicion() + 2
                    p1.setPosicion(np)
                case 9:
                    np = p1.getPosicion() + 3
                    p1.setPosicion(np)
                case 10:
                    np = p1.getPosicion() + 3
                    p1.setPosicion(np)
            }

            let div = document.createElement("div");
            let text = document.createTextNode(`${p1.getName()} en ${p1.getPosicion()}`);
            div.appendChild(text);

            var element = document.getElementById("avances");
            element.appendChild(div);
            orden = false

            if(getWinner(p1) === false)
            {
                alert(`Winner: ${p1.getName()}`)
                break
            }
        } else {
            switch (tiro) {
                case 1:
                    np = p2.getPosicion() + 1
                    p2.setPosicion(np)
                case 2:
                    np = p2.getPosicion() + 1
                    p2.setPosicion(np)
                case 3:
                    np = p2.getPosicion() - 1
                    p2.setPosicion(np)
                case 4:
                    np = p2.getPosicion() - 1
                    p2.setPosicion(np)
                case 5:
                    np = p2.getPosicion() + 2
                    p2.setPosicion(np)
                case 6:
                    np = p2.getPosicion() + 2
                    p2.setPosicion(np)
                case 7:
                    np = p2.getPosicion() + 2
                    p2.setPosicion(np)
                case 8:
                    np = p2.getPosicion() + 2
                    p2.setPosicion(np)
                case 9:
                    np = p2.getPosicion() + 3
                    p2.setPosicion(np)
                case 10:
                    np = p2.getPosicion() + 3
                    p2.setPosicion(np)
            }

            let div = document.createElement("div");
            let text = document.createTextNode(`${p2.getName()} en ${p2.getPosicion()}`);
            div.appendChild(text);

            var element = document.getElementById("avances");
            element.appendChild(div);
            orden = true

            if (getWinner(p2) === false) {
                alert(`Winner: ${p2.getName()}`)
                break
            }
        }
    }
}


function getWinner(p) {
    if (p.getPosicion() >= 100) {
        return false
    } else {
        return true
    }
}