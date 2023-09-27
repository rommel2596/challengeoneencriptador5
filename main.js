function encriptar() {
    let texto = document.getElementById("text-encriptar").value;

    if(!esAlfanumerico(texto)) {
        alert('Solo se permiten letras y números');
        return;
    }
    texto = texto.toLowerCase();
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
    texto = texto.replaceAll('e', 'enter');
    texto = texto.replaceAll('i', 'imes');
    texto = texto.replaceAll('a', 'ai');
    texto = texto.replaceAll('u', 'ufat');
    texto = texto.replaceAll('o', 'ober');
    document.getElementById("text-desencriptar").value = texto;

}
function desencriptar() {
    let texto = document.getElementById("text-encriptar").value;
    if(!esAlfanumerico(texto)) {
        alert('Solo se permiten letras y números');
        return;
    }
    texto = texto.replaceAll('ober', 'o');
    texto = texto.replaceAll('ufat', 'u');
    texto = texto.replaceAll('ai', 'a');
    texto = texto.replaceAll('imes', 'i');
    texto = texto.replaceAll('enter', 'e');
    document.getElementById("text-desencriptar").value = texto;
}

function esAlfanumerico(str) {
    return str.match(/^[a-zA-Z0-9]+$/) !== null;
}

function copiar() {
    navigator.clipboard.writeText(document.getElementById("text-desencriptar").value);
}