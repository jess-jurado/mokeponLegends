
const seccionSeleccionarAtaques = document.getElementById('selecionar-ataque');
const botonReiniciar = document.getElementById('boton-reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota')

const seccionSeleccionarMascotas = document.getElementById('selecionar-mascota');
const spanMascotaJugador = document.getElementById('mascotaJugador');
const spanVictoriasJugador = document.getElementById('victoriasJugador');
const spanVictoriasEnemigo = document.getElementById('victoriasEnemigo');

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
let ataqueEnemigo = [];
let resultadoCombate;
let inputHipodoge ;
let inputCapipepo ;
let inputRatigueya ;
let mascotaJugador;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botonFuego;
let botonAgua;
let botonTierra ;
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
// let victoriasJugador = 3;
// let vidasEnemigo = 3;

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

    spanVictoriasJugador.innerHTML = victoriasJugador
    
    spanVictoriasEnemigo.innerHTML = victoriasEnemigo
    
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
            ataqueAleatorioEnemigo();
        }) 
    })

    
}
// mascota aleatoria enemigo
function seleccionaMascotaEnemigo() {
    let eleccionAleatoria = aleatorio(0, mokepones.length -1)
   
    spanMascotaEnemigo.innerHTML = mokepones[eleccionAleatoria].nombre;
    ataquesMokeponEnemigo = mokepones[eleccionAleatoria].ataque;
    secuenciaAtaque();
}


// ataque aleatorio enemigo
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1);

    if (  ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO');
        
    } else if ( ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA');
    
    } else {
        ataqueEnemigo.push('TIERRA');
    }
    console.log(ataqueEnemigo)
    iniciarPelea();
}

function iniciarPelea(){
    if(ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function finalJuego(){
    if (victoriasJugador > victoriasEnemigo){
        let parrafoVictoria = document.createElement('p');
        parrafoVictoria.innerHTML = `FELICIDADES GANASTE !! 🎖`;
        seccionMensajeFinal.appendChild(parrafoVictoria);     
        crearBotonReiniciar();
        
        botonFuego.disabled = true;
        botonAgua.disabled = true;
        botonTierra.disabled = true;

    } else if (victoriasJugador == victoriasEnemigo) {
        let parrafoEmpate = document.createElement('p');
        parrafoEmpate.innerHTML = `La EMPATASION`;
        seccionMensajeFinal.appendChild(parrafoEmpate);
        crearBotonReiniciar();
        botonFuego.disabled = true;
        botonAgua.disabled = true;
        botonTierra.disabled = true

    }else {
        let parrafoDerrota = document.createElement('p');
        parrafoDerrota.innerHTML = `OHHH PERDISTE 🤬`;
        seccionMensajeFinal.appendChild(parrafoDerrota);
        crearBotonReiniciar();
        
        botonFuego.disabled = true;
        botonAgua.disabled = true;
        botonTierra.disabled = true;
    }
}

// combate

function combate(){

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index);
            spanVictoriasJugador.innerHTML = victoriasJugador;
        } else if(ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA'){
            indexAmbosOponentes(index, index);
            victoriasJugador ++;
            spanVictoriasJugador.innerHTML = victoriasJugador;
        } else if(ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO'){
            indexAmbosOponentes(index, index);
            victoriasJugador ++;
            spanVictoriasJugador.innerHTML = victoriasJugador;
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA'){
            indexAmbosOponentes(index, index);

            victoriasJugador ++;
            spanVictoriasJugador.innerHTML = victoriasJugador;
        } else {
            indexAmbosOponentes(index, index);
            victoriasEnemigo ++;
            spanVictoriasEnemigo.innerHTML = victoriasEnemigo;
        }

    }

    if (victoriasJugador > victoriasEnemigo){
        resultadoCombate = 'GANAS !! 😉✌';

    } else if (victoriasJugador < victoriasEnemigo) {
        resultadoCombate = 'Perdiste';

    } else {
        resultadoCombate = 'Empeteichon';
    }
    
    finalJuego()
   
    crearMensaje();
}


// dialogo combate
function crearMensaje(){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    seccionMensajes.innerHTML = resultadoCombate;
    ataquesDelJugador.innerHTML = indexAtaqueJugador;
    ataquesDelEnemigo.innerHTML = indexAtaqueEnemigo;

    ataqueJugador.forEach((ataque)=>{
        texto = document.createElement('p');
        texto.innerHTML = ataque
        ataquesDelJugador.appendChild(texto);
    })
    ataqueEnemigo.forEach((ataque)=>{
        texto = document.createElement('p');
        texto.innerHTML = ataque
        ataquesDelEnemigo.appendChild(texto);
    })

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







