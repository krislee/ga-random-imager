const cards = [
    'https://www.trustedtarot.com/img/cards/the-fool.png',
    'https://www.trustedtarot.com/img/cards/the-magician.png',
    'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
    'https://www.trustedtarot.com/img/cards/the-empress.png',
    'https://www.trustedtarot.com/img/cards/the-emperor.png',
    'https://www.trustedtarot.com/img/cards/the-heirophant.png',
    'https://www.trustedtarot.com/img/cards/the-chariot.png',
    'https://www.trustedtarot.com/img/cards/strength.png',
    'https://www.trustedtarot.com/img/cards/the-hermit.png',
    'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
    'https://www.trustedtarot.com/img/cards/justice.png',
    'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
    'https://www.trustedtarot.com/img/cards/death.png',
    'https://www.trustedtarot.com/img/cards/temperance.png',
    'https://www.trustedtarot.com/img/cards/the-tower.png',
    'https://www.trustedtarot.com/img/cards/the-moon.png'
  ]

const $addDiv = $('<div>').addClass('addCard')
const $para = $('<p>').text('Add a card').addClass('para')
$addDiv.append($para)
$('.flex').append($addDiv)

const renderCard = () => {
    const randomNumber = Math.floor(Math.random()*cards.length)
    const $newDiv = $('<div>').addClass('newDivs')
    $newDiv.css('background-image', `url(${cards[randomNumber]})`)
    $('.flex').append($newDiv)
    $newDiv.on('click', (e) => {
        $newDiv.remove()
        //or do e.target.remove()
    })
    // $newDiv.on('click', (e) => {
    //     $newDiv.css('display', 'none')
    //     console.log(e.target)
    //     console.log($newDiv)
    // })
}
$addDiv.on('click', renderCard)






