console.log('cargado');

let idDeck = "";
let API = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';



let remainingCards = document.querySelector('.remaining-cards');
const card = document.getElementById('random-card');
const btnPlay = document.getElementById('btn-play');

btnPlay.addEventListener('click', function(){
    if(idDeck !== ""){
        API = 'https://deckofcardsapi.com/api/deck/'+idDeck+'/draw/?count=1';
    } 
    fetchData(API)
})


async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    idDeck = data.deck_id;
    loadData(data);
}

function loadData(data) {
    remainingCards.innerHTML = "Cartas restantes: "+data.remaining;
        console.log(data.deck_id);
        console.log(data.remaining);
        console.log(data.cards[0]);        
        card.src = data.cards[0].image;
}

document.addEventListener('DOMContentLoaded', fetchData(API))


    