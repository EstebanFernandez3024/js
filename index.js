/* //let nombre

//nombre = "Esteban"

//console.log(nombre)

//var edad = "21"

//console.log(`su edad es ${edad}`)

//console.log(` ¡Hola ${nombre}! Su edad es de: ${edad}`)
//alert( ` Error: ${nombre} no puede saltearse la tarea`)

//let apellido = prompt("Hola, ingrese su apellido:")

//alert(`${apellido}: ¡Recuerde leer la documentación!`)

//var numero1 = parseInt(prompt("numero1"))
//var numero2 = parseInt(prompt("numero2"))

//console.log(numero1 + numero2)

//var suma = numero1 + numero2

//console.log(suma*5-1) */


/* var mostrarMensaje = prompt("pone tu nombre")

if (mostrarMensaje === "ari"){
    alert("Bienvenido a mi web")
} else{
    console.log("false")
}


var numero1 = prompt("pone un numero")
var numero2 = prompt("pone otro numero")

if(numero1 > numero2){
    console.log(numero1)
} 
else if(numero1<numero2){
    console.log(numero2)
}

else{
    console.log("false")
} */

 /*  var edad = prompt("pon tu edad")

if(edad >= 15){
    alert("Podes entrar")
}
else{
    alert("no podes ingresar")
}; */


/* for (let i = 20; i >= 0; i--) {
    if (i === 20){
        console.log(`La pagina iniciara en: ${i} horas`)
    }
    else if (i === 10){
        console.log("ya vas por la mitad")
    } else if (i <= 19 && i !== 0){
        console.log(`faltan: ${i} horas`)
    }else if( i === 0){
        console.log("ya puede acceder")
    }       
}
 */

/* desafio entregable 1 */
alert("Siguiendo las indicaciones podras calcular el total a pagar.")
let total = prompt("total a pagar")
let cuotas = prompt("cuotas a pagar")

if(cuotas <= 6){
    alert("5% de recargo" + " =   $ " + total*5/100)
}
else if (cuotas = 12){
    alert("8% de recargo" + " =   $" + total*8/100)
}
else if (cuotas > 12){
    alert("15% de recargo" + " =   $" + total*15/100)
}

let intereses = total*5/100

let preciofinal = total/cuotas + intereses 

alert("te quedaria cuotas de $" + preciofinal)

alert("precio final $" + (total+intereses))
