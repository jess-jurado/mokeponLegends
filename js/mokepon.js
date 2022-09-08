
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
const seleccionAtaques = document.getElementById('seleccionAtaques');

const sectionVerMapa = document.getElementById('ver-mapa');
const mapa = document.getElementById('mapa');

let mokepones = [];
let opcionDeMokepones;
let ataqueJugador = []
let ataqueEnemigo = [];
let resultadoCombate;
let inputHipodoge ;
let inputCapipepo ;
let inputRatigueya ;
let inputLangostelvis;
let inputPydos;
let inputTucapalma;
let mascotaJugador;
let mascotaJugadorObjeto;
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
let encombate = false ;

let lienzo = mapa.getContext("2d");
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = './assets/mokemap.png'
// let victoriasJugador = 3;
// let vidasEnemigo = 3;

class Mokepon {
    constructor(nombre, foto, vida,fotoMapa, x = 10, y = 10) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataque = [];
        this.x = x;
        this.y = y;
        this.ancho = 40;
        this.alto = 40;
        this.mapaFoto = new Image();
        this.mapaFoto.src = fotoMapa;
        this.velocidadX = 0;
        this.velocidadY = 0;
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
} 

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png');
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png');
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.png');
let langostelvis = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5, './assets/langostelvis.png');
let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5, './assets/pydos.png');
let tucapalma = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5, './assets/tucapalma.png');


let hipodogeEnemigo = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png', 90, 90);
let capipepoEnemigo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png', 150, 155);
let ratigueyaEnemigo = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.png', 260, 200);
let langostelvisEnemigo = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5, './assets/langostelvis.png', 300, 95);
let pydosEnemigo = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5, './assets/pydos.png', 285, 20);
let tucapalmaEnemigo = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5, './assets/tucapalma.png', 20, 200);

// hipodoge.ataque.push(
//     { nombre: '💧', id: 'boton-agua'},
//     { nombre: '💧', id: 'boton-agua'},
//     { nombre: '💧', id: 'boton-agua'},
//     { nombre: '🔥', id: 'boton-fuego'},
//     { nombre: '🌱', id: 'boton-tierra'},
// );

// capipepo.ataque.push(
//     { nombre: '🌱', id: 'boton-tierra'},
//     { nombre: '🌱', id: 'boton-tierra'},
//     { nombre: '🌱', id: 'boton-tierra'},
//     { nombre: '💧', id: 'boton-agua'},
//     { nombre: '🔥', id: 'boton-fuego'},
    
// );

// ratigueya.ataque.push(
//     { nombre: '🔥', id: 'boton-fuego'},
//     { nombre: '🔥', id: 'boton-fuego'},
//     { nombre: '🔥', id: 'boton-fuego'},
//     { nombre: '💧', id: 'boton-agua'},
//     { nombre: '🌱', id: 'boton-tierra'},
// );

// langostelvis.ataque.push(
//     { nombre: '🔥', id: 'boton-fuego'},
//     { nombre: '🔥', id: 'boton-fuego'},
//     { nombre: '🔥', id: 'boton-fuego'},
//     { nombre: '💧', id: 'boton-agua'},
//     { nombre: '🌱', id: 'boton-tierra'},
// );

// pydos.ataque.push(
//     { nombre: '🔥', id: 'boton-fuego'},
//     { nombre: '💧', id: 'boton-agua'},
//     { nombre: '💧', id: 'boton-agua'},
//     { nombre: '💧', id: 'boton-agua'},
//     { nombre: '🌱', id: 'boton-tierra'},
// );

// tucapalma.ataque.push(
//     { nombre: '🔥', id: 'boton-fuego'},
//     { nombre: '🌱', id: 'boton-tierra'},
//     { nombre: '🌱', id: 'boton-tierra'},
//     { nombre: '🌱', id: 'boton-tierra'},
//     { nombre: '💧', id: 'boton-agua'},
// );

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, pydos, tucapalma);

// inicio de juego y botones eventos
function iniciarJuego(){
    seccionSeleccionarAtaques.style.display = 'none';
    sectionVerMapa.style.display = 'none';


    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id="${mokepon.nombre}"/>
            <label class="tarjeta-de-mokepon" for="${mokepon.nombre}">
                <p>${mokepon.nombre}</p>
                <img src="${mokepon.foto}" alt="${mokepon.nombre}">
            </label>
            `
        contenedorTarjetas.innerHTML += opcionDeMokepones;

         inputHipodoge     = document.getElementById('Hipodoge');
         inputCapipepo     = document.getElementById('Capipepo');
         inputRatigueya    = document.getElementById('Ratigueya');
         inputLangostelvis = document.getElementById('Langostelvis');
         inputPydos        = document.getElementById('Pydos');
         inputTucapalma    = document.getElementById('Tucapalma');

    });
    

    botonReiniciar.style.display = 'none';

    botonMascotaJugador.addEventListener('click', seleccionaMascotaJugador)
}

// mascotas jugador
function seleccionaMascotaJugador() {
    seccionSeleccionarMascotas.style.display = 'none';

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
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputLangostelvis.id;
        mascotaJugador = inputLangostelvis.id
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id;
        mascotaJugador = inputPydos.id
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id;
        mascotaJugador = inputTucapalma.id
    } else {
        alert("Tienes que elegir una mascota !!");
        reiniciarJuego();
    }
        extraerAtaques(mascotaJugador);
        sectionVerMapa.style.display = 'flex';
        iniciarMapa();
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
    seleccionAtaques.innerHTML += '<button id="boton-fuego" class="btn-fire BAtaque">🔥</button>';
    seleccionAtaques.innerHTML += '<button id="boton-agua" class="btn-fire BAtaque">💧</button>';
    seleccionAtaques.innerHTML += '<button id="boton-tierra" class="btn-fire BAtaque">🌱</button><br />';
    
    ataques.forEach((ataque, index) => {
        ataquesMokepon = `<button id='ataque${index}' class="btn-fire">${''}</button>`

        contenedorAtaques.innerHTML += ataquesMokepon;

    })

    botonFuego = document.getElementById('boton-fuego');
    botonAgua = document.getElementById('boton-agua');
    botonTierra = document.getElementById('boton-tierra');
    botones = document.querySelectorAll('.BAtaque');
}

function crearBoton(icono){
    contenedorAtaques.innerHTML += `<button class="btn-fire">${icono}</button>`;
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) =>{
            if(e.target.textContent === '🔥' ) {
                ataqueJugador.push('FUEGO');
                crearBoton('🔥')
                // console.log(ataqueJugador)
                // boton.style.background = '#112f58';
                // boton.disabled = true;
            } else if (e.target.textContent === '💧' ) {
                ataqueJugador.push('AGUA');
                crearBoton('💧')
                // console.log(ataqueJugador)
                // boton.style.background = '#112f58';
                // boton.disabled = true;

            } else {
                ataqueJugador.push('TIERRA');
                crearBoton('🌱')
                // console.log(ataqueJugador)
                // boton.style.background = '#112f58';
                // boton.disabled = true;

            }
            ataqueAleatorioEnemigo();
        }) 
    })

    
}
// mascota aleatoria enemigo
function seleccionaMascotaEnemigo(enemigo) {
    spanMascotaEnemigo.innerHTML = enemigo.nombre;
    ataquesMokeponEnemigo = enemigo.ataque;
    secuenciaAtaque();
}
 

// ataque aleatorio enemigo
function ataqueAleatorioEnemigo() {
    // console.log('ataques enemigo', ataquesMokeponEnemigo);
    let ataqueAleatorio = aleatorio(0, 2);

    if (  ataqueAleatorio == 0 ){
        ataqueEnemigo.push('FUEGO');
        
    } else if ( ataqueAleatorio == 1) {
        ataqueEnemigo.push('AGUA');
    
    } else {
        ataqueEnemigo.push('TIERRA');
    }
    // console.log(ataqueEnemigo)
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

    // if (victoriasJugador > victoriasEnemigo){
    //     resultadoCombate = 'GANAS !! 😉✌';

    // } else if (victoriasJugador < victoriasEnemigo) {
    //     resultadoCombate = 'Perdiste';

    // } else {
    //     resultadoCombate = 'Empeteichon';
    // }
    
    finalJuego()
   
    crearMensaje();
}


// dialogo combate
function crearMensaje(){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
  
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


    function pintarCanvas(){

        mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
        mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
        lienzo.clearRect(0, 0, mapa.width, mapa.height)
        lienzo.drawImage(
            mapaBackground,
            0,
            0,
            mapa.width,
            mapa.height,
        )
        mascotaJugadorObjeto.pintarMokepon();
        hipodogeEnemigo.pintarMokepon();
        capipepoEnemigo.pintarMokepon();
        ratigueyaEnemigo.pintarMokepon();
        langostelvisEnemigo.pintarMokepon();
        pydosEnemigo.pintarMokepon();
        tucapalmaEnemigo.pintarMokepon();

        if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
            revisarColision(hipodogeEnemigo);
            revisarColision(capipepoEnemigo);
            revisarColision(ratigueyaEnemigo);
            revisarColision(langostelvisEnemigo);
            revisarColision(pydosEnemigo);
            revisarColision(tucapalmaEnemigo);
        }
    }

    function moverDerecha(){
        mascotaJugadorObjeto.velocidadX = 5

    }
    function moverArriba() {
        mascotaJugadorObjeto.velocidadY = -5
    }

    function moverIzquierda() {
        mascotaJugadorObjeto.velocidadX = -5
    }

    function moverAbajo() {
        mascotaJugadorObjeto.velocidadY = 5
    }
    function detenerMovimiento() {
        mascotaJugadorObjeto.velocidadX = 0;
        mascotaJugadorObjeto.velocidadY = 0;
    }

    function sePresionoUnaTecla(event) {
        console.log(event.key)
        switch (event.key) {
            case 'ArrowUp':
                moverArriba();
                break;

                case 'ArrowDown':
                moverAbajo();
                break;

                case 'ArrowLeft':
                moverIzquierda();
                break;

                case 'ArrowRight':
                moverDerecha();
                break;

                case 'w':
                moverArriba();
                break;

                case 's':
                moverAbajo();
                break;

                case 'a':
                moverIzquierda();
                break;

                case 'd':
                moverDerecha();
                break;
        
            default:
                break;
        }
    }

    function iniciarMapa() {
        mapa.width = 350;
        mapa.height = 250;
        mascotaJugadorObjeto = obtenerObjetoMasctota(mascotaJugador)
        intervalo = setInterval(pintarCanvas, 50);

        window.addEventListener('keydown', sePresionoUnaTecla);
    
        window.addEventListener('keyup', detenerMovimiento);
    }

    function obtenerObjetoMasctota() {
        for (let i = 0; i < mokepones.length; i++) {
            if ( mascotaJugador === mokepones[i].nombre) {
               return mokepones[i]
            }
        }
    }

    function revisarColision(enemigo) {
        const arribaEnemigo = enemigo.y;
        const abajoEnemigo = enemigo.y + enemigo.alto;
        const derechaEnemigo = enemigo.x + enemigo.ancho;
        const izquierdaEnemigo = enemigo.x;

        const arribaMascota = mascotaJugadorObjeto.y;
        const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
        const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
        const izquierdaMascota = mascotaJugadorObjeto.x;

        if (
            abajoMascota < arribaEnemigo ||
            arribaMascota > abajoEnemigo ||
            derechaMascota < izquierdaEnemigo ||
            izquierdaMascota > derechaEnemigo
        ) {
            return;
        }
        detenerMovimiento();
        seccionSeleccionarAtaques.style.display = 'flex';
        sectionVerMapa.style.display = 'none';
        if ( encombate == false ) {
            seleccionaMascotaEnemigo(enemigo) 
            encombate = true;
        }

    }
window.addEventListener('load', iniciarJuego);







