/* =====================================================
   SOBRE - INDEX.HTML
===================================================== */

let abierto = false;

function abrirSobre() {

    // Evitamos que se ejecute dos veces
    if (abierto) return;

    const envelope = document.getElementById("envelope");
    const transition = document.getElementById("transition-screen");

    // Solo funciona si estamos en index.html
    if (!envelope || !transition) return;

    abierto = true;

    // Abrimos el sobre
    envelope.classList.add("open");

    // Mostramos la transición
    setTimeout(() => {
        transition.classList.add("show");
    }, 1800);

    // Vamos a la invitación
    setTimeout(() => {
        window.location.href = "invitacion.html";
    }, 3000);
}


/* =====================================================
   CARTA - INVITACION.HTML
===================================================== */

function continuarInvitacion() {

    const transition =
        document.getElementById("transition-evento");

    // Solo funciona si estamos en invitacion.html
    if (!transition) return;

    transition.classList.add("show");

    // Vamos a la página principal del evento
    setTimeout(() => {
        window.location.href = "evento.html";
    }, 1800);
}


/* =====================================================
   CONTADOR REAL - EVENTO.HTML
===================================================== */

// Fecha del cumpleaños:
// 24 de octubre de 2026
// 2:00 PM
// Hora de Ciudad de México
const fechaEvento =
    new Date("2026-10-14T14:00:00-06:00").getTime();


function actualizarContador() {

    // Elementos del contador
    const diasHTML =
        document.getElementById("days");

    const horasHTML =
        document.getElementById("hours");

    const minutosHTML =
        document.getElementById("minutes");

    const segundosHTML =
        document.getElementById("seconds");


    // Si no estamos en evento.html,
    // simplemente no ejecutamos el contador
    if (
        !diasHTML ||
        !horasHTML ||
        !minutosHTML ||
        !segundosHTML
    ) {
        return;
    }


    /* =================================================
       OBTENER TIEMPO ACTUAL
    ================================================= */

    const ahora = new Date().getTime();

    // Tiempo restante hasta el cumpleaños
    const diferencia = fechaEvento - ahora;


    /* =================================================
       SI YA LLEGÓ EL CUMPLEAÑOS
    ================================================= */

    if (diferencia <= 0) {

        diasHTML.textContent = "00";
        horasHTML.textContent = "00";
        minutosHTML.textContent = "00";
        segundosHTML.textContent = "00";

        return;
    }


    /* =================================================
       CALCULAR DÍAS, HORAS, MINUTOS Y SEGUNDOS
    ================================================= */

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60))
        / 1000
    );


    /* =================================================
       MOSTRAR RESULTADOS EN EVENTO.HTML
    ================================================= */

    diasHTML.textContent =
        String(dias).padStart(2, "0");

    horasHTML.textContent =
        String(horas).padStart(2, "0");

    minutosHTML.textContent =
        String(minutos).padStart(2, "0");

    segundosHTML.textContent =
        String(segundos).padStart(2, "0");
}


/* =====================================================
   INICIAR CONTADOR
===================================================== */

// Ejecutamos una vez inmediatamente
actualizarContador();

// Después actualizamos cada segundo
setInterval(actualizarContador, 1000);