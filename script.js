// =====================================
// ALTURA DEL HEADER (para el scroll a categorías)
// =====================================
// El header es sticky y tapa parte de arriba de la página. Guardamos
// su altura real en una variable CSS para que .category-section pueda
// usar scroll-margin-top y el scroll no quede tapado por el header.

const header = document.querySelector("header");

function actualizarAlturaHeader() {
    document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`
    );
}

actualizarAlturaHeader();
window.addEventListener("resize", actualizarAlturaHeader);

// =====================================
// MENÚ HAMBURGUESA
// =====================================

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// =====================================
// RENDERIZAR TARJETAS
// =====================================

function crearTarjeta(juego) {

    const article = document.createElement("article");
    article.className = "game-card";
    article.dataset.name = juego.name;

    if (juego.id) {
        article.id = juego.id;
    }

    article.innerHTML = `
        <img src="${juego.img}" alt="${juego.alt}">
        <h3>${juego.title}</h3>
        <p class="genre">${juego.genre}</p>
        <p class="platform">${juego.platform}</p>
        <p class="rating">${juego.rating}</p>
        <button class="toggle-review">Mi opinión</button>
        <div class="review-content">
            <p class="recommendation">${juego.review}</p>
        </div>
    `;

    return article;
}

function renderizarJuegos() {

    document.querySelectorAll(".category-section").forEach(seccion => {

        const contenedor = seccion.querySelector(".games-container");

        juegos
            .filter(juego => juego.cat === seccion.id)
            .forEach(juego => {
                contenedor.appendChild(crearTarjeta(juego));
            });

    });

}

renderizarJuegos();

// =====================================
// FAVORITOS DEL BANNER
// =====================================

const favoritos = [
    {
        titulo: "Shadow of the Colossus",
        descripcion: "Una aventura inolvidable con algunos de los enfrentamientos más épicos de la historia.",
        imagen: "img/soct-banner.jpg",
        link: "#shadow-colossus"
    },
    {
        titulo: "Star Wars Jedi: Fallen Order",
        descripcion: "Una de las mejores aventuras modernas de Star Wars.",
        imagen: "img/sw-fo-banner.png",
        link: "#fallen-order"
    },
    {
        titulo: "Sifu",
        descripcion: "Combate espectacular y un sistema de progresión único.",
        imagen: "img/Sifu-banner.png",
        link: "#sifu"
    },
    {
        titulo: "Marvel's Spider-Man",
        descripcion: "Moverse por Nueva York nunca fue tan divertido.",
        imagen: "img/spider-man-banner.jpg",
        link: "#spiderman"
    },
    {
        titulo: "Resident Evil 4",
        descripcion: "Uno de los mejores videojuegos jamás creados.",
        imagen: "img/re4-banner.png",
        link: "#re4"
    },
    {
        titulo: "Mortal Kombat 11",
        descripcion: "Mi juego favorito de lucha por contenido y jugabilidad.",
        imagen: "img/mk11-banner.png",
        link: "#mk11"
    },
    {
        titulo: "GTA V",
        descripcion: "Un mundo abierto enorme lleno de posibilidades.",
        imagen: "img/gtav-banner.jpeg",
        link: "#gta5"
    },
    {
        titulo: "Star Wars Battlefront II",
        descripcion: "Mi shooter favorito de Star Wars.",
        imagen: "img/battlefront2-banner.jpg",
        link: "#battlefront2"
    }
];

// =====================================
// ELEMENTOS DEL BANNER
// =====================================

const banner = document.querySelector(".banner");
const bannerTitle = document.getElementById("banner-title");
const bannerDescription = document.getElementById("banner-description");
const bannerButton = document.getElementById("banner-button");
const prevBanner = document.getElementById("prev-banner");
const nextBanner = document.getElementById("next-banner");

let indiceActual = 0;
let bannerInterval;

// =====================================
// ACTUALIZAR BANNER
// =====================================

function actualizarBanner() {

    const juego = favoritos[indiceActual];

    banner.style.backgroundImage = `
        linear-gradient(
            rgba(0,0,0,.45),
            rgba(15,23,42,.92)
        ),
        url('${juego.imagen}')
    `;

    bannerTitle.textContent = juego.titulo;
    bannerDescription.textContent = juego.descripcion;
    bannerButton.href = juego.link;

    reiniciarAnimacionBanner();
}

// =====================================
// CAMBIAR BANNER
// =====================================

function siguienteBanner() {

    indiceActual++;

    if (indiceActual >= favoritos.length) {
        indiceActual = 0;
    }

    actualizarBanner();
}

function anteriorBanner() {

    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = favoritos.length - 1;
    }

    actualizarBanner();
}

// =====================================
// BANNER AUTOMÁTICO
// =====================================

function iniciarBannerAutomatico() {

    bannerInterval = setInterval(() => {
        siguienteBanner();
    }, 5500);

}

function reiniciarBannerAutomatico() {

    clearInterval(bannerInterval);
    iniciarBannerAutomatico();

}

// =====================================
// BOTONES DEL BANNER
// =====================================

nextBanner.addEventListener("click", () => {
    siguienteBanner();
    reiniciarBannerAutomatico();
});

prevBanner.addEventListener("click", () => {
    anteriorBanner();
    reiniciarBannerAutomatico();
});

actualizarBanner();
iniciarBannerAutomatico();

// =====================================
// RESALTAR TARJETA DESDE EL BANNER
// =====================================
// Al tocar "Ver recomendación", además del scroll normal del link
// (#id), se ilumina un instante la tarjeta de destino para que no
// haya que buscarla con la mirada entre las demás de la fila.

bannerButton.addEventListener("click", () => {

    const idDestino = bannerButton.getAttribute("href").slice(1);
    const tarjeta = document.getElementById(idDestino);

    if (!tarjeta) {
        return;
    }

    tarjeta.classList.remove("resaltada");
    void tarjeta.offsetWidth;
    tarjeta.classList.add("resaltada");

    tarjeta.addEventListener("animationend", function alTerminar() {
        tarjeta.classList.remove("resaltada");
        tarjeta.removeEventListener("animationend", alTerminar);
    });

});

// =====================================
// BUSCADOR MEJORADO
// =====================================
// Antes esto forzaba display:"block" por inline style, lo que pisaba
// el display:flex propio de .game-card y descuadraba la imagen.
// Ahora solo se togglea una clase ("oculta") y el propio CSS de la
// tarjeta decide cómo mostrarse.

const searchInput = document.getElementById("searchInput");

function filtrarJuegos(texto) {

    texto = texto.toLowerCase().trim();

    if (texto !== "") {
        banner.style.display = "none";
        footer.style.display = "none";
    } else {
        banner.style.display = "flex";
        footer.style.display = "block";
    }

    document.querySelectorAll(".game-card").forEach(card => {

        const visible = card.dataset.name.toLowerCase().includes(texto);
        card.classList.toggle("oculta", !visible);

    });

    document.querySelectorAll(".category-section").forEach(categoria => {

        const contenedor = categoria.querySelector(".games-container");
        const visibles = contenedor.querySelectorAll(".game-card:not(.oculta)");

        categoria.style.display =
            texto === "" || visibles.length > 0
                ? "block"
                : "none";

        contenedor.classList.toggle(
            "resultado-unico",
            texto !== "" && visibles.length === 1
        );

    });

}

const footer = document.querySelector("footer");

searchInput.addEventListener("input", () => {
    filtrarJuegos(searchInput.value);
});

// =====================================
// IR A CATEGORÍA DESDE EL MENÚ
// =====================================
// Si hay una búsqueda activa, un click en "Juegos" o en el menú mobile
// primero limpia el filtro (así la sección de destino vuelve a estar
// visible) y recién ahí el navegador hace el scroll al ancla.

document.querySelectorAll(".dropdown-content a, .mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        searchInput.value = "";
        filtrarJuegos("");

        mobileMenu.classList.remove("active");

    });

});

// =====================================
// APARICIÓN DE TARJETAS
// =====================================
// El delay se reinicia por categoría (antes era global sobre las 29
// tarjetas, así que las categorías más abajo en la página tardaban
// mucho más en empezar a aparecer). También se acortó la duración.

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show-card");
        }

    });

}, { threshold: 0.15 });

document.querySelectorAll(".games-container").forEach(contenedor => {

    const cardsDeLaCategoria = contenedor.querySelectorAll(".game-card");

    cardsDeLaCategoria.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = `all .35s ease ${index * 0.04}s`;

        observer.observe(card);

    });

});

// =====================================
// ESTILO PARA ANIMACIÓN
// =====================================

const style = document.createElement("style");

style.innerHTML = `
.show-card{
    opacity:1!important;
    transform:translateY(0)!important;
}
`;

document.head.appendChild(style);

// =====================================
// ANIMACIÓN DEL TEXTO DEL BANNER
// =====================================

function reiniciarAnimacionBanner() {

    bannerTitle.style.animation = "none";
    bannerDescription.style.animation = "none";

    void bannerTitle.offsetWidth;

    bannerTitle.style.animation = "aparecerBanner .7s ease";
    bannerDescription.style.animation = "aparecerBanner .9s ease";

}

// =====================================
// DESPLEGAR RECOMENDACIÓN
// =====================================
// Solo se mantiene una opinión abierta a la vez: al abrir una,
// se cierra automáticamente la anterior (si había otra abierta).
// Al abrir, se guarda la posición de scroll de ese momento y se
// espera a que termine la animación (transitionend de max-height)
// para medir si el contenido se pasa del borde inferior de la
// pantalla y, si es así, bajar justo lo necesario. Al cerrarla
// (segundo click sobre el mismo botón), se vuelve a esa posición
// guardada.

let reviewAbierta = null;
let scrollAntesDeAbrir = 0;

document.querySelectorAll(".toggle-review").forEach(button => {

    const contenido = button.nextElementSibling;

    button.addEventListener("click", () => {

        const seEstaAbriendo = !contenido.classList.contains("active");

        if (seEstaAbriendo && reviewAbierta === null) {
            scrollAntesDeAbrir = window.scrollY;
        }

        if (reviewAbierta && reviewAbierta !== contenido) {
            reviewAbierta.classList.remove("active");
        }

        contenido.classList.toggle("active");
        reviewAbierta = seEstaAbriendo ? contenido : null;

        if (!seEstaAbriendo) {
            window.scrollTo({
                top: scrollAntesDeAbrir,
                behavior: "smooth"
            });
            return;
        }

        contenido.addEventListener("transitionend", function alTerminar(evento) {

            if (evento.propertyName !== "max-height") {
                return;
            }

            contenido.removeEventListener("transitionend", alTerminar);

            const rect = contenido.getBoundingClientRect();
            const espacioSobrante = rect.bottom - window.innerHeight;

            if (espacioSobrante > 0) {
                window.scrollBy({
                    top: espacioSobrante + 20,
                    behavior: "smooth"
                });
            }

        });

    });

});