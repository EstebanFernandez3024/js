
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


class Formulario{

    constructor(nombre,apellido, edad, domicilio, codigoPostal, ciudad, pais, estadoCivil){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.domicilio=domicilio;
        this.codigoPostal=codigoPostal;
        this.ciudad=ciudad;
        this.pais=pais;
        this.estadoCivil=estadoCivil;
    }
    
}

const formularios = new Formulario("Esteban", "Fernandez", 33, "Rivadavia 3024", 1824, "Buenos Aires","Argentina","solero")
 console.log(formularios);