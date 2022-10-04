let calcu = document.getElementById("calcular")
calcu.addEventListener('click', ()=>{

    let radio = (document.getElementById("radio").value);

    let pi = 3.14159

    let lado = (radio*radio) * pi
    alert("el area del circulo es " +lado)
})

let calcu3 = document.getElementById("calcularOtra")
calcu3.addEventListener('click', ()=>{

    let perimetro = (document.getElementById("perimetro").value);

    let pi = 3.14159
    let lados = (2 * pi ) * perimetro
    alert("el perimetro del circulo es " +lados)
})