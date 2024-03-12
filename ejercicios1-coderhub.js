function comparadorDeNumeros(num1,num2){
    let number1 = num1;
    let number2 = num2;
    if(typeof number1 !== "number" || typeof number2 !== "number"){
        console.log(`no proporcionaste un numero`);
    }
    else if(number1 > number2){
        console.log(`${number1} es mayor que ${number2}`);
    }
    else if(number1 < number2){
        console.log(`${number1} es menor que ${number2}`);
    }else{
        console.log(`${number1} es igual que ${number2}`);
    }
}

comparadorDeNumeros(1, 2);

function calculadoraDeCalificaciones(qualification){
    if(typeof qualification !== "number"){
        console.log("no proporcionaste una calificacion valida");
    }
    else if(qualification >= 17){
        console.log(`sacaste ${qualification} tu calificacion es A`);
    }
    else if(qualification >= 13){
        console.log(`sacaste ${qualification} tu calificacion es B`);
    }
    else if(qualification >= 10){
        console.log(`sacaste ${qualification} tu calificacion es C`);
    }
    else if(qualification >=7){
        console.log(`sacaste ${qualification} tu calificacion es D`)
    }else{
        console.log(`sacaste ${qualification} tu calificacion es F`)
    }
}
calculadoraDeCalificaciones(18);

function edadParaPension(age){
    if(typeof age !== "number"){
        console.log("no proporcionaste una edad");
    }else if(age >= 55){
        console.log(`tienes ${age} años puedes ser pensionado`)
    } else{
        console.log(`tienes ${age} por ahora no puedes pensionarte`)
    }
}
edadParaPension(60);

function parImpar(num){
    if(typeof num !== "number"){
        console.log("no proporcionaste un numero");
}else if(num % 2 === 0){
    console.log(`${num} es par`)
}else{
    console.log(`${num} es impar`)
}
}
parImpar(3);

function positivoNegativoCero(num){
    if(typeof num !== "number"){
        console.log("no proporcionaste un numero");
}else if(num > 0){
    console.log(`${num} es positivo`);
}else if(num < 0 ){
    console.log(`${num} es negativo`);
}else{
    console.log("tu numero es Cero");
}
}
positivoNegativoCero(1);