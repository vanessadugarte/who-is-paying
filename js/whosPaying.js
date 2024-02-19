let victimas = [];

function obtenerNombre() {
 
    var nombre = document.getElementById('idnombre').value;
    if(nombre !== "" && nombre !== undefined){
        victimas.push(nombre);
    console.log(victimas);

    document.getElementById('idnombre').value="";

    let lista = document.getElementById('listaVictimas');
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    victimas.forEach(function(victima){
        let input = document.createElement('input');
        let editarA = document.createElement('a');
        let editarImg = document.createElement('img');
        let eliminarA = document.createElement('a');
        let eliminarImg = document.createElement('img');
        let padreInput = document.createElement('article');
        padreInput.classList.add("padreInput_js")
        input.classList.add("inputVictimas_js")
        editarImg.classList.add("editar_js")
        eliminarImg.classList.add("eliminar_js")
        eliminarA.dataset.eliminar = nombre;
        input.value = victima;
        lista.appendChild(padreInput);
        padreInput.appendChild(input);
        editarA.href="#";
        padreInput.appendChild(editarA);
        editarImg.src="images/editar.svg";
        editarA.href="#";
        editarImg.alt="icono editar"
        editarA.appendChild(editarImg);
        eliminarImg.alt="icono eliminar"
        eliminarImg.src="images/eliminar.svg";
        padreInput.appendChild(eliminarA);
        eliminarA.appendChild(eliminarImg);
        
        
    })

    } else {
        alert("Introduce un nombre")
    }
    
}

function seleccionarVictima() {
    let cantidadVictimas = victimas.length;
    let random = Math.random() * cantidadVictimas;
    let entero = Math.floor(random);
    let victimaGanadora = victimas[entero];

    alert(`${victimaGanadora} pagará el almuerzo el día de hoy`);

}