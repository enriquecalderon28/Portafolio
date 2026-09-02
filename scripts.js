// =========================
// MENSAJE DE BIENVENIDA
// =========================

console.log("Portafolio de Enrique Calderón Santana cargado correctamente.");


// =========================
// ANIMACIÓN AL HACER SCROLL
// =========================

const elementos = document.querySelectorAll(".card, .proyecto");

const observar = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "all 0.7s ease";

    observar.observe(elemento);

});


// =========================
// AÑO AUTOMÁTICO DEL FOOTER
// =========================

const footer = document.querySelector("footer p");

if (footer) {

    const año = new Date().getFullYear();

    footer.textContent =
        `© ${año} Enrique Calderón Santana`;

}