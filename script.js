// algemeen ------------------------------------------------------------------------------------------------------------------------------------------------------------

const zwarteAchtergrond = document.querySelector('.zwarteachtergrond')
const titelsSpelen = document.querySelector('header div')
const paginaSpelen = document.querySelector('.spelenpagina')
const confetti = document.querySelector('.confetti')
const spelLaden = document.querySelector('.spelladen')
const klikOpKnop = new Audio ('./audio/buttonpress.mp3') // bron geluid https://pixabay.com/sound-effects/notification-for-game-scenes-132473/ 
const gameLadenGeluid = new Audio ('./audio/lasercharging.mp3') // bron geluid https://pixabay.com/sound-effects/062708-laser-charging-81968/
const spelerGekozenGeluid = new Audio ('./audio/teleport.mp3') // bron geluid https://pixabay.com/sound-effects/teleport-90137/
const spookyMuziekAfspelen = document.querySelector('header p') 
const spookyMuziekGeluid = new Audio ('./audio/scarymusic.mp3') // bron geluid https://pixabay.com/sound-effects/scary-music-box-for-spooky-scenes-165983/
const kiesToets = document.querySelector('.toetsen')
const afbeeldingGebruikerkeuze = document.querySelector('.gebruikerkeuze')
const volgendeKnop = document.querySelector('.volgendeknop')

zwarteAchtergrond.style.display = 'none';
titelsSpelen.style.display = 'none';
paginaSpelen.style.display = 'none';
confetti.style.display = 'none';
spelLaden.style.display = 'none';
kiesToets.style.display = 'none';
afbeeldingGebruikerkeuze.style.display = 'none'
volgendeKnop.style.display = 'none'

// wanneer je op een knop klikt, geluid dat afspeelt
function opKnopKlikken(){
    klikOpKnop.play()
    klikOpKnop.volume = 0.07; // bron volume veranderen leren toepassen https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume
}

// algemeen ------------------------------------------------------------------------

// ------------------------------beginpagina-------------------------------------------------------------------------------------------------------------------------

const titelIndex = document.querySelector('header section')
const startKnop = document.querySelector('header section button')
const gamenaamTekst = document.querySelector('.gamenaaminvoeren')
const audioRockMuziek = new Audio ('./audio/rockintro.mp3') // bron geluid https://pixabay.com/sound-effects/yeah-18130/

// knop enge muziek afspelen beginpagina
// gekozen voor een knop want: https://datanews.knack.be/nieuws/google-chrome-gaat-strijd-aan-met-websites-die-uit-zichzelf-geluid-beginnen-afspelen/
let muziekStarten = true;

spookyMuziekAfspelen.addEventListener('click', () => {
    if (muziekStarten){
        muziekStarten = false;

        spookyMuziekGeluid.play()
        spookyMuziekGeluid.volume = 0.4;
        spookyMuziekAfspelen.style.backgroundColor = 'rgb(1,237,143)';
    } else{
        muziekStarten = true;
        
        spookyMuziekGeluid.pause()
        spookyMuziekAfspelen.style.backgroundColor = 'rgb(233,51,153)';
    } 
})

startKnop.addEventListener('click', () => {
    opKnopKlikken()
    audioRockMuziek.play()
    audioRockMuziek.volume = 0.5;
    spookyMuziekGeluid.pause();

    gamenaamTekst.style.display = 'block';
    titelIndex.style.display = 'none';
    zwarteAchtergrond.style.display = 'block';
})

// ------------------------------beginpagina-------------------------------------------------------------------------------------------------------------------------

// -----------------------naam indienen + grap-----------------------------------------------------------------------------------------------------------------

const naamGebruiker = document.querySelector('input')
const berichtVerschijnen = document.querySelector('.gamenaaminvoeren p')
const knopIndienen = document.querySelector('.gamenaaminvoeren button')
const titelAllereerst = document.querySelector('.gamenaaminvoeren section h2')

document.body.addEventListener('keydown', (ev) => {
    if (ev.key === "Enter"){ // bron keyboardevents leren gebruiken https://www.youtube.com/watch?v=Q3ktcptd2yI
        klikOpIndienen();
    }
})

knopIndienen.addEventListener("click", klikOpIndienen)

function klikOpIndienen() {
    opKnopKlikken()
    berichtVerschijnen.style.display = 'block';
    berichtVerschijnen.style.color = 'red';
    berichtVerschijnen.textContent= `Sorry ${naamGebruiker.value}, deze naam is al bezet. Kies een andere`; // bron template strings leren gebruiken https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    knopIndienen.style.display = 'none';
    naamGebruiker.style.display = 'none';
    titelAllereerst.style.display = 'none';

    // reeks teksten laten verschijnen en verdwijnen
    setTimeout(() => {
        berichtVerschijnen.textContent = 'Grapje';
        berichtVerschijnen.style.color = 'white';
        berichtVerschijnen.classList.add('grapje'); // bron classlist leren gebruiken https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

        setTimeout(() => {
            berichtVerschijnen.textContent = `Laten we doorgaan, ${naamGebruiker.value}!`;
            volgendeKnop.style.display = 'block';
            berichtVerschijnen.classList.remove('grapje');
        }, 1500);
    }, 1500);
}

// -----------------------naam indienen + grap-------------------------------------------------------------------------------------------------------

// ------------------------speler kiezen--------------------------------------------------------------------------------------------------------------------

const characterKiezen = document.querySelector('.characterkiezen');
const alleSpelers = document.querySelectorAll('.characterkiezen img');
const gekozenCharacter = document.getElementById('charactergebruiker');

characterKiezen.style.display = 'none';

volgendeKnop.addEventListener("click", () => {
    opKnopKlikken();
    titelIndex.style.display = 'none';
    gamenaamTekst.style.display = 'none';
    volgendeKnop.style.display = 'none';
    characterKiezen.style.display ='block';
})

// Op speler klikken
alleSpelers.forEach(speler => {
    speler.addEventListener('click', () => {
        gekozenCharacter.src = `./images/${speler.id}.png`;

        gameLadenGeluid.play();
        gameLadenGeluid.volume = 0.5;
        spelerGekozenGeluid.play();
        spelerGekozenGeluid.volume = 0.5;

        characterKiezen.style.display ='none';
        spelLaden.style.display = 'block';

        setTimeout(spelSpelen, 4000);
    })
})

// ------------------------speler kiezen--------------------------------------------------------------------------------------------------------------------

// ------------------------------spel spelen-------------------------------------------------------------------------------------------------------------------

const achtergrondMuziekje = new Audio('./audio/achtergrondmuziek.mp3') // https://pixabay.com/sound-effects/game-music-loop-6-144641/

function spelSpelen(){
    zwarteAchtergrond.style.display = 'none';
    titelsSpelen.style.display = 'block';
    paginaSpelen.style.display = 'flex';
    kiesToets.style.display = 'block';

    // achtergrondmuziek Rock
    audioRockMuziek.pause()
    achtergrondMuziekje.loop = true; // bron https://gist.github.com/thebigbad/878907
    achtergrondMuziekje.play();
    achtergrondMuziekje.volume = 0.4;

    const afbeeldenNaamGebruiker = document.querySelector('.spelenpagina h3') 
    afbeeldenNaamGebruiker.textContent =`${naamGebruiker.value}`;

    const achtergrondAfbeelding = document.querySelector('body'); // achtergrondafbeelding bron https://unsplash.com/photos/two-arcade-cabinets-zpxKdH_xNSI
    achtergrondAfbeelding.style.backgroundImage = 'url(./images/arcade.png)';

    // chatGPT 
    // ik kwam er niet uit hoe ik anders de toetsen aan de afbeeldingen moest linken
    const keuzeKeys = {
        's': 'schaar',
        'r': 'steen',
        'p': 'papier'
    }

    document.body.addEventListener('keydown', (ev) => {
        const keuze = keuzeKeys[ev.key];
        if (keuze){
            afbeeldingGebruikerkeuze.src = afbeeldingen[keuze];
            spelen(keuze);
        }
    })
}

// tekst instructies spel spelen laten knipperen----------------------------------------------------------------------

setInterval( () => { 
    if (kiesToets.style.visibility === 'hidden') { // chatGPT heeft me geholpen met de term visibility, display block werkt niet
        kiesToets.style.visibility = 'visible';
    } else {
        kiesToets.style.visibility = 'hidden';
    }
}, 1750)

// klikken op keuze steen papier schaar, werkelijk spelen ------------------------------------------------------------

const afbeeldingenOpties = document.querySelectorAll('#steen, #papier, #schaar');
const computerAfbeelding = document.querySelector('.optiescomputer div img')
const resultaat = document.querySelector('header div h2')
const audioPartyHorn = new Audio('./audio/partyhorn.mp3') // bron https://pixabay.com/sound-effects/party-horn-68443/

computerAfbeelding.style.display = 'none'

const afbeeldingen = { // bron object leren toepassen https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
    steen: "./images/rock.png",
    papier: "./images/papier.jpeg",
    schaar: "./images/schaar.png"
}

// klikken op afbeelding
afbeeldingenOpties.forEach(afbeeldingOptie => {
    afbeeldingOptie.addEventListener('click', () => {
        const keuze = afbeeldingOptie.id;
        spelen(keuze);
        afbeeldingGebruikerkeuze.src = afbeeldingen[keuze];
    })
})

function spelen(gebruikerKeuze){
    afbeeldingGebruikerkeuze.style.display = 'block';
    computerAfbeelding.style.display = 'block';
    computerAfbeelding.src = './images/loading.gif';

    setTimeout(() => {
        const randomKeuze = randomKeuzeGenereren();
        computerAfbeelding.src = afbeeldingen[randomKeuze];
        
        // resultaat
        if (gebruikerKeuze === randomKeuze){
            resultaat.textContent = 'Gelijkspel';
        } else if ((gebruikerKeuze === 'steen' && randomKeuze === 'schaar') || (gebruikerKeuze === 'papier' && randomKeuze === 'steen') || (gebruikerKeuze === 'schaar' && randomKeuze === 'papier')){
            
            // confetti & partyhorn
            setTimeout(() => {
                confetti.style.display = 'none';
                },1500);
                    confetti.style.display = 'block';
                    audioPartyHorn.play();
                    resultaat.textContent = 'Gefeliciteerd, je hebt gewonnen!';
                    scoreBordToenemen();
        } else {
            const audioError = new Audio('./audio/error.mp3');
            audioError.play();
            resultaat.textContent = 'Jammer, je hebt verloren :(';
            scoreBordAfnemen();
        }
    }, 600);
}

const keuzes = ["steen", "papier", "schaar"];

function randomKeuzeGenereren(){
    const randomIndex = Math.floor(Math.random() * 3);

    // chatGPT
    // ik wist niet hoe ik anders de random gegenereerde keuze 'terug kon geven'
    return keuzes[randomIndex];
}

// scoreboard-----------------------------------------------------------

const scoreTekst = document.querySelector('header div p')
let score = 0

function scoreBordToenemen(){
    scoreTekst.style.display = 'block';
    score = score + 1;
    scoreTekst.textContent = `Jouw score: ${score}`; 
}

function scoreBordAfnemen(){
    scoreTekst.style.display = 'block';
    score = score - 1;
    scoreTekst.textContent = `Jouw score: ${score}`; 
}

// -----------------------------------spel spelen--------------------------------------------------------------------------------------------------------------------------------