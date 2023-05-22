import React, { useEffect, useState } from 'react';
import './App.css';
import DisplayPlayerGame from './components/DisplayPlayerGame';
import DisplayPile from './components/DisplayPile';

// cards value and quantity
const data = [
  {
    'value': -2,
    'qty': 5
  },
  {
    'value': -1,
    'qty': 10
  },
  {
    'value': 0,
    'qty': 15
  },
  {
    'value': 1,
    'qty': 10
  },
  {
    'value': 2,
    'qty': 10
  },
  {
    'value': 3,
    'qty': 10
  },
  {
    'value': 4,
    'qty': 10
  },
  {
    'value': 5,
    'qty': 10
  },
  {
    'value': 6,
    'qty': 10
  },
  {
    'value': 7,
    'qty': 10
  },
  {
    'value': 8,
    'qty': 10
  },
  {
    'value': 9,
    'qty': 10
  },
  {
    'value': 10,
    'qty': 10
  },
  {
    'value': 11,
    'qty': 10
  },
  {
    'value': 12,
    'qty': 10
  }
];

// set default players
const initialPlayers = [
  { name: 'Robyn', score: 0, cards: [], revealedCards: [], isPlaying : false },
  { name: 'Dodo', score: 0, cards: [], revealedCards: [], isPlaying : false }
];

// class for card 
class Card {
  constructor(value) {
    this.id = 0;
    this.value = value;
    this.isVisible = false;
    this.img = '';
  }
}

// generate cards game 
const createCards = (data) => {
  let id = 0;
  const allCards = [];
  data.forEach(el => {
    for (let i = 0; i < el.qty; i++) {
      id++;
      const card = new Card(el.value);
      card.id = id;
      card.img = `/img/${el.value}.png`;
      allCards.push(card);
    }
  });
  return allCards;
}

// suffle pile card 
const shuffleCards = (data) => {
  return createCards(data).sort((a, b) => 0.5 - Math.random());
}

const App = () => {
  const [players, setPlayers] = useState(initialPlayers);
  const [pile, setPile] = useState(shuffleCards(data));
  const [cardsAreDistributed, setDistributed] = useState(false);

  useEffect(() => {}, [pile, setPile, players, setPlayers]);

  const handleCardsPlayers = () => {
    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < 15; j++) {
        players[i].cards.push(pile[j]);
        players[i].score += pile[j].value;
        setPile((pile) => pile.filter((_, index) => index !== j));
      }
    }
    setDistributed(true);
    updatePlayer();
  }

  const updatePlayer = (index = 0) => {
    const updatedPlayer = Object.assign({}, players[index]);
    updatedPlayer.isPlaying = true;
    const newPlayers = players.slice();
    newPlayers[index] = updatedPlayer;
    setPlayers(newPlayers);
  }

  const displayPile = (id) => {
    const currentCardIndex = pile.findIndex((card) => card.id === id);
    const updatedCard = Object.assign({}, pile[currentCardIndex]);
    updatedCard.isVisible = true;
    const newCards = pile.slice();
    newCards[currentCardIndex] = updatedCard;
    setPile(newCards);
  };

  return (
    <div className="container text-center">
      <h1>Skyjo</h1>
      {cardsAreDistributed ? <DisplayPile card={pile[0]} displayPile={displayPile} /> : ''}
      {cardsAreDistributed ? (
        players.map((player, i) =>
          <DisplayPlayerGame key={i} player={player} index={i} />
        )) : <button onClick={() => handleCardsPlayers()} className='btn btn-primary btn-sm'>Distribuer les cartes</button>

      }
    </div>
  )
}

export default App;