
let pal = document.getElementById("palabra");
let log = document.getElementById("longi"); 

function long() {
    let valor = pal.value;
    alert(valor.length);
 
}
log.addEventListener('click', long);