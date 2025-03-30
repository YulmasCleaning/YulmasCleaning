// Asegúrate de que el navegador maneje el scroll al recargar
if (history.scrollRestoration) {
    history.scrollRestoration = 'auto'; // Permite que el navegador recuerde la posición del scroll
}


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    // Alternar la visibilidad del menú al hacer clic en el botón
    menuToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.navbar-menu a').forEach(function (link) {
        link.addEventListener('click', function () {
            navbarMenu.classList.remove('active');
        });
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = navbarMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle) {
            navbarMenu.classList.remove('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider-slide');
    const dotsContainer = document.querySelector('.slider-dots');

    // Función para mostrar una slide específica
    function showSlide(index) {
        // Asegurarse de que el índice esté dentro del rango
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        // Ocultar todas las slides y desactivar los puntos
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dotsContainer.children[i].classList.remove('active');
        });

        // Mostrar la slide actual y activar el punto correspondiente
        slides[currentIndex].classList.add('active');
        dotsContainer.children[currentIndex].classList.add('active');
    }

    // Función para avanzar a la siguiente slide
    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    // Función para retroceder a la slide anterior
    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Crear puntos indicadores dinámicamente
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        dot.addEventListener('click', () => showSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Mostrar la primera slide y activar el primer punto al cargar la página
    showSlide(currentIndex);

    // Eventos para los controles de navegación
    document.querySelector('.prev').addEventListener('click', (e) => {
        e.preventDefault();
        prevSlide();
    });

    document.querySelector('.next').addEventListener('click', (e) => {
        e.preventDefault();
        nextSlide();
    });

    // Cambio automático de slides cada 3 segundos
    setInterval(nextSlide, 4000);
});



document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    const slidesContainer = document.querySelector('.testimonial-slides');

    // Función para mostrar una slide específica
    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        // Mueve el contenedor de slides
        const offset = -currentIndex * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;

        // Actualiza los puntos indicadores
        dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === currentIndex) dot.classList.add('active');
        });
    }

    // Crear puntos indicadores dinámicamente
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', () => showSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Mostrar la primera slide y activar el primer punto al cargar la página
    showSlide(currentIndex);

    // Eventos para los controles de navegación
    document.querySelector('.prevT').addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(currentIndex - 1);
    });

    document.querySelector('.nextT').addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(currentIndex + 1);
    });

    // Cambio automático de slides cada 5 segundos
    setInterval(() => showSlide(currentIndex + 1), 5000);
});


document.addEventListener('DOMContentLoaded', () => {
    const cambiarIdioma = document.getElementById('language-selector');

    // Cambiar de idioma al seleccionar una opción
    cambiarIdioma.addEventListener('change', (e) => {
        const idioma = e.target.value;
        const cuerpo = document.body;

        // Aplicar la animación de desvanecimiento
        cuerpo.classList.add('fade-out');
       

        // Redirigir después de que termine la animación
        setTimeout(() => {
            if (idioma === 'en') {
                window.location.href = 'index-en.html'; // Redirigir a la página en inglés
            } else if (idioma === 'es') {
                window.location.href = 'index.html'; // Redirigir a la página en español
            }
        }, 500); // 500ms = duración de la animación
    });

    // Establecer el idioma seleccionado en el <select>
    const rutaActual = window.location.pathname;
    if (rutaActual.includes('index-en.html')) {
        cambiarIdioma.value = 'en'; // Marcar "English" como seleccionado
    } else {
        cambiarIdioma.value = 'es'; // Marcar "Español" como seleccionado
    }
});







// const d = document;
// function slider() {
//     const $nextBtn = d.querySelector(".slider-btns .next"),
//         $prevBtn = d.querySelector(".slider-btns .prev"),
//         $slides = d.querySelectorAll(".slider-slide");
//     let i = 0;
//     d.addEventListener("click", (e) => {
//         if (e.target === $prevBtn) {
//             e.preventDefault();
//             /* para que no se valla hasta arriba el btn e ir hacia  atras */
//             $slides[i].classList.remove("active");
//             i--;
//             if (i < 0) {
//                 i = $slides.length - 1;
//             }
//             $slides[i].classList.add("active");
//         }
//         if (e.target === $nextBtn) {
//             e.preventDefault();
//             /* para que no se valla hasta arriba el btn  e ir hacia adelante*/
//             $slides[i].classList.remove("active");
//             i++;
//             if (i >= $slides.length) {
//                 i = 0;
//                 /* reseteo */
//             }
//             $slides[i].classList.add("active");
//         }
//     })
// }

