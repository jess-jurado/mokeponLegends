let ataqueJugador;
let ataqueEnemigo;
let resultadoCombate;
let vidasJugador = 3;
let vidasEnemigo = 3;
let spanMascotaEnemigo;
let spanMascotaJugador;


// inicio de juego y botones eventos
function iniciarJuego(){

    let seccionSeleccionarAtaques = document.getElementById('selecionar-ataque');
    seccionSeleccionarAtaques.style.display = 'none';

    let botonMascotaJugador = document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click', seleccionaMascotaJugador)

let botonFuego = document.getElementById('boton-fuego')
botonFuego.addEventListener('click', ataqueFuego, )

let botonAgua  = document.getElementById('boton-agua')
botonAgua.addEventListener('click', ataqueAgua)

let botonTierra = document.getElementById('boton-tierra')
botonTierra.addEventListener('click', ataqueTierra)

}

// mascotas jugador
function seleccionaMascotaJugador() {

    let seccionSeleccionarMascotas = document.getElementById('selecionar-mascota');
    seccionSeleccionarMascotas.style.display = 'none';

    let seccionSeleccionarAtaques = document.getElementById('selecionar-ataque');
    seccionSeleccionarAtaques.style.display = 'flex';

    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascotaJugador');
    let spanVidasJugador = document.getElementById('vidasJugador');
    spanVidasJugador.innerHTML = vidasJugador
    let spanVidasEnemigo = document.getElementById('vidasEnemigo');
    spanVidasEnemigo.innerHTML = vidasEnemigo
    
    if (inputHipodoge.checked) {

    spanMascotaJugador.innerHTML = 'Hipodoge';
    } else if (inputCapipepo.checked ) {

        spanMascotaJugador.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked) {
        
        spanMascotaJugador.innerHTML = 'Ratigueya';
    } else {
        alert("Tienes que elegir una mascota !!");
        reiniciarJuego();
    }
        seleccionaMascotaEnemigo();

}
// mascota aleatoria enemigo
function seleccionaMascotaEnemigo() {
    let spanMascotaEnemigo = document.getElementById('mascotaEnemigo');
    
    let eleccionAleatoria = aleatorio(1, 3)
    let botonMascotaJugador = document.getElementById('boton-mascota')


    if( eleccionAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if ( eleccionAleatoria == 2 ) {
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else if ( eleccionAleatoria == 3 ) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    } 
}

// ataques 

function ataqueFuego(){

    ataqueJugador = 'FUEGO 🔥';
    ataqueAleatorioEnemigo();
    let spanVidasJugador = document.getElementById('vidasJugador');
    spanVidasJugador.innerHTML = vidasJugador;
    let spanVidasEnemigo = document.getElementById('vidasEnemigo');
    spanVidasEnemigo.innerHTML = vidasEnemigo;
}

function ataqueAgua(){

    ataqueJugador = 'AGUA 💧';
    ataqueAleatorioEnemigo();
    let spanVidasJugador = document.getElementById('vidasJugador');
    spanVidasJugador.innerHTML = vidasJugador;
    let spanVidasEnemigo = document.getElementById('vidasEnemigo');
    spanVidasEnemigo.innerHTML = vidasEnemigo;
}

function ataqueTierra(){

    ataqueJugador = 'TIERRA 🌱';
    ataqueAleatorioEnemigo();
    let spanVidasJugador = document.getElementById('vidasJugador');
    spanVidasJugador.innerHTML = vidasJugador;
    let spanVidasEnemigo = document.getElementById('vidasEnemigo');
    spanVidasEnemigo.innerHTML = vidasEnemigo;
}

// ataque aleatorio enemigo
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);
    if (  ataqueAleatorio == 1 ){
        ataqueEnemigo = 'FUEGO 🔥';
        
    } else if ( ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA 💧';
    
    } else if ( ataqueAleatorio == 3) {
        ataqueEnemigo = 'TIERRA 🌱';
    
    }

    combate(vidasEnemigo, vidasJugador)
}



// combate

function combate(){

    if (ataqueJugador == ataqueEnemigo ){
        resultadoCombate = 'EMPATE 🤝'  ;                                                       
    }  else if (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'TIERRA 🌱' || ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥' ||  ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱' ){
       resultadoCombate = 'GANAS !! 😉✌';
       vidasEnemigo--;
        
    } else if (  ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'FUEGO 🔥'|| ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧' || ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'AGUA 💧'){
        resultadoCombate = 'PIERDES !😵';
        vidasJugador--;
        
    } 


    crearMensaje();
    
    
}


// dialogo combate
function crearMensaje(){

    let seccionMensajes = document.getElementById('resultado');
    let ataquesDelJugador = document.getElementById('ataques-del-jugador');
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');

    let notificacion = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    seccionMensajes.innerHTML = resultadoCombate;
    ataquesDelJugador.innerHTML = ataqueJugador;
    ataquesDelEnemigo.innerHTML = ataqueEnemigo;
  
    seccionMensajes.appendChild(notificacion);
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
    
    finalJuego();

}




//VAMOS A PROBA A LA MANERA DE ESTA MUJER
// function crearMensaje(){

//     let seccionMensajes = document.getElementById('mensaje');

//     let parrafo = document.createElement('p');
//     parrafo.innerHTML =` Tu mokepon usó  ${ataqueJugador}   ...el mokepon enemigo usó ${ataqueEnemigo}, ${resultadoCombate} `;

//     seccionMensajes.appendChild(parrafo);
    
//     seleccionaMascotaJugador(spanMascotaJugador);
//     seleccionaMascotaEnemigo(spanMascotaEnemigo);
//     finalJuego();

// }

//mensaje de victoria o derrota

function finalJuego(){
    if (vidasEnemigo == 0 ){
        let seccionMensajes = document.getElementById('mensajes');

        let parrafoVictoria = document.createElement('p');
        parrafoVictoria.innerHTML = `FELICIDADES GANASTE !! 🎖`;
        seccionMensajes.appendChild(parrafoVictoria);      
        crearBotonReiniciar();
        let botonFuego = document.getElementById('boton-fuego')
        botonFuego.disabled = true;

        let botonAgua  = document.getElementById('boton-agua')
        botonAgua.disabled = true;

        let botonTierra = document.getElementById('boton-tierra')
        botonTierra.disabled = true;

        

    } else if ( vidasJugador == 0 ){

        let seccionMensajes = document.getElementById('mensajes');

        let parrafoDerrota = document.createElement('p');
        parrafoDerrota.innerHTML = `OHHH PERDISTE 🤬`
        seccionMensajes.appendChild(parrafoDerrota);
        crearBotonReiniciar();
        let botonFuego = document.getElementById('boton-fuego')
        botonFuego.disabled = true;

        let botonAgua  = document.getElementById('boton-agua')
        botonAgua.disabled = true;

        let botonTierra = document.getElementById('boton-tierra')
        botonTierra.disabled = true;

        

    }
    
}
function crearBotonReiniciar() {
    let seccionBotonReiniciar = document.getElementById('reiniciar');
    let botonReiniciar = document.createElement('button');

    botonReiniciar.innerHTML = "Reiniciar";


    seccionBotonReiniciar.appendChild(botonReiniciar);
    botonReiniciar.addEventListener('click', reiniciarJuego);

}




function reiniciarJuego() {
    location.reload();
}


function aleatorio(min, max ) {
        return Math.floor(Math.random() * (max - min + 1) + min );
    }


window.addEventListener('load', iniciarJuego);







