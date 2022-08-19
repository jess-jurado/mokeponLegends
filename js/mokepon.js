
const seccionSeleccionarAtaques = document.getElementById('selecionar-ataque');
const botonReiniciar = document.getElementById('boton-reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota')

const botonFuego = document.getElementById('boton-fuego')
const botonAgua  = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')

const seccionSeleccionarMascotas = document.getElementById('selecionar-mascota');
const spanMascotaJugador = document.getElementById('mascotaJugador');
const spanVidasJugador = document.getElementById('vidasJugador');
const spanVidasEnemigo = document.getElementById('vidasEnemigo');

const spanMascotaEnemigo = document.getElementById('mascotaEnemigo');

const seccionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');

const seccionMensajeFinal = document.getElementById('mensajes');
const contenedorTarjetas = document.getElementById('contenedorTarjetas');

let mokepones = [];
let opcionDeMokepones;
let ataqueJugador;
let ataqueEnemigo;
let resultadoCombate;
let inputHipodoge ;
let inputCapipepo ;
let inputRatigueya ;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataque = [];
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5);
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5);
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5);

hipodoge.ataque.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},
);

capipepo.ataque.push(
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    
);

ratigueya.ataque.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra'},
);

mokepones.push(hipodoge, capipepo, ratigueya);

// inicio de juego y botones eventos
function iniciarJuego(){
    seccionSeleccionarAtaques.style.display = 'none';

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id="${mokepon.nombre}"/>
            <label class="tarjeta-de-mokepon" for="${mokepon.nombre}">
                <p>${mokepon.nombre}</p>
                <img src="${mokepon.foto}" alt="${mokepon.nombre}">
            </label>
            `
        contenedorTarjetas.innerHTML += opcionDeMokepones;

         inputHipodoge = document.getElementById('Hipodoge');
         inputCapipepo = document.getElementById('Capipepo');
         inputRatigueya = document.getElementById('Ratigueya');
    });

    botonReiniciar.style.display = 'none';

    botonMascotaJugador.addEventListener('click', seleccionaMascotaJugador)

    botonFuego.addEventListener('click', ataqueFuego, )
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)

}

// mascotas jugador
function seleccionaMascotaJugador() {
    seccionSeleccionarMascotas.style.display = 'none';

    seccionSeleccionarAtaques.style.display = 'flex';

    spanVidasJugador.innerHTML = vidasJugador
    
    spanVidasEnemigo.innerHTML = vidasEnemigo
    
    if (inputHipodoge.checked) {

    spanMascotaJugador.innerHTML = inputHipodoge.id;
    } else if (inputCapipepo.checked ) {

        spanMascotaJugador.innerHTML = inputCapipepo.id;
    } else if (inputRatigueya.checked) {
        
        spanMascotaJugador.innerHTML = inputRatigueya.id;
    } else {
        alert("Tienes que elegir una mascota !!");
        reiniciarJuego();
    }
        seleccionaMascotaEnemigo();

}
// mascota aleatoria enemigo
function seleccionaMascotaEnemigo() {
    let eleccionAleatoria = aleatorio(1, 3)
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
    
    spanVidasJugador.innerHTML = vidasJugador;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
}

function ataqueAgua(){

    ataqueJugador = 'AGUA 💧';
    ataqueAleatorioEnemigo();
    
    spanVidasJugador.innerHTML = vidasJugador;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
}

function ataqueTierra(){

    ataqueJugador = 'TIERRA 🌱';
    ataqueAleatorioEnemigo();
    spanVidasJugador.innerHTML = vidasJugador;
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

//mensaje de victoria o derrota

function finalJuego(){
    if (vidasEnemigo == 0 ){
        let parrafoVictoria = document.createElement('p');
        parrafoVictoria.innerHTML = `FELICIDADES GANASTE !! 🎖`;
        seccionMensajeFinal.appendChild(parrafoVictoria);     
        crearBotonReiniciar();
        
        botonFuego.disabled = true;
        botonAgua.disabled = true;
        botonTierra.disabled = true;

    } else if ( vidasJugador == 0 ){
        let parrafoDerrota = document.createElement('p');
        parrafoDerrota.innerHTML = `OHHH PERDISTE 🤬`;
        seccionMensajeFinal.appendChild(parrafoDerrota);
        crearBotonReiniciar();
        
        botonFuego.disabled = true;
        botonAgua.disabled = true;
        botonTierra.disabled = true;
    }
}

function crearBotonReiniciar() {
    botonReiniciar.addEventListener('click', reiniciarJuego);
    botonReiniciar.style.display = 'flex';
}

function reiniciarJuego() {
    location.reload();
}

function aleatorio(min, max ) {
        return Math.floor(Math.random() * (max - min + 1) + min );
    }

window.addEventListener('load', iniciarJuego);







