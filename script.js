//Creazione degli array con i dati da utilizzare
let costoTypework = [20.50, 15.30, 33.60];
//Ricorda che lo sconto da fare in caso il codice inserito sia corretto è del -- 25% -- del prezzo finale
let codiciSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];





















//=========== FUNZIONI =====================================================

function calcoloCostoFinale(event){
//Evito che submit il suo evento di Default. Perché voglio io definire il suo comportamento
    event.preventDefault();
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.-
//Creazione dell'oggetto --- richiestaLavoro ---
let richistaLavoro = [
    {
        firstName: document.getElementById("inputFirtname4").value,
        lastName: document.getElementById("inputLastname4").value,
        emailAddress: document.getElementById("inputEmail4").value,
        oreRichieste: inputOre,
        tipoDiLavoro: costoTypework[inputTypework-1],
        codiceSconto: document.getElementById("inputDiscountcode2").value.toUpperCase(),
        messaggio: document.getElementById("exampleFormMessage1").textContent
    }
];


//Aquisizione del valore dell'elemento select del DOM    
    let inputTypework = document.getElementById("inputTypework2").value;

    let testoPrezzoFinale = document.getElementById("prezzoFinale");
    
    let costoLavoro = 0;

    let inputOre = parseInt(document.getElementById("inputHours2").value);
//Controllo
    if(Number.isInteger(inputOre)){
        console.log("Il valore inserito nel select è: [" + inputTypework + "] che equivale a: [" + costoTypework[inputTypework-1] + "€]");
        let inputSconto = document.getElementById("inputDiscountcode2").value.toUpperCase();
        let controlloSconto = false;
        console.log("Il codive inserito è: [" + inputSconto + "]");
    //Controllo del Codice Sconto
        for(let i = 0; i < codiciSconto.length; i++){
            if(inputSconto == codiciSconto[i]){
                controlloSconto = true;
            }
        }
        
        costoLavoro = costoTypework[inputTypework-1] * inputOre;
        console.log("Il costo all'ora del lavoro richiesto è: [" + costoLavoro + "€]");

        if(controlloSconto){
            costoLavoro = costoLavoro*0.75;
            console.log("Il prezzo finale scontato è: [" + costoLavoro.toFixed(2) + "€]");
            testoPrezzoFinale.innerHTML = "Il prezzo finale scontato è: " + costoLavoro.toFixed(2) + "€";
        }else if(inputSconto == ""){
            //costoLavoro = costoTypework * inputOre;
            console.log("Il prezzo finale senza sconto è: [" + costoLavoro + "€]");
            testoPrezzoFinale.innerHTML = "Il prezzo finale senza sconto è: " + costoLavoro + "€";
        }else if(!controlloSconto){
            console.log("Hai inserito un codice sbagliato il prezzo finale non sarà scontato: [" + costoLavoro + "€]")
            testoPrezzoFinale.innerHTML = "Hai inserito un codice sbagliato il prezzo finale non sarà scontato: " + costoLavoro + "€";
        }
        
    }else{
        console.log("ERROR: Hai inserito una parola nelle ore richieste!!!!!!!!")
        testoPrezzoFinale.innerHTML = "ERROR: Hai inserito una parola nelle ore richieste!!!!!!!!";
    }

}


