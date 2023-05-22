(function($) {
    "use strict";

    //Page cursors

    document
        .getElementsByTagName("body")[0]
        .addEventListener("mousemove", function(n) {
            (t.style.left = n.clientX + "px"),
            (t.style.top = n.clientY + "px"),
            (e.style.left = n.clientX + "px"),
            (e.style.top = n.clientY + "px"),
            (i.style.left = n.clientX + "px"),
            (i.style.top = n.clientY + "px");
        });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");

    function n(t) {
        e.classList.add("hover"), i.classList.add("hover");
    }

    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover");
    }
    s();
    for (
        var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--
    ) {
        o(r[a]);
    }

    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
    }

    //Navigation

    var app = (function() {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector("body");
            menu = document.querySelector(".menu-icon");
            menuItems = document.querySelectorAll(".nav__list-item");
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener("click", function() {
                return toggleClass(body, "nav-active");
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass))
                element.classList.remove(stringClass);
            else element.classList.add(stringClass);
        };
        init();
    })();

    //Switch light/dark

    $("#switch").on("click", function() {
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $("#switch").removeClass("switched");
        } else {
            $("body").addClass("light");
            $("#switch").addClass("switched");
        }
    });
})(jQuery);

/**3d */

// Espero que este exceso de comentarios ayude. ¡Hagámoslo!
// Usemos la variable 'activa' para saber cuándo la estamos usando
let active = false;

// Primero tendremos que configurar nuestros detectores de eventos
// Queremos ver los clics en nuestro scroller
document.querySelector('.scroller').addEventListener('mousedown', function() {
    active = true;
    // Agregue nuestra clase de desplazamiento para que el desplazador tenga opacidad total mientras está activo
    document.querySelector('.scroller').classList.add('scrolling');
});
// También queremos observar el cuerpo en busca de cambios en el estado,
// como moverse y soltar el clic
// así que configuremos nuestros detectores de eventos
document.body.addEventListener('mouseup', function() {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave', function() {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});

// Averigüemos dónde está su ratón
document.body.addEventListener('mousemove', function(e) {
    if (!active) return;
    // el mouse está aquí...
    let x = e.pageX;

    x -= document.querySelector('.wrapper').getBoundingClientRect().left;
    // cambiamos estado
    scrollIt(x);
});

// Usamos esta función
function scrollIt(x) {
    let transform = Math.max(0, (Math.min(x, document.querySelector('.wrapper').offsetWidth)));
    document.querySelector('.after').style.width = transform + "px";
    document.querySelector('.scroller').style.left = transform - 25 + "px";
}

// Establecemos nuestro estado de apertura basado en el ancho,
// queremos mostrar un poco de ambas imágenes para que el usuario pueda ver lo que está pasando
scrollIt(150);

// Y finalmente repitamos el proceso para eventos táctiles
// primero nuestro desplazador central...

document.querySelector('.scroller').addEventListener('touchstart', function() {
    active = true;
    document.querySelector('.scroller').classList.add('scrolling');
});
document.body.addEventListener('touchend', function() {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel', function() {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});

/***fin */



/**inicio preload*/

window.onload = function() {
    window.setTimeout(fadeout, 1800);
};

function fadeout() {
    document.querySelector("#contenedor").style.opacity = "0";
    document.querySelector("#contenedor").style.display = "none";
}

/*fin*/