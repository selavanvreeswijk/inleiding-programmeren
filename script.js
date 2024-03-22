// vóór begin spel

const zwarteAchtergrond = document.querySelector('.zwarteachtergrond')
const titelSpelen = document.querySelector('header div')
const paginaSpelen = document.querySelector('.spelenpagina')
const confetti = document.querySelector('.confetti')
const spelLaden = document.querySelector('.spelladen')

zwarteAchtergrond.style.display = 'none';
titelSpelen.style.display = 'none';
paginaSpelen.style.display = 'none';
confetti.style.display = 'none';
spelLaden.style.display = 'none';

// ------------------------------naam invoeren--------------------------------

// invulveld naam invoeren omhoog

const gamenaamTekst = document.querySelector('.gamenaaminvoeren')
const titelIndex = document.querySelector('header section')
const startKnop = document.querySelector('header section button')

startKnop.addEventListener('click', function(){
    gamenaamTekst.style.display = 'block';
    titelIndex.style.display = 'none';
    zwarteAchtergrond.style.display = 'block';
})

// ------------------------------naam invoeren--------------------------------

// -----------------------naam invoeren + grap------------------------

const naamGebruiker = document.querySelector('input')
const berichtVerschijnen = document.querySelector('.gamenaaminvoeren p')
const knopIndienen = document.querySelector('.gamenaaminvoeren button')
const titelAllereerst = document.querySelector('.gamenaaminvoeren section h2')
const volgendeKnop = document.querySelector('.volgendeknop')

knopIndienen.addEventListener("click", function(){
    berichtVerschijnen.style.display = 'block';
    berichtVerschijnen.style.color = 'red';
    berichtVerschijnen.textContent= 'Sorry ' + naamGebruiker.value + ", deze naam is al bezet. Kies een andere";
    knopIndienen.style.display = 'none';
    naamGebruiker.style.display = 'none';
    titelAllereerst.style.display = 'none'

    veranderTekst()
})

// reeks teksten laten verschijnen en verdwijnen

function veranderTekst(){ 
    setTimeout(eersteTekst, 1500)
}

function eersteTekst(){
    berichtVerschijnen.textContent='Grapje';
    berichtVerschijnen.style.color = 'white';
    berichtVerschijnen.classList.add('grapje');

    doorgaan();
}

function doorgaan(){
    setTimeout(tweedeTekst, 1500)
}
function tweedeTekst(){
    berichtVerschijnen.textContent="Laten we doorgaan, " + naamGebruiker.value + "!";
    berichtVerschijnen.style.color = 'white';

    volgendeKnop.style.display ='block';
    berichtVerschijnen.classList.remove('grapje');
}

// -----------------------naam invoeren + grap------------------------

// ------------------------character kiezen---------------------------

const characterKiezen = document.querySelector('.characterkiezen')
const characterLevi = document.querySelector('#levi')
const characterEren = document.querySelector('#eren')
const characterHange = document.querySelector('#hange')
const gekozenCharacter = document.querySelector('#charactergebruiker')

characterKiezen.style.display ='none';

volgendeKnop.addEventListener("click", function(){ 
    titelIndex.style.display = "none";
    gamenaamTekst.style.display = "none";
    volgendeKnop.style.display ='none';
    characterKiezen.style.display ='block';
})

characterLevi.addEventListener('click', function(){
    gameLaden()
    gekozenCharacter.src = './images/levi.png';
})

characterEren.addEventListener('click', function(){
    gameLaden()
    gekozenCharacter.src = './images/eren.png';
})

characterHange.addEventListener('click', function(){
    gameLaden()
    gekozenCharacter.src = './images/hange.png';
})

function gameLaden(){
    characterKiezen.style.display ='none';
    spelLaden.style.display = 'block';

    setTimeout(spelSpelen, 3500);
}

// ------------------------character kiezen---------------------------

// ------------------------------spel spelen--------------------------

function spelSpelen(){
    zwarteAchtergrond.style.display = 'none';
    titelSpelen.style.display = 'block';
    paginaSpelen.style.display = 'flex';

    const afbeeldenNaamGebruiker = document.querySelector('.optiesspel h3') 
    afbeeldenNaamGebruiker.textContent = naamGebruiker.value;

    const achtergrondAfbeelding = document.querySelector('body'); // achtergrondafbeelding bron https://unsplash.com/photos/two-arcade-cabinets-zpxKdH_xNSI
    achtergrondAfbeelding.style.backgroundImage = 'url(../images/gameroom.jpg)';
}

const klikOpKeuze = document.querySelector('.spelenpagina section p')

// tekst laten knipperen

setInterval(function() { 
    if (klikOpKeuze.style.visibility === 'hidden') { // chatGPT heeft me geholpen met de term visibility
        klikOpKeuze.style.visibility = 'visible';
    } else {
        klikOpKeuze.style.visibility = 'hidden';
    }
}, 1500)

// klikken op keuze steen papier schaar, werkelijk spelen

const afbeeldingSteen = document.querySelector('#steen')
const afbeeldingPapier = document.querySelector('#papier')
const afbeeldingSchaar = document.querySelector('#schaar')
const computerAfbeelding = document.querySelector('#computerkeuze')
const resultaat = document.querySelector('header div h2')
const afbeeldingGebruikerkeuze = document.querySelector('.gebruikerkeuze')

afbeeldingGebruikerkeuze.style.display = 'none'
computerAfbeelding.style.display = 'none'

const afbeeldingen = {
    steen: "./images/rock.png",
    papier: "./images/papier.jpeg",
    schaar: "./images/schaar.png"
}

afbeeldingSteen.addEventListener('click', function(){
    spelen('steen');
    afbeeldingGebruikerkeuze.style.display = 'block';
    afbeeldingGebruikerkeuze.src = afbeeldingen.steen;
})

afbeeldingPapier.addEventListener('click', function(){
    spelen('papier');
    afbeeldingGebruikerkeuze.style.display = 'block';
    afbeeldingGebruikerkeuze.src = afbeeldingen.papier;
})

afbeeldingSchaar.addEventListener('click', function(){
    spelen('schaar');
    afbeeldingGebruikerkeuze.style.display = 'block';
    afbeeldingGebruikerkeuze.src = afbeeldingen.schaar;
})

function getRandomKeuze(){ 
    const keuzes = ["steen", "papier", "schaar"];
    const randomIndex = Math.floor(Math.random() * 3);
    return keuzes[randomIndex]; // hier heeft ChatGPT me bij geholpen
}

function spelen(gebruikerKeuze) {
    computerAfbeelding.style.display = 'block'
    computerAfbeelding.src = "./images/loading.gif"; // loading gif bron https://www.google.com/search?q=loading+gif+png&tbm=isch&ved=2ahUKEwiR3KDg-4SFAxXUj_0HHQfyC-oQ2-cCegQIABAA&oq=loading+gif+png&gs_lp=EgNpbWciD2xvYWRpbmcgZ2lmIHBuZzIFEAAYgAQyBBAAGB4yBBAAGB4yBBAAGB4yBBAAGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB4yBhAAGAUYHjIGEAAYBRgeSN0ZUOMCWJcWcAZ4AJABAJgBOaAB5QKqAQE3uAEDyAEA-AEBigILZ3dzLXdpei1pbWfCAgoQABiABBiKBRhDwgIGEAAYBxgewgIHEAAYgAQYE8ICCBAAGAUYHhgTwgIIEAAYCBgeGBOIBgE&sclient=img&ei=v_P7ZdGADNSf9u8Ph-Sv0A4&bih=732&biw=1512&prmd=ivnbz&rlz=1C5MACD_enNL1064NL1064#imgrc=9rvBEbPXvUM4PM

    setTimeout(function(){
        const computerKeuze = getRandomKeuze();
        computerAfbeelding.src = afbeeldingen[computerKeuze];
        bepaalResultaat(gebruikerKeuze, computerKeuze);
    }, 600);
}

function bepaalResultaat(gebruikerKeuze, computerKeuze) {
    if (gebruikerKeuze === computerKeuze) {
        resultaat.textContent = 'Gelijkspel!';
    } else if ((gebruikerKeuze === "steen" && computerKeuze === "schaar") || (gebruikerKeuze === 'papier' && computerKeuze === 'steen') || (gebruikerKeuze === 'schaar' && computerKeuze === "papier")) {
        confetti.style.display = "block";
        setTimeout(confettiWeg, 1500);
        scoreBordToenemen()
        resultaat.textContent = "Gefeliciteerd, je hebt gewonnen!";
    } else {
        let audioError = new Audio('./audio/error.mp3')
        audioError.play();

        resultaat.textContent = "Jammer, je hebt verloren :(";
        scoreBordAfnemen()
    }
}

// confetti

function confettiWeg() {
    confetti.style.display = "none";
}

// scoreboard

let scoreTekst = document.querySelector('header div p')
let score = 0

function scoreBordToenemen(){
    scoreTekst.style.display = "block";
    score = score + 1;
    scoreTekst.textContent = 'Jouw score: ' + score; 
}

function scoreBordAfnemen(){
    scoreTekst.style.display = "block";
    score = score - 1;
    scoreTekst.textContent = 'Jouw score: ' + score; 
}

// -----------------------------------spel spelen---------------------------------------