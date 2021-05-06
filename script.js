// Mastermind

var kleuren = ['#fc0303', '#fce703', '#0ffc03', '#03f4fc', '#9803fc', '#fc03b1']
var gevonden = [false, false, false, false];
var antwoord = [];
var raad = [];

AntwoordenRij();

function AntwoordenRij(){
  // AntwoordenRij is grijs gekleurd (tot de juiste kleur geraden wordt, want dan verandert het grijze vakje in de geraden kleur)
  for(var i = 0; i < 4; i++){
    var cel = document.querySelector('#antwoord_kolom' + i);
    //Maak random kleuren combinatie
    var kleur = Math.floor(Math.random() * 6);
    cel.classList.add('onbekend');
    //Zet kleuren in list antwoord
    antwoord.push(kleur);
    //Check
    //alert(kleur);
    }
  // Ga naar functie PogingRij met rijNummer = 1
  PogingRij(1);
}

function PogingRij(rijNummer){
  // Rij voor pogingen toevoegen
  document.querySelector('#tabel').insertAdjacentHTML(
    'beforeend',
    `<div id="rij` + rijNummer + `">
      <div class="kolom" id="rij` + rijNummer + `_kolom0">&nbsp;</div>
      <div class="kolom" id="rij` + rijNummer + `_kolom1">&nbsp;</div>
      <div class="kolom" id="rij` + rijNummer + `_kolom2">&nbsp;</div>
      <div class="kolom" id="rij` + rijNummer + `_kolom3">&nbsp;</div>
      <div class="raad" id="rij` + rijNummer + `_raad">Raad!</div>
    </div>`
  );

  // Voorbereiden om te raden
  for(var i = 0; i < 4; i++){
    if(gevonden[i]){
      var cel = document.querySelector('#rij' + rijNummer + '_kolom' + i);
      cel.setAttribute('style', 'background-color: ' + kleuren[antwoord[i]]);
      raad[i] = antwoord[i];
    }
    else raad[i] = -1;
  }

  // Kleur invullen door op de vakjes te klikken
  var selecteerKleur = function() {
    var kolom = parseInt(this.id.split('_kolom')[1]);
    var nieuweKleur = (raad[kolom] + 1) % 6;
    this.setAttribute('style', 'background-color: ' + kleuren[nieuweKleur]);
    raad[kolom] = nieuweKleur;
  }
}
