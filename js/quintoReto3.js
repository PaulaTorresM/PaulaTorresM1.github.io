let calcu2 = document.getElementById("calcular")
calcu2.addEventListener('click', ()=>{

    let base = (document.getElementById("base").value);
    let altura = (document.getElementById("altura").value);

    let lado1 = (base*altura)
    alert("el area del rectangulo es " +lado1)
})

let calcu3 = document.getElementById("calcularOtra")
calcu3.addEventListener('click', ()=>{

    let lado1 = parseInt(document.getElementById("lado1").value);
    let lado2 = parseInt(document.getElementById("lado2").value);
    let lado3 = parseInt(document.getElementById("lado3").value);
    let lado4 = parseInt(document.getElementById("lado4").value);

    let lados = (lado1+lado2+lado3+lado4)
    alert("el perimetro del rectangulo es " +lados)
})
