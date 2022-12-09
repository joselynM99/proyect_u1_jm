function dividir(num1, num2) {
    return num1 / num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function sumar(num1, num2) {
    return  num1 + num2;
    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}

function presionar(n) {
    var resultado = document.getElementById('resultado').value
    if (resultado != '0' || isNaN(n)) document.getElementById('resultado').value = (resultado + n)
    else document.getElementById('resultado').value = n
}
function calcular() {
    var resultado = eval(document.getElementById('resultado').value)
    document.getElementById('resultado').value = resultado
}
function reset() {
    document.getElementById('resultado').value = 0
}

function encender(){
    document.getElementById('foco').src="../images/2.png"
}
function apagar(){
    document.getElementById('foco').src="../images/1.png"
}

function accionar() {
    var ruta = document.getElementById('foco').src
    if (ruta.includes('1.png')) {
        encender()
    }
    else {
        apagar()
    }

}