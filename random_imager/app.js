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

//Make black div 
const $addDiv = $('<div>').addClass('addCard')
const $para = $('<p>').text('Add a card').addClass('para')
$addDiv.append($para)
$('.flex').append($addDiv)

//Add new image to array
$('button').on('click', () => {
  const $input = $('[name="imgURL"]')
  if($input.val()){
    cards.push($input.val())
    $input.val('')
  } else {
    alert('Input an image URL')
  }
})

//Add image to div.flex but will remove the image from the array after it is done so it doesn't
//get reused later & added an alt attribute
const tarot = () => {
  if(cards.length>0){
    const randomNum = Math.floor(Math.random()*cards.length)
    // const alt = cards[randomNum].slice(39,-4)
    // const $img = $('<img>').attr('src', `${cards[randomNum]}`).attr('alt',`${alt}`)
    const arrayAlt = cards[randomNum].split('/')
    const alt = arrayAlt[arrayAlt.length-1].slice(0,-4)
    let newAlt
    if(alt.includes('-')) {
      newAlt = alt.replace(/-/gi," ")
    } else {
      newAlt = alt
    }
    const $img = $('<img>').attr('src', cards[randomNum]).attr('alt',`${newAlt}`)
    $('.flex').append($img)
    $img.on('click', () => {
      $img.remove()
    })
    cards.splice(randomNum,1)
    console.log(cards)
  }
}

$addDiv.on('click', tarot)





