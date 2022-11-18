//Creazione degli array con i dati da utilizzare
let costoTypework = [20.50, 15.30, 33.60];
//Ricorda che lo sconto da fare in caso il codice inserito sia corretto è del -- 25% -- del prezzo finale
let codiciSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];



















//=========== FUNZIONI =====================================================

function calcoloCostoFinale(event){
//Evito che submit il suo evento di Default. Perché voglio io definire il suo comportamento
    event.preventDefault();
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.
//Aquisizione del valore dell'elemento select del DOM    
    let inputTypework = document.getElementById("inputTypework2").value;
    console.log("Il valore inserito nel select è: [" + inputTypework + "] che equivale a: [" + costoTypework[inputTypework-1] + "]");

    let inputSconto = document.getElementById("inputDiscountcode2").value.toUpperCase();
    let controlloSconto = false;
    console.log("Il codive inserito è: [" + inputSconto + "]");
//Controllo del Codice Sconto
    for(let i = 0; i < codiciSconto.length; i++){
        if(inputSconto == codiciSconto[i]){
            controlloSconto = true;
        }
    }
    
}


