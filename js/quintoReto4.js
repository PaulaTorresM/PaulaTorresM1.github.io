let calcu2 = document.getElementById("calcular")
calcu2.addEventListener('click', ()=>{

    let area = (document.getElementById("area").value);

    let lado1 = (area*area)
    alert("el area del cuadrado es " +lado1)
})

let calcu3 = document.getElementById("calcularOtra")
calcu3.addEventListener('click', ()=>{

    let perimetro = (document.getElementById("perimetro").value);

    let lados = (perimetro*4)
    alert("el perimetro del cuadrado es " +lados)
})
