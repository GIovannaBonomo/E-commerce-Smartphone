 let titolo = document.getElementById("nomeNegozio")
 let titoloOriginale = "Luce di Bellezza"
 let titoloModificato = "La tua bellezza la nostra passione"
    titolo.onclick = function(){
    if (titolo.innerHTML === titoloOriginale){
        titolo.innerHTML = titoloModificato
    }else {
        titolo.innerText = titoloOriginale
    }
    }
let pagina = document.querySelector("body")
let paginaOriginale = "white"
let paginaModificata = "#ffeff1"
    pagina.onmouseenter = function(){
        if ( pagina.style.backgroundColor === paginaOriginale ){
            pagina.style.backgroundColor = paginaModificata
        }else {
            pagina.style.backgroundColor = paginaOriginale
        }
    }
let indirizzo = document.getElementsByClassName("indirizzo")[0]
let indirizzoOriginale= "Via Giacomo Matteotti 2 <br> Modica"
let indirizzoModificato = "Via Grimaldi 10 <br> Ragusa"
    indirizzo.onclick= function(){
        if (indirizzo.innerHTML === indirizzoOriginale){
            indirizzo.innerHTML = indirizzoModificato
        }else{
            indirizzo.innerHTML = indirizzoOriginale
        }
    }
    
function cambiaColore(){
    let link = document.querySelectorAll("a")
     for (let a of link){
         a.classList.add("link")
         console.log ("true")
     }
    }

function rimuoviImg(){
    let image = document.querySelectorAll("img")
     for (let img of image){
         img.classList.add("image")
         console.log ("ho aggiunto la classe",img)
     }
    }

function colorePrezzo(){
    let prezzoRosso= document.getElementsByClassName("prezzo")
        for( let prezzo of prezzoRosso){
            prezzo.classList.add("prezzoRosso")
        }
}
    