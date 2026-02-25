// Array de mensajes que quieres mostrar
const mensajes = [
    "¡Bienvenido a Deco Toppers Chile!",
    "Revisa nuestro catálogo de toppers y bases para tortas",
    "Haz tu pedido por WhatsApp",
    "Raliza pedidos personalizados"
];

let indice = 0; // mensaje actual
const contenedor = document.createElement('div');
contenedor.id = 'mensajes-dinamicos';
contenedor.style.textAlign = 'center';
contenedor.style.backgroundColor = '#ff914d';
contenedor.style.color = '#fff';
contenedor.style.padding = '10px';
contenedor.style.fontWeight = '500';
contenedor.style.fontSize = '1.2rem';
contenedor.style.cursor = 'pointer';

// Inicializa con el primer mensaje
contenedor.textContent = mensajes[indice];

// Cambia mensaje cada 5 segundos
let timer = setInterval(() => {
    indice = (indice + 1) % mensajes.length;
    contenedor.textContent = mensajes[indice];
}, 8000);

// Permitir que el usuario haga clic para cambiar mensaje
contenedor.addEventListener('click', () => {
    clearInterval(timer); // reinicia el temporizador
    indice = (indice + 1) % mensajes.length;
    contenedor.textContent = mensajes[indice];
    // Reinicia el timer después de 8s
    timer = setInterval(() => {
        indice = (indice + 1) % mensajes.length;
        contenedor.textContent = mensajes[indice];
    }, 8000);
});

// Inserta el contenedor antes del header
document.body.insertBefore(contenedor, document.querySelector('header'));