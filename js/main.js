
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




/* ==========================================
   MODAL DE SERVICIOS
   ========================================== */

// Obtener elementos HTML

const serviceModal = document.getElementById("service-modal");

const modalImage = document.getElementById("modal-image");

const modalTitle = document.getElementById("modal-title");

const modalDescription = document.getElementById("modal-description");

const modalClose = document.querySelector(".modal-close");


// ==========================================
// INFORMACIÓN DE LOS SERVICIOS
// ==========================================

const servicesData = {

    mantenimiento: {

        title: "Mantenimiento general",

        image: "assets/images/image1.webp",

        description:
            "Realizamos el mantenimiento periódico de tu vehículo para conservar su rendimiento, fiabilidad y seguridad. Revisamos los principales componentes mecánicos, comprobamos los niveles de líquidos y sustituimos los elementos necesarios según las necesidades de cada vehículo."

    },


    motores: {

        title: "Reparación de motores",

        image: "assets/images/image2.webp",

        description:
            "Diagnosticamos y reparamos averías relacionadas con el motor. Analizamos los síntomas del vehículo para identificar posibles problemas y determinar las intervenciones necesarias para recuperar su correcto funcionamiento."

    },


    electricidad: {

        title: "Baterías y electricidad",

        image: "assets/images/image3.webp",

        description:
            "Comprobamos el estado de la batería y revisamos los principales componentes del sistema eléctrico. También realizamos sustituciones y comprobaciones para solucionar problemas de arranque y fallos eléctricos."

    },


    chapa: {

        title: "Chapa y pintura",

        image: "assets/images/image4.webp",

        description:
            "Realizamos trabajos de reparación de carrocería para solucionar golpes, arañazos y otros daños exteriores. También llevamos a cabo trabajos de pintura para recuperar el aspecto original del vehículo."

    },


    frenos: {

        title: "Sistemas de frenado",

        image: "assets/images/image5.webp",

        description:
            "Revisamos los principales componentes del sistema de frenado, incluyendo discos, pastillas y otros elementos relacionados. El objetivo es detectar desgastes o anomalías que puedan comprometer la seguridad del vehículo."

    },


    diagnosis: {

        title: "Diagnosis electrónica",

        image: "assets/images/image6.webp",

        description:
            "Utilizamos equipos de diagnosis electrónica para detectar y analizar posibles averías en los sistemas electrónicos del vehículo. Esta comprobación permite identificar códigos de error y orientar las reparaciones necesarias."

    }

};


// ==========================================
// ABRIR MODAL
// ==========================================

// Seleccionar todos los botones de servicios

const serviceButtons = document.querySelectorAll(".service-link");


serviceButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Obtener el identificador del servicio

        const serviceId = button.dataset.service;

        // Buscar los datos correspondientes

        const service = servicesData[serviceId];

        // Comprobar que existe el servicio

        if (!service) return;

        // Actualizar el contenido del modal

        modalImage.src = service.image;

        modalImage.alt = service.title;

        modalTitle.textContent = service.title;

        modalDescription.textContent = service.description;

        // Mostrar la ventana modal

        serviceModal.showModal();

    });

});


// ==========================================
// CERRAR MODAL
// ==========================================

// Cerrar mediante el botón X

modalClose.addEventListener("click", () => {

    serviceModal.close();

});


// Cerrar al pulsar Escape

serviceModal.addEventListener("click", (event) => {

    if (event.target === serviceModal) {

        serviceModal.close();

    }

});


// Cerrar después de solicitar información

const appointmentButton = document.querySelector(".modal-appointment");

appointmentButton.addEventListener("click", () => {

    serviceModal.close();

});
