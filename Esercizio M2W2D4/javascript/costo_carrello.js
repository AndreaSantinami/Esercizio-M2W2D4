/* let prezzo= document.getElementById("input_prezzo")
let CosCar= document.getElementById("CosCar") */
let array = []
let prezzo = document.getElementById("input_prezzo"), value
let somma = document.getElementById("CosCar")
let paragrafo = document.createElement("span")

function calcola() {
    prezzo = parseInt(document.getElementById("input_prezzo").value)
    array.push(prezzo)
    console.log(array)
    let n = 0
    

    for (let i = 0; i < array.length; i++) {
         n = array[i] + n

        /*  let CosCar= document.getElementById("CosCar")
         CosCar.textContent=n
     */
        console.log("n - " + n)
        console.log(array[i])
       /*  let somma = document.getElementById("CosCar")
        let paragrafo = document.createElement("span") */
        paragrafo.textContent = n
        paragrafo.id="totale"
        somma.appendChild(paragrafo)
        
    }

}