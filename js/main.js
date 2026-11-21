
/* ==========================================
   FOOTER - AÑO AUTOMÁTICO
   ========================================== */

const currentYear = document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}




// ==========================================
// HEADER DINÁMICO (HIDE ON SCROLL)
// ==========================================

const header = document.getElementById("header");

// Guardamos la última posición del scroll
let lastScrollY = window.scrollY;

// Detectamos el movimiento del usuario
window.addEventListener("scroll", () => {

    const currentScrollY = window.scrollY;

    // Si estamos en la parte superior, mostramos el header
    if (currentScrollY <= 80) {

        header.classList.remove("header-hidden");

    }

    // Si bajamos, ocultamos el header
    else if (currentScrollY > lastScrollY) {

        header.classList.add("header-hidden");

    }

    // Si subimos, mostramos el header
    else if (currentScrollY < lastScrollY) {

        header.classList.remove("header-hidden");

    }

    // Actualizamos la última posición registrada
    lastScrollY = currentScrollY;

}, { passive: true });