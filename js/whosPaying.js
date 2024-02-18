let victimas = [];

function obtenerNombre() {
 
    var nombre = document.getElementById('idnombre').value;
    victimas.push(nombre);
    console.log(victimas);

    document.getElementById('idnombre').value="";

    let lista = document.getElementById('listaVictimas');
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    victimas.forEach(function(victima){
        let input = document.createElement('input');
        input.classList.add("inputVictimas")
        input.value = victima;
        lista.appendChild(input);
    })
}

function seleccionarVictima() {
    let cantidadVictimas = victimas.length;
    let random = Math.random() * cantidadVictimas;
    let entero = Math.floor(random);
    let victimaGanadora = victimas[entero];

    alert(`${victimaGanadora} pagará el almuerzo el día de hoy`);

}