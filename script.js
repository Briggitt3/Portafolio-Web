/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



/* scroll sections */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            /* active navbar links */
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            /* active sections for animation on scroll */
            sec.classList.add('show-animate');
        }

        /* if want to use animation that repeats on scroll use this */

        else  {
            sec.classList.remove('show-animate');
        }
    });

    /* sticky header */
    let header = document.querySelector('header');

    header.classList.toggle('sticky',  window.scrollY > 100);

/*     remove toggle icon and navbar when click navbar links (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    /* animation footer on scroll */
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

const imagenes = ['images/OIG1..jpg', 'images/OIG1.jpg', 'images/OIG1.RMiHeIfB.jpg', 'images/OIG4(1).jpg', 'images/OIG4(2).jpg', 'images/OIG4.jpg'];
    let indice = 0;

    function cambiarImagen() {
        const elemento = document.getElementById('avatar');
        elemento.style.opacity = 0; // Desvanece la imagen actual
        setTimeout(() => {
            elemento.src = imagenes[indice]; // Cambia la imagen
            elemento.style.opacity = 1; // Hace visible la nueva imagen
            indice = (indice + 1) % imagenes.length;
        }, 200); // Espera 2 segundos antes de cambiar a la siguiente imagen
    }

    setInterval(cambiarImagen, 5000); // Cambia cada 5 segundos

