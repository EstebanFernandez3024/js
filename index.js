
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
