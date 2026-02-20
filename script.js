// Manejo del menú en dispositivos móviles (Mantenemos esta parte igual)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- NUEVO: Envío directo a WhatsApp ---

// Número configurado con código de Argentina (54), el 9 para celulares, y el área local
const telefonoRotiseria = "5492975373508"; 

const botonesAgregar = document.querySelectorAll('.btn-agregar');

botonesAgregar.forEach(boton => {
    boton.addEventListener('click', (e) => {
        // 1. Capturamos la tarjeta entera del producto donde se hizo clic
        const productoCard = e.target.parentElement;

        // 2. Extraemos el texto del título y del precio
        const nombreProducto = productoCard.querySelector('h3').innerText;
        const precioProducto = productoCard.querySelector('.precio').innerText;

        // 3. Armamos el mensaje predeterminado que verá el cliente
        const mensaje = `¡Hola! Me gustaría hacer un pedido: 1 x ${nombreProducto} (${precioProducto}). ¿Me confirman la demora y si puedo pasar a retirarlo?`;

        // 4. Codificamos el texto para que los espacios y símbolos funcionen en un link
        const mensajeCodificado = encodeURIComponent(mensaje);

        // 5. Creamos la URL oficial de la API de WhatsApp
        const urlWhatsApp = `https://wa.me/${telefonoRotiseria}?text=${mensajeCodificado}`;

        // 6. Abrimos el chat en una pestaña nueva (o en la app del celu)
        window.open(urlWhatsApp, '_blank');
    });
});
          
