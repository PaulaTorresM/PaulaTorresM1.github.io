
let profes = document.getElementById("boton")

profes.addEventListener('click', ()=>{

    let materia = (document.getElementById("materia").value);
    let nombre = (document.getElementById("nombre").value);
    let apellido = (document.getElementById("apellido").value);
   
    if (materia == "num1" && nombre == "num9" && apellido == "num16" ) {
        alert(`Es Tatiana Correcto`)
    }
    else if (materia == "num2" && nombre == "num9" && apellido == "num16") {
        alert(`Es Tatiana Correcto`)
    }
    else if (materia == "num3" && nombre == "num10" && apellido == "num17") {
        alert(`Es Adriana Correcto`)
    } 
    else if (materia == "num4" && nombre == "num11" && apellido == "num18") {
        alert(`Es Yaneth Correcto`)
    } 
    else if (materia == "num5" && nombre == "num12" && apellido == "num19") {
        alert(`Es Luis Correcto`)
    } 
    else if (materia == "num6" && nombre == "num13" && apellido == "num20") {
        alert(`Es Christian Correcto`)
    } 
    else if (materia == "num7" && nombre == "num14" && apellido == "num21") {
        alert(`Es Fernando Correcto`)
    }
    else if (materia == "num8" && nombre == "num15" && apellido == "num22") {
        alert(`Es Carolina Correcto`)
    }
    else{
        alert(`Su respuesta es incorrecta, verifique sus respuestas`)
}
})
