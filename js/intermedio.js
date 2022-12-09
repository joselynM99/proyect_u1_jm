function prueba() {
    /* Declaración de variables */
    var valor = 'valor';
    let valorSRC = document.getElementById('imagen1').src;
    const IVA = 12;
    console.log(valor)
    console.log(IVA)
    console.log(valorSRC)
    if (valorSRC.includes('ec.png')) {

    }

    /*Arreglos*/
    let dias = ["Lunes", "Martes", "Miercoles"]
    console.log(dias)
    dias.push("Jueves")
    console.log(dias)

    /*desestructuracion */
    const diasCompletos = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    const [dia1, dia2, dia3, dia4, preferido, dia6, dia7, dia8] = diasCompletos
    console.log(preferido)
    console.log(dia3)

    const [d1, d2] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    console.log(d1)
    console.log(d2)

    /*Manejo de objetos */
    const joselyn = {
        cedula: '1750958874',
        nombre: 'Joselyn',
        apellido: 'Moncayo',
        edad: 22,
        cuidad: 'Quito'
    }
    console.log(joselyn)

    const persona = {
        cedula: '1750958874',
        nombre: 'Joselyn',
        apellido: 'Moncayo',
        edad: 22,
        cuidad: 'Quito',
        direccion: {
            calle: 'América',
            numero: 'OE12-42D',
            referencia: 'frente a la UCE'
        },
        materia: {
            nombre: 'PWEB',
            creditos: 6
        }
    }
    console.log(persona)

    /** Desestructuracion de objetos*/
    const { cedula, cuidad } = joselyn
    console.log(cedula)
    console.log(cuidad)
    const { materia } = persona
    console.log(materia)
    const { nombre, creditos } = materia
    console.log(nombre)
    console.log(creditos)

    const { edad, cuidad1, hobby } = {
        cedula: '1750958874',
        nombre: 'Joselyn',
        apellido: 'Moncayo',
        edad: 22,
        cuidad: 'Quito',
    }
    console.log(edad)
    console.log(cuidad1)
    console.log(hobby)
    let val = this.funcion2()
    console.log(val)

}

function funcion2() {
    console.log('segunda función')
    return 'valor'
}