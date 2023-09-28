function nombreFuncion(parametro1, parametro2){
    //codigo a ejecutar
}

function multiplicar(num1, num2){
    return num1*num2;
}

var resultado = multiplicar(5,9);
console.log ("El resultado de la multiplicacion es: "+resultado);
alert(resultado);

function saludar(nombre){
    console.log("!Hola "+nombre+ "!");
    alert("!Hola "+nombre+ "!")
}

saludar("Kaiden Woods");

function areacirculo(radio){
    var area = Math.PI * (radio*radio);
    return area;
}

var areacircle = areacirculo(5);
console.log = (areacircle);
alert(areacircle);

function esPar(numero){
    if(numero%2 == 0){
        return true;
    } else {
        return false;
    }
}

var numero = 100;
if(esPar(numero)){
    alert ("El numero es par");
} else {
    alert ("El numero es impar");
}

function determinarSigno(numero2){
    if(numero2>0){
        return "El numero es poitivo";
    } else if (numero2<0){
        return "El numero es negativo";
    } else {
        return "El numero es 0";
    }
}

var numero2 = -7;
var resultado2 = determinarSigno(numero2);
console.log(resultado2);