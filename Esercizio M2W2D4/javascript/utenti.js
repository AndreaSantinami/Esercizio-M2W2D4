import { utenti } from './costanti.js'
import { marco } from './costanti.js'
import { paul } from './costanti.js'
import { amy } from './costanti.js'
import { andrea } from './costanti.js'

console.log(utenti)
console.log("-------------")
console.log(marco)
console.log(paul)
console.log(amy)
console.log(andrea)
//ricordare come fare .push per un array ed aggiungerci gli oggetti
//utilizzato un arrey creato con dentro gli oggetti file constanti.js

for (let i = 0; i < utenti.length; i++) {
    if (utenti[i].isAmbassador === true) {
        console.log(utenti[i].name + " è Ambassador")
        let nome = document.getElementById("nome_utenti")
        let paragrafo = document.createElement("p")
        paragrafo.textContent = utenti[i].name + " è ambassador"
        nome.appendChild(paragrafo)


    } else {
        console.log(utenti[i].name + " non è Ambassador")
        let nome = document.getElementById("nome_utenti")
        let paragrafo = document.createElement("p")
        paragrafo.textContent = utenti[i].name + " non è ambassador"
        nome.appendChild(paragrafo)

    }
}




