
// invulveld naam invoeren omhoog

document.querySelector(".knop1").addEventListener("click", function() {
    document.querySelector(".naaminvoeren").style.display = "block";
    document.querySelector('header').style.display = 'none';
})

// naam invoeren + grap

let inputGebruiker = document.querySelector('#input')
let berichtVerschijnen = document.querySelector('#bericht')

function myFunction(){
    document.querySelector('#bericht').style.display ='block'
    document.querySelector('#bericht').style.color ='darkred'

    berichtVerschijnen.innerHTML= 'Sorry ' + inputGebruiker.value + ", deze naam is al bezet. Kies een andere";

    document.querySelector('.knop2').style.display = 'none'; // button laten verdwijnen
    document.querySelector('input').style.display = 'none';
    document.querySelector('h2').style.display = 'none';

    veranderTekst()
}

function veranderTekst(){
    setTimeout(eersteTekst, 1500)
}

function eersteTekst(){
    berichtVerschijnen.innerHTML='Grapje'
    document.querySelector('#bericht').style.color ='white'

    doorgaan()
}

function doorgaan(){
    setTimeout(tweedeTekst, 1500)
}

function tweedeTekst(){
    berichtVerschijnen.innerHTML="Laten we doorgaan, " + inputGebruiker.value + "!";

    document.querySelector('.knop3').style.display ='block'
    document.querySelector('#bericht').style.color ='white'
}
