// Mastermind

var kleuren = ['#fc0303', '#fce703', '#0ffc03', '#03f4fc', '#9803fc', '#fc03b1']
var antwoord = [];

AntwoordenRij();

function AntwoordenRij(){
  // AntwoordenRij is grijs gekleurd tot de juiste kleur geraden wordt, want dan verandert het grijze vakje in de geraden kleur
    for(var i = 0; i < 4; i++){
        var cel = document.querySelector('#antwoord_kolom' + i);
        //Maak random kleuren combinatie
        var kleur = Math.floor(Math.random() * 6);
        cel.classList.add('onbekend');
        //Zet kleuren in list antwoord
        antwoord.push(kleur);
        //Check
        alert(kleur);
    }
    //Ga naar functie PogingRij
    PogingRij(1);
}

function PogingRij(rijNummer){
    // Rij voor poging toevoegen + Raad! knopje maken
    document.querySelector('#tabel').insertAdjacentHTML('beforeend')
}
