const mensajes = [
    "¡Bienvenido a Deco Toppers Chile!",
    "Revisa nuestro catálogo",
    "Haz tu pedido por WhatsApp",
    "Realiza pedidos personalizados"
];

let indice = 0;
let animando = false;

// Contenedor principal
const contenedor = document.createElement('div');
contenedor.id = 'mensajes-dinamicos';
Object.assign(contenedor.style, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ff914d',
    color: '#fff',
    padding: '20px 20px',
    fontWeight: '300',
    fontSize: '1rem',
    cursor: 'default',
    width: '100%',
    maxWidth: '600px',
    margin: '10px auto'
});

// Botón anterior
const btnPrev = document.createElement('button');
btnPrev.textContent = '<';
Object.assign(btnPrev.style, {
    width: '40px',
    fontSize: '1.2rem',
    fontWeight: '300',
    background: 'transparent',
    border: 'none',
    color: '#fff',
    cursor: 'pointer'
});

// Botón siguiente
const btnNext = document.createElement('button');
btnNext.textContent = '>';
Object.assign(btnNext.style, {
    width: '40px',
    fontSize: '1.2rem',
    fontWeight: '300',
    background: 'transparent',
    border: 'none',
    color: '#fff',
    cursor: 'pointer'
});

// Span del texto
const texto = document.createElement('span');
texto.textContent = mensajes[indice];
Object.assign(texto.style, {
    transition: 'opacity 0.8s',
    textAlign: 'center',
    flexGrow: '1',
    minWidth: '200px'
});

// Añadir elementos
contenedor.appendChild(btnPrev);
contenedor.appendChild(texto);
contenedor.appendChild(btnNext);

// Función para cambiar mensaje con fade
function cambiarMensaje(nuevoIndice) {
    if (animando) return;
    animando = true;

    texto.style.opacity = 0;
    setTimeout(() => {
        indice = nuevoIndice;
        texto.textContent = mensajes[indice];
        texto.style.opacity = 1;
    }, 400);

    setTimeout(() => {
        animando = false;
    }, 900); // fade out + fade in
}

// Funciones siguiente y anterior
function siguiente() {
    cambiarMensaje((indice + 1) % mensajes.length);
}

function anterior() {
    cambiarMensaje((indice - 1 + mensajes.length) % mensajes.length);
}

// Timer automático
let timer = setInterval(siguiente, 5000);

// Eventos botones
btnNext.addEventListener('click', () => {
    clearInterval(timer);
    siguiente();
    timer = setInterval(siguiente, 5000);
});

btnPrev.addEventListener('click', () => {
    clearInterval(timer);
    anterior();
    timer = setInterval(siguiente, 5000);
});

// Inserta el contenedor antes del header
document.body.insertBefore(contenedor, document.querySelector('header'));