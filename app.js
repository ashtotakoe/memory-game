const scoreDisplay = document.getElementById('result')
const attemptDisplay = document.getElementById('attempt')

const cardArray = [
    {
        name: 'fries',
        img: 'assets/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'assets/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'assets/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'assets/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'assets/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'assets/pizza.png'
    },
    {
        name: 'fries',
        img: 'assets/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'assets/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'assets/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'assets/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'assets/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'assets/pizza.png'
    },
     

]
let chozenCards = []
let chozenCardsIds = []
let cardsWon = []
let attempt = 0
cardArray.sort(() => 0.5 - Math.random())



const createBoard = () =>{
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'assets/blank.png')
        card.setAttribute('data-id', i)
        gridDisplay.append(card)
        card.addEventListener('click', flipCard)
                
    }
}

const gridDisplay = document.querySelector('#grid')

createBoard()




function flipCard(){
    
    let cardId = this.getAttribute('data-id')
    chozenCards.push(cardArray[cardId].name)
    chozenCardsIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (chozenCards.length === 2){
        setTimeout(checkMatch, 500)
        
    }
   
}

let count = 0
function checkMatch(){
    attemptDisplay.innerHTML = ++attempt
    const cards = document.querySelectorAll('#grid img')
    console.log(cards)

    if(chozenCardsIds[0] === chozenCardsIds[1]){
        alert('Same card!')
        cards[chozenCardsIds[0]].setAttribute('src', 'assets/blank.png')
        cards[chozenCardsIds[1]].setAttribute('src', 'assets/blank.png')
    }
    else {
        if(chozenCards[0] === chozenCards[1]){
            scoreDisplay.innerHTML = ++count
            cards[chozenCardsIds[0]].setAttribute('src', 'assets/white.png')
            cards[chozenCardsIds[1]].setAttribute('src', 'assets/white.png')
            cards[chozenCardsIds[0]].removeEventListener('click', flipCard)
            cards[chozenCardsIds[1]].removeEventListener('click', flipCard)
            cardsWon.push(chozenCards)
        }else{
        
            cards[chozenCardsIds[0]].setAttribute('src', 'assets/blank.png')
            cards[chozenCardsIds[1]].setAttribute('src', 'assets/blank.png')
        
        }
    }

    

    chozenCardsIds = []
    chozenCards = []

    if (cardsWon.length === cardArray.length / 2){
        alert('You won')
    }

}

