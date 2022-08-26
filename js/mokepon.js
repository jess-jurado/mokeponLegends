
const seccionSeleccionarAtaques = document.getElementById('selecionar-ataque');
const botonReiniciar = document.getElementById('boton-reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota')

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
const contenedorAtaques = document.getElementById('contenedorAtaques');

let mokepones = [];
let opcionDeMokepones;
let ataqueJugador = []
let ataqueEnemigo;
let resultadoCombate;
let inputHipodoge ;
let inputCapipepo ;
let inputRatigueya ;
let mascotaJugador;
let ataquesMokepon;
let botonFuego;
let botonAgua;
let botonTierra ;
let botones = [];
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
}

// mascotas jugador
function seleccionaMascotaJugador() {
    seccionSeleccionarMascotas.style.display = 'none';

    seccionSeleccionarAtaques.style.display = 'flex';

    spanVidasJugador.innerHTML = vidasJugador
    
    spanVidasEnemigo.innerHTML = vidasEnemigo
    
    if (inputHipodoge.checked) {

    spanMascotaJugador.innerHTML = inputHipodoge.id;
    mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked ) {
        spanMascotaJugador.innerHTML = inputCapipepo.id;
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id;
        mascotaJugador = inputRatigueya.id
    } else {
        alert("Tienes que elegir una mascota !!");
        reiniciarJuego();
    }
        extraerAtaques(mascotaJugador);
        seleccionaMascotaEnemigo();
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if ( mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataque;
        }
    }
    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id="${ataque.id}" class="btn-fire BAtaque">${ataque.nombre}</button>`

        contenedorAtaques.innerHTML += ataquesMokepon;

    })

    botonFuego = document.getElementById('boton-fuego');
    botonAgua = document.getElementById('boton-agua');
    botonTierra = document.getElementById('boton-tierra');
    botones = document.querySelectorAll('.BAtaque');
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) =>{
            console.log(e)
            if(e.target.textContent === '🔥' ) {
                ataqueJugador.push('FUEGO');
                console.log(ataqueJugador)
                boton.style.background = '#112f58';
            } else if (e.target.textContent === '💧' ) {
                ataqueJugador.push('AGUA');
                console.log(ataqueJugador)
                boton.style.background = '#112f58';
            } else {
                ataqueJugador.push('TIERRA');
                console.log(ataqueJugador)
                boton.style.background = '#112f58';
            }
        }) 
    })
}
// mascota aleatoria enemigo
function seleccionaMascotaEnemigo() {
    let eleccionAleatoria = aleatorio(0, mokepones.length -1)
   
    spanMascotaEnemigo.innerHTML = mokepones[eleccionAleatoria].nombre;
    secuenciaAtaque();
}

// ataques 

// function ataqueFuego(){

//     ataqueJugador = 'FUEGO 🔥';
//     ataqueAleatorioEnemigo();
    
//     spanVidasJugador.innerHTML = vidasJugador;
//     spanVidasEnemigo.innerHTML = vidasEnemigo;
// }

// function ataqueAgua(){

//     ataqueJugador = 'AGUA 💧';
//     ataqueAleatorioEnemigo();
    
//     spanVidasJugador.innerHTML = vidasJugador;
//     spanVidasEnemigo.innerHTML = vidasEnemigo;
// }

// function ataqueTierra(){                                                                                                                                                                                                                                                                      

//     ataqueJugador = 'TIERRA 🌱';
//     ataqueAleatorioEnemigo();
//     spanVidasJugador.innerHTML = vidasJugador;
//     spanVidasEnemigo.innerHTML = vidasEnemigo;
// }

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







