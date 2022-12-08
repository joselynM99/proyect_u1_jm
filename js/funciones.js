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