let victimas = [];
let contador = 0;

function obtenerNombre() {
 
    var nombre = document.getElementById('idnombre').value;
    if(nombre !== "" && nombre !== undefined){
        contador++;
        const nuevaVictima = {
            id:contador,
            nombre:nombre

        }
        victimas.push(nuevaVictima);
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
        input.dataset.id=victima.id;
        eliminarA.onclick=function(){
            eliminarVictima(victima.id);
        };
        editarA.onclick=function(){
            editarVictima(victima.id);
        };
        editarImg.classList.add("editar_js")
        eliminarImg.classList.add("eliminar_js")
        input.value = victima.nombre;
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

function eliminarVictima(id){
    victimas = victimas.filter(victima=>victima.id !== id)
    actualizar();
}

function editarVictima(id){
   let nuevoNombre = prompt("Ingresa el nuevo nombre");
   let nuevoArray = victimas.map(el=>{
    if(el.id === id){
     return {
        id : el.id, nombre : nuevoNombre
     }
    } else {
        return el
    }
   }) 
   victimas = nuevoArray
   actualizar();
}

function actualizar() {
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
        input.dataset.id=victima.id;
        editarImg.classList.add("editar_js")
        eliminarImg.classList.add("eliminar_js")
        input.value = victima.nombre;
        eliminarA.onclick=function(){
            eliminarVictima(victima.id);
        };
        editarA.onclick=function(){
            editarVictima(victima.id);
        };
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

    
}


function seleccionarVictima() {
    let cantidadVictimas = victimas.length;
    let random = Math.random() * cantidadVictimas;
    let entero = Math.floor(random);
    let victimaGanadora = victimas[entero];

    alert(`${victimaGanadora.nombre} pagará el almuerzo el día de hoy`);

}