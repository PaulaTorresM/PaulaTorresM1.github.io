let boton = document.getElementById("boton");

function Triangulo() {

    let lado = document.getElementById("lado").value;
    let lado2 = document.getElementById("lado2").value;
    let lado3 = document.getElementById("lado3").value;


    if (lado == lado2 && lado2 !== lado3 || lado == lado3 && lado != lado2 || lado2 == lado3 && lado3 !== lado ) {

        alert(`Es un isoceles`)

    } else if (lado == lado2 && lado == lado3 && lado2 == lado3) {

        alert(`Es un equilatero`)

    } else if (lado !== lado2 && lado !== lado3 && lado2 !== lado3) {
        alert(`Es un escaleno`)
    }
    else {
        alert("no valido")
    }

}

boton.addEventListener('click', Triangulo)