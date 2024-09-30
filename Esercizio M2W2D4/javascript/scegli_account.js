import { utenti } from './costanti.js'
let account = document.getElementById("account")
let aggiungi = document.createElement("button")

for (let i = 0; i < utenti.length; i++) {
    let account = document.getElementById("account")
    let aggiungi = document.createElement("button")
    aggiungi.textContent = utenti[i].name
    aggiungi.onclick = function () {
        console.log(aggiungi.textContent) //vedere il nome del pulsante
        let nome_utente = document.getElementById("NoUt")   //
        let agg_nome = document.createElement("span")       // 
        agg_nome.textContent = aggiungi.textContent          // 
        nome_utente.appendChild(agg_nome)                   // aggiunge il nome 

        /* voglio aggiungere al paragrafo NoUt uno span con il nome del bottone
        cliccato, di conseguenza calcolare il totale del carrello,
        se c'è o meno il costo di spedizione e lo sconto applicato
        in caso fosse ambassador */

        /* for (let n = 0; n < utenti.length; n++) {
            if (aggiungi.textContent === utenti[i].name) {
                if (utenti[i].isAmbassador === true) {
                    console.log(" si sconto")
                } else {
                    console.log(" no sconto")
                }

            }
        } */

        let prezzo = ""
        let spedizione =document.getElementById("CosSpe")
        if (aggiungi.textContent === utenti[i].name) {
            if (utenti[i].isAmbassador === true) {
                console.log(" si sconto")
                //voglio che in id totale venga calcolato il totale prendendo il 
                // numero da CosCar e metterci lo sconto
                // come riprendere il contenuto dentro lo span creato?
                let totale = document.getElementById("tot")
                let aggiunta = document.createElement("span")
                prezzo = parseInt(document.getElementById("input_prezzo").value)
                aggiunta.textContent= prezzo - ((prezzo *30) /100)
                totale.appendChild(aggiunta)
                console.log(prezzo)
                if (prezzo >= 100) {
                    console.log("no spedizione")
                    let agg_sped = document.createElement("span")
                    agg_sped.textContent = "Spedizione Gratuita"
                    spedizione.appendChild(agg_sped)
                } else {
                    console.log("si spedizione")
                    aggiunta.textContent = prezzo - ((prezzo *30) /100) + 50
                    let agg_sped = document.createElement("span")
                    agg_sped.textContent = "50"
                    spedizione.appendChild(agg_sped)

                }
            } else {
                console.log(" no sconto")
                let totale = document.getElementById("tot")
                let aggiunta = document.createElement("span")
                prezzo = parseInt(document.getElementById("input_prezzo").value)
                aggiunta.textContent= prezzo
                totale.appendChild(aggiunta)
                console.log(prezzo)
                if (prezzo >= 100) {
                    console.log("no spedizione")
                    let agg_sped = document.createElement("span")
                    agg_sped.textContent = "Spedizione Gratuita"
                    spedizione.appendChild(agg_sped)
                } else {
                    console.log("si spedizione")
                    aggiunta.textContent = prezzo  + 50
                    let agg_sped = document.createElement("span")
                    agg_sped.textContent = "50"
                    spedizione.appendChild(agg_sped)

                }
            }
        }

    }
    account.appendChild(aggiungi)
}