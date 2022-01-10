cardSuit = ['clubs', 'spades', 'diamonds', 'hearts'];
cardFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
card     = [];


for(i = 0; i < cardFace.length; i++) {
  for(j = 0; j < cardSuit.length; j++) {
    card.push(`<div class="card">
      <div class="card__info">${cardFace[i]}<img src="images/${cardSuit[j]}.svg" alt="${cardSuit[j]}"></div>`);

    if (cardFace[i] === 'J') {
      card.push(`<div class="card--person">
      <img class="person" src="images/jack.svg" alt="${cardSuit[j]}">
      </div>`);
    }
    else if (cardFace[i] === 'Q') {
        card.push(`<div class="card--person">
        <img class="person" src="images/queen.svg" alt="${cardSuit[j]}">
        </div>`);
    }
    else if (cardFace[i] === 'K') {
      card.push(`<div class="card--person">
      <img class="person" src="images/king.svg" alt="${cardSuit[j]}">
      </div>`);
    }
    else if (cardFace[i] === 'A') {
      card.push(`<div class="card--person">
      <img class="person" src="images/${cardSuit[j]}.svg" alt="${cardSuit[j]}">
      </div>`);
    }

    card.push(`<div class="card__info">${cardFace[i]}<img src="images/${cardSuit[j]}.svg" alt="${cardSuit[j]}"></div>
  </div>`);
  }
}


document.write(`<div class="wrapper">${card.join('')}</div>`);
