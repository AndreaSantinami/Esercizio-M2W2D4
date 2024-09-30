import { utenti } from './costanti.js'

let array =[]

for (let i = 0 ; i < utenti.length ; i++){
    if(utenti[i].isAmbassador === true){
        array.push(utenti[i])

    }else{
        continue;
    }
    
}

for(let n = 0 ; n <array.length ; n++){
    let nome_ambassador = document.getElementById("nome_ambassador")
    let paragrafo = document.createElement("p")
    paragrafo.textContent=array[n].name + " " + array[n].lastName
    nome_ambassador.appendChild(paragrafo)

}