/*
Sol de medianoche
Stephenie Meyer
$4.399,00
9789877387308
800
Español
677881.jpg
Cuando Edward Cullen y Bella Swan se conocieron en Crepúsculo; nació una historia de amor icónica. Pero hasta ahora; sus fans solo conocen la historia a través de Bella. Por fin los lectores podrán vivir la versión de Edward en la muy esperada novela Sol de medianoche. La inolvidable historia; contada a través de los ojos de Edward; toma un cariz nuevo y definitivamente oscuro. Conocer a Bella es lo más perturbador e intrigante que le ha sucedido en todos sus años como vampiro. A medida que se nos desvelan detalles fascinantes del pasado de Edward y la complejidad de sus pensamientos más íntimos; entenderemos por qué este es el conflicto interno que define su vida. ¿Cómo puede justificar los impulsos de su corazón si significan poner a Bella en peligro? En Sol de Medianoche; Stephenie Meyer nos transporta de nuevo a un mundo que ha cautivado a millones de lectores y nos trae una novela épica sobre los profundos placeres y las consecuencias devastadoras de un amor inmortal.


Despierta
Lorena Pronsky
$3.049,00
9789501516227
336
Español
677866.jpg
La mayoría de las decisiones que tomamos en nuestra vida las hacemos estando dormidos. Casi arrastrados por un estado de inercia. Cuando reaccionamos; el paso ya está dado y el resto del tiempo nos quedamos ahí -atrapados- intentando hacer algo con eso que ni advertimos haber decidido. Hay cosas que no se deshacen. Querer intentarlo es verle la cara a la frustración. Por el contrario; se hace necesario un viaje a nuestro mundo interior. Si registramos lo que hacemos y sentimos; ganamos libertad y la posibilidad urgente de conocer nuestros deseos más profundos. ¿Quién soy? ¿Qué quiero? ¿Cómo lo quiero? Ser conscientes de lo que sentimos: decirlo; palparlo y nombrarlo son formas en las que logramos adueñarnos de nuestra vida. Cuanto antes despertemos a nuestro mundo interior; más sabias y honestas serán nuestras decisiones. Despierta es el paso hacia una existencia verdadera. Una invitación a conocernos y animarnos a pisar firme y fuerte. Siempre hacia donde nos guíen nuestros latidos. Sí. Los nuestros. Lorena Pronsky.


Confianza ciega
John Katzenbach
$4.399,00
9789877801668
592
Español
678518.jpg
Cuando Maeve desaparece sin dejar rastro, su hija Sloane no se sorprende: si su madre tenía que desaparecer, solo podía ser en extrañas circunstancias. Sin embargo, esta vez es distinto: al cabo de unos días de la desaparición de su progenitora, Sloane recibe un paquete que esta misma le ha mandado, con varios miles de dólares, la escritura de su casa y un arma. También hay una nota con las siguientes palabras: "Vendelo todo. Quedate la pistola. Practica. Huye. Ahora". A solo dos semanas de graduarse como arquitecta y en medio de esta encrucijada personal, Sloane recibe la oferta de trabajo de un misterioso millonario que quiere construir seis memoriales para seis personas que murieron, de nuevo, en extrañas circunstancias. A medida que Sloane investiga esas muertes, el consejo de su madre se hace cada vez más presente. ¿En quién puede confiar ahora Sloane? ¿Tendrá tiempo de seguir las indicaciones de su madre cuando llegue al final del laberinto que ha ido creando su siniestro empleador?.


Cocinemos juntos
Maru Botana
$3.890,00
9789876378697
220
Español
677978.jpg
Maru cocina junto a sus hijos y amigos sus mejores recetas del día a día. Este manual con recetario ayudará a los jóvenes, a los recién mudados y a todo aquel que se inicia en la cocina a preparar los platos más deliciosos: bebidas, entradas, principales, panes, postres y tortas. Todo con los eximios sabores y la simplicidad de Maru Botana.

*/

// punto 7
class Libro {
    constructor(autor, libro, precio, isbn, paginas, idioma, foto, sinopsis){

        // punto 8
        this.autor = autor
        this.libro = libro
        this.precio = precio
        this.isbn = isbn
        this.paginas = paginas
        this.idioma = idioma
        this.foto = foto
        this.sinopsis = sinopsis
    }

    // punto 10
    getHtmlArticle(){
        return `
        <article>
        <h2>${this.autor}</h2>
        <h3><span class="de">de</span> ${this.libro}</h3>

        <div class="informacion">
            <a href=${this.foto} title="Presioná para ver la imagen en tamaño grande" target="_blank">
                <img src=${this.foto} alt="Portada de Sol de medianoche">
            </a>
            <p>
                <span>${this.precio}:</span>
                <span>$1.699,00</span>
            </p>
            <p>
                <span title="International Standard Book Number">ISBN:</span>
                <span>${this.isbn}</span>
            </p>
            <p>
                <span>Páginas:</span>
                <span>${this.paginas}</span>
            </p>
            <p>
                <span>Idioma:</span>
                <span>${this.idioma}</span>
            </p>
        </div>
        <div class="sinopsis">
            <p>${this.sinopsis}</p>
        </div>
        <div class="gradiente-blanco"></div>
    </article>
        `;
    }
}

// punto 9
let libro1 = new Libro(
    'Carrie',
    'Stephen King',
    '$2.399',
    '9789871138999',
    '256',
    'Español',
    '/parte-2/img/foto.jpg',
    'El legendario debut de Stephen King, sobre una marginada adolescente y la venganza que ejerce sobre sus compañeros de clase.'
)

// punto 11
const htmlarticle = libro1.getHtmlArticle();
const elemLibrosContainer = document.getElementById('libros').innerHTML += htmlarticle

// punto 12
let libro2 = new Libro(
    'Sol de medianoche',
    'Stephenie Meyer',
    '$4.399,00',
    '9789877387308',
    '800',
    'Español',
    '/parte-2/img/677881.jpg',
    'Cuando Edward Cullen y Bella Swan se conocieron en Crepúsculo; nació una historia de amor icónica. Pero hasta ahora; sus fans solo conocen la historia a través de Bella. Por fin los lectores podrán vivir la versión de Edward en la muy esperada novela Sol de medianoche. La inolvidable historia; contada a través de los ojos de Edward; toma un cariz nuevo y definitivamente oscuro. Conocer a Bella es lo más perturbador e intrigante que le ha sucedido en todos sus años como vampiro. A medida que se nos desvelan detalles fascinantes del pasado de Edward y la complejidad de sus pensamientos más íntimos; entenderemos por qué este es el conflicto interno que define su vida. ¿Cómo puede justificar los impulsos de su corazón si significan poner a Bella en peligro? En Sol de Medianoche; Stephenie Meyer nos transporta de nuevo a un mundo que ha cautivado a millones de lectores y nos trae una novela épica sobre los profundos placeres y las consecuencias devastadoras de un amor inmortal.',
)

const htmlarticle1 = libro2.getHtmlArticle();

let libro3 = new Libro(
    'Despierta',
    'Lorena Pronsky',
    '$3.049,00',
    '9789501516227',
    '336',
    'Español',
    '/parte-2/img/677866.jpg',
    'La mayoría de las decisiones que tomamos en nuestra vida las hacemos estando dormidos. Casi arrastrados por un estado de inercia. Cuando reaccionamos; el paso ya está dado y el resto del tiempo nos quedamos ahí -atrapados- intentando hacer algo con eso que ni advertimos haber decidido. Hay cosas que no se deshacen. Querer intentarlo es verle la cara a la frustración. Por el contrario; se hace necesario un viaje a nuestro mundo interior. Si registramos lo que hacemos y sentimos; ganamos libertad y la posibilidad urgente de conocer nuestros deseos más profundos. ¿Quién soy? ¿Qué quiero? ¿Cómo lo quiero? Ser conscientes de lo que sentimos: decirlo; palparlo y nombrarlo son formas en las que logramos adueñarnos de nuestra vida. Cuanto antes despertemos a nuestro mundo interior; más sabias y honestas serán nuestras decisiones. Despierta es el paso hacia una existencia verdadera. Una invitación a conocernos y animarnos a pisar firme y fuerte. Siempre hacia donde nos guíen nuestros latidos. Sí. Los nuestros. Lorena Pronsky.',
)

const htmlarticle2 = libro3.getHtmlArticle();

let libro4 = new Libro(
    'Confianza ciega',
    'John Katzenbach',
    '$4.399,00',
    '9789877801668',
    '592',
    'Español',
    '/parte-2/img/678518.jpg',
    'Cuando Maeve desaparece sin dejar rastro, su hija Sloane no se sorprende: si su madre tenía que desaparecer, solo podía ser en extrañas circunstancias. Sin embargo, esta vez es distinto: al cabo de unos días de la desaparición de su progenitora, Sloane recibe un paquete que esta misma le ha mandado, con varios miles de dólares, la escritura de su casa y un arma. También hay una nota con las siguientes palabras: "Vendelo todo. Quedate la pistola. Practica. Huye. Ahora". A solo dos semanas de graduarse como arquitecta y en medio de esta encrucijada personal, Sloane recibe la oferta de trabajo de un misterioso millonario que quiere construir seis memoriales para seis personas que murieron, de nuevo, en extrañas circunstancias. A medida que Sloane investiga esas muertes, el consejo de su madre se hace cada vez más presente. ¿En quién puede confiar ahora Sloane? ¿Tendrá tiempo de seguir las indicaciones de su madre cuando llegue al final del laberinto que ha ido creando su siniestro empleador?.',
)

const htmlarticle3 = libro4.getHtmlArticle();

let libro5 = new Libro(
    'Cocinemos juntos',
    'Maru Botana',
    '$3.890,00',
    '9789876378697',
    '220',
    'Español',
    '/parte-2/img/677978.jpg',
    'Maru cocina junto a sus hijos y amigos sus mejores recetas del día a día. Este manual con recetario ayudará a los jóvenes, a los recién mudados y a todo aquel que se inicia en la cocina a preparar los platos más deliciosos: bebidas, entradas, principales, panes, postres y tortas. Todo con los eximios sabores y la simplicidad de Maru Botana.'
)

const htmlarticle4 = libro5.getHtmlArticle();

// punto 13

let htmlNuevosLibros = libro2.getHtmlArticle()
                       + libro3.getHtmlArticle()
                       + libro4.getHtmlArticle()
                       + libro5.getHtmlArticle()
                       document.getElementById('libros').innerHTML += htmlNuevosLibros


// punto 14
// Hecho

// punto 15
// hecho

// punto 16
class Libreria{
    constructor(libros){
        this.libros = libros
    }

    cargarElementosConLibros(id_destino){
        let container = document.getElementById(id_destino)
        let htmlLibros = ''
        this.libros.forEach(libro => {
            htmlLibros += libro.getHtmlArticle();
        });
        container.innerHTML = htmlLibros
    } 
}
let id_destino = 'libros'
let libros = [libro1, libro2, libro3, libro4];
let libreria = new Libreria(libros);
libreria.cargarElementosConLibros(id_destino)

// punto 17
(new Libreria([libro1, libro2, libro3, libro4])).cargarElementosConLibros('libros');




