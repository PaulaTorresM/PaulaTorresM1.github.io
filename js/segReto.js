
let Temp = document.getElementById("Temp")
Temp.addEventListener('click', ()=>{


    let grad = (document.getElementById("grados").value);
    let grad2 = (document.getElementById("grados2").value)
    let gr = (document.getElementById("grados1").value);

    //kelvin a ....
    if (grad == "num3" && grad2 == "num4") {
        let gra = gr
        let total = (gra - 273.15) * 9 / 5 + 32;
        alert("kelvin a fahrenheit" +total)

    } else if (grad == "num3" && grad2 == "num5") {
        let gra = gr
        let total = (gra - 273.15);
        alert("Kelvin a Celcius" +total)
    }

    //fahrenheit a ...
    else if (grad == "num1" && grad2 == "num5") {
        let gra = gr
        let total = (gra - 32) * 5 / 9;
        alert("fahrenheit a celcius "+total)
    } 
    else if (grad == "num1" && grad2 == "num6") {   
        let gra = gr 
        let total = (gra - 32) * 5 / 9 + 273.15;
        alert("fahrenheit a Kelvin "+total)
    }

    //Celsius a ...
    
    else if (grad == "num2" && grad2 == "num4") {
        let gra = gr
        let total = (gra + 273.15);
        alert("Celsius a Kelvin " +total)
    }

    else if (grad == "num2" && grad2 == "num6") {
        let gra = gr
        let total = (gra * 9 / 5) + 32;
        alert("Celsius a fahrenheit "+total)
    }
    
})

