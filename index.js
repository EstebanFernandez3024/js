

container.innerHTML = `<p>POKEMONES</p>`


const tarjetasHtml = POKEMON.pokemon.reduce((acc, elemento, i) => {   

        return acc = acc + `    
            <div class="tarjeta">
                <div class="img-container">
                    <img src=${elemento.img} alt=${elemento.name}>
                </div>   
                <p>
                    ${elemento.name}
                </p> 
                <div>    <p>
                ${elemento.egg}
            </p>  </div> 
            </div>
        
        `       
},"")

console.log(tarjetasHtml)

const contenedorTarjetas = document.querySelector(".contenedor-tarjetas")

console.log(contenedorTarjetas)

contenedorTarjetas.innerHTML = tarjetasHtml