const cardArray = [
    {
        name: 'cheeseburger',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/pizza.png'
    }
]

cardArray.sort(()=>0.5-Math.random())
console.log(cardArray)

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

let cardsChosen =[]
let cardsChosenIds =[]
let cardsWon = []

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card = document.createElement('img')
        card.setAttribute('src','https://raw.githubusercontent.com/kubowania/memory-game/master/images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkForMatch,500)
    }
}

function checkForMatch(){
    const cards = document.querySelectorAll('img')

    if(cardsChosenIds[0]==cardsChosenIds[1]){
        alert('You have clicked the same image!')
        cards[cardsChosenIds[0]].setAttribute('src','https://raw.githubusercontent.com/kubowania/memory-game/master/images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src','https://raw.githubusercontent.com/kubowania/memory-game/master/images/blank.png')
    }else if(cardsChosen[0]==cardsChosen[1]){
        alert('You have found a  match!')
        cards[cardsChosenIds[0]].setAttribute('src','https://raw.githubusercontent.com/kubowania/memory-game/master/images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src','https://raw.githubusercontent.com/kubowania/memory-game/master/images/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[cardsChosenIds[0]].setAttribute('src','https://raw.githubusercontent.com/kubowania/memory-game/master/images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src','https://raw.githubusercontent.com/kubowania/memory-game/master/images/blank.png')
        alert('Sorry. try again!')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent=cardsWon.length
    if(cardsWon.length===6){
        resultDisplay.textContent = 'You have won!'
    }
}
createBoard()