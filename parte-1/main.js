// punto 1
// listo


// punto 2
class Libro {
    constructor(autor, titulo){
        this.autor = autor
        this.titulo = titulo
    }
    // punto 3
    mostraDatosEnConsola(){
        console.log(`${this.titulo}, de ${this.autor.toUpperCase()}`)
    }

    // punto 4
    mostraDatosEnAlert(){
        alert(`${this.titulo}, de ${this.autor.toUpperCase()}`)

    }

    // punto 5
    getTitulo(){
        return this.titulo
    }

    // punto 6
    mostrarDAtos(mostrar){
        if (mostrar === 'alert') {
            this.mostraDatosEnAlert()
        }else if (mostrar === 'console') {
            this.mostraDatosEnConsola()
        }else{
            this.mostraDatosEnConsola()
        }
    }
}

// ... punto 2
const unLibro = new Libro ('Dan Brown', 'Angeles y Demonios')
console.log(unLibro)

// ... punto 3
unLibro.mostraDatosEnConsola()

// ... punto 4
unLibro.mostraDatosEnAlert()

// ... punto 5
let nuevolibro = new Libro('George R. R. Martin', 'Fuego y Sangre');
let tituloDelNuevoLibro = nuevolibro.getTitulo();
alert(tituloDelNuevoLibro)

// ... punto 6
nuevolibro.mostrarDAtos('console')


