var display1 = document.calc.display1;
var display2 = document.calc.display2;

var acumulador2 = "";
var text = "";
var acumulador = 0;
var c_sumar = false, c_restar = false, c_multiplicar = false, c_dividir = false;

function escribirNum(num) {
    display2.value = text + num;
    text += num;
}

function borrarC() {
    text = text.slice(0, -1); // funcion para eliminar el ultimo numero
    display2.value = text;
}

function borrarD1() {
    acumulador = 0;
    text = "";
    display2.value = "";
}

function borrarD2() {
    text = "";
    display2.value = text;
}


function option(simbolo) {
    var texto1 = parseFloat(text); // variable para display 1

    if (simbolo == "+") {
        sumar();
    }
    if (simbolo == "-") {
        restar();
    }
    if (simbolo == "*") {
        multiplicar();
    }
    if (simbolo == "/") {
        dividir();
    }
    if (simbolo == '=') {
        if (c_sumar == true) {
            sumar();
        }
        if (c_restar == true) {
            restar();
        }
        if (c_multiplicar == true) {
            multiplicar();
        }
        if (c_dividir == true) {
            dividir();
        }
        acumulador2 = acumulador;
        texto1 = "";
        simbolo = "";
    }

    // Esta condicion sirve para agregar valores al display 1
    if (texto1 != "") {
        if(isNaN(texto1)){ // texto1 == NaN
            acumulador2 = acumulador2 + " " + simbolo;
        } else {
            acumulador2 = acumulador2 + " " + texto1 + " " + simbolo;
        }
        display1.value = acumulador2;
        
    }
    // if ((condicion) && (simbol != "") && (simbol != "=")) {
    //     display1.value = acumulador2;
    //     acumulador2 += simbolo;
    // }

    // if(texto1 != ""){
    //     acumulador2 += " " + texto1 + " " + simbolo;
    //     display1.value = acumulador2;
    // }
    // if((condicion) && (simbol != "") && (simbol != "=")){
    //     display1.value = acumulador2;
    //     acumulador2 = acumulador + simbolo;
    // }
}

function masmenos() {
    if (acumulador === 0) {
        acumulador = parseFloat(text);
    }
    acumulador *= -1;
    display2.value = acumulador;
    text = "";
}













/* Operaciones matematicas basicas */
function sumar() {
    if (text != "") {
        acumulador = acumulador + parseFloat(text);
        display2.value = acumulador;
        text = "";
    }
    c_sumar = true;
    c_restar = false;
    c_multiplicar = false;
    c_dividir = false;
}

function restar() {
    if (text != "") {
        if (acumulador === 0) {
            acumulador = parseFloat(text);
        } else {
            acumulador = acumulador - parseFloat(text);
        }
        display2.value = acumulador;
        text = "";
    }
    c_sumar = false;
    c_restar = true;
    c_multiplicar = false;
    c_dividir = false;
}

function multiplicar() {
    if (text != "") {
        if (acumulador === 0) {
            acumulador = parseFloat(text);
        } else {
            acumulador = acumulador * parseFloat(text);
        }
        display2.value = acumulador;
        text = "";
    }
    c_sumar = false;
    c_restar = false;
    c_multiplicar = true;
    c_dividir = false;
}

function dividir() {
    if (text != "") {
        if (acumulador === 0) {
            acumulador = parseFloat(text);
        } else {
            acumulador = acumulador / parseFloat(text);
        }
        display2.value = acumulador;
        text = "";
    }
    c_sumar = false;
    c_restar = false;
    c_multiplicar = false;
    c_dividir = true;
}