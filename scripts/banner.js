const mensajes = [
    "¡Bienvenido a Deco Toppers Chile!",
    "Revisa nuestro catálogo de toppers y bases para tortas",
    "Haz tu pedido por WhatsApp",
    "Realiza pedidos personalizados"
];

let indice = 0;

// Contenedor principal (fondo)
const contenedor = document.createElement('div');
contenedor.id = 'mensajes-dinamicos';
contenedor.style.display = 'flex';
contenedor.style.alignItems = 'center';
contenedor.style.justifyContent = 'space-between';
contenedor.style.backgroundColor = '#ff914d';
contenedor.style.color = '#fff';
contenedor.style.padding = '20px 20px';
contenedor.style.fontWeight = '300';
contenedor.style.fontSize = '1.2rem';
contenedor.style.cursor = 'default';
contenedor.style.minWidth = '400px';

// Botón anterior
const btnPrev = document.createElement('button');
btnPrev.textContent = '<';
btnPrev.style.width = '200px';      // ancho fijo
btnPrev.style.fontSize = '1.2rem';
btnPrev.style.fontWeight = '300';  // flecha más fina
btnPrev.style.background = 'transparent';
btnPrev.style.border = 'none';
btnPrev.style.color = '#fff';
btnPrev.style.cursor = 'pointer';

// Botón siguiente
const btnNext = document.createElement('button');
btnNext.textContent = '>';
btnNext.style.width = '200px';      // ancho fijo
btnNext.style.fontSize = '1.2rem';
btnNext.style.fontWeight = '300';
btnNext.style.background = 'transparent';
btnNext.style.border = 'none';
btnNext.style.color = '#fff';
btnNext.style.cursor = 'pointer';

// Span del texto (fade)
const texto = document.createElement('span');
texto.textContent = mensajes[indice];
texto.style.transition = 'opacity 0.8s';
texto.style.textAlign = 'center';
texto.style.flexGrow = '1';        // ocupa todo el espacio entre las flechas
texto.style.minWidth = '200px';    // evita que cambie de tamaño el contenedor

// Añadir elementos al contenedor
contenedor.appendChild(btnPrev);
contenedor.appendChild(texto);
contenedor.appendChild(btnNext);

// Función para cambiar mensaje con fade
function cambiarMensaje(nuevoIndice) {
    texto.style.opacity = 0;
    setTimeout(() => {
        indice = nuevoIndice;
        texto.textContent = mensajes[indice];
        texto.style.opacity = 1;
    }, 300);
}

// Función siguiente y anterior
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