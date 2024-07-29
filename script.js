
// pole  s objektama
const cityAndCountry = [ 
{ country : "CZECHIA",
  city: "PRAGUE",
},
{ country: "SLOVAKIA",
city: "BRATISLAVA",
},
{ country: "AUSTRIA",
  city: "VIENNA"
}
];

// funkce na captchu - tahle funkce nahodne vybere jeden z objektu 
function setup () {
    const randomIndex = Math.floor(Math.random() * cityAndCountry.length); // tohle vygenerovava cele cislo mezi 0 a maximalnim poctem objektu v cityAndCountry
 // math.floor zaokrouhluje cisla na cely, a math.random vygeneruje nahodne cislo, mezi 0,1 az 0,9
//tahle funkce vzdy vygeneruje cisla mezi 0 a 2, protoze pokazde co se vygeneruje nahodne cislo treba 0,3454 a vynsobi se bud 0, 1 nebo 2, tak
//vysledek bude vzdy mezi 0 a 2, pokazdy co se obnovi stranka, se vygeneruje jine cislo 

    const selectedCountryAndCity = cityAndCountry[randomIndex]; 
    // vytvori se nova konstatni kde se ulozi vypocet z predesle funkce - ulozeni vybraneho nahodneho paru 

    document.getElementById('captchaQuestion').textContent = selectedCountryAndCity.country;
    // slozena funkce, ktera prepisuje obsah podle id 

    document.getElementById('captchaAnswer').setAttribute('data-corect', selectedCountryAndCity.city);
    // setAttribute -  pridava vlastnost, atributy k ID (jako je name, id,apod
}

// tahle funkce overuje spravnost odpovedi 
function overeniCaptcha () {
    const odpovedUzivatele = document.getElementById('captchaAnswer').value; 
    // do tehle konstatni se ulozi zadanou odpoved uzivatele -value je ulozena hodnota 

    const spravnaOdpoved = document.getElementById('captchaAnswer').getAttribute('data-corect');
    // vytahne hodnoty pridanyho atributu 

    if (odpovedUzivatele.toUpperCase() === spravnaOdpoved) { // odpoved uzivatele se prepise do velkych pismen, protoze jsem je tak ulozila do objektu
        console.log(odpovedUzivatele.toUpperCase())
        console.log(spravnaOdpoved)
        return true;
    } else {
        alert('Incorect answer!');
        return false;
    }
}

document.querySelector('form').addEventListener('submit', function(event) {
    if (overeniCaptcha() === false) {
        event.preventDefault(); // prevent default je predvytvorena funkce ktera zakaze odeslat formular 
    }
});

console.log(setup())