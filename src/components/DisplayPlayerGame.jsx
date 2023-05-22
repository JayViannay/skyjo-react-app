import { useEffect, useState } from "react";

const DisplayPlayerGame = ({ player, index }) => {
    const [rows] = useState([0, 1, 2]);
    const [cols] = useState([0, 1, 2, 3, 4]);
    const [cards, setCards] = useState(player.cards);

    useEffect(() => { }, [player, cards, setCards]);

    const displayCard = (id) => {
        const currentCardIndex = cards.findIndex((card) => card.id === id);
        const updatedCard = Object.assign({}, cards[currentCardIndex]);
        updatedCard.isVisible = true;
        const newCards = cards.slice();
        newCards[currentCardIndex] = updatedCard;
        setCards(newCards);
    };

    return (
        <div id={player.name}>
            <h3>{player.name}</h3>
            {rows.map((_, x) => (
                <div className="row" key={x}>
                    {cols.map((_, y) => (
                        <div className="col" key={y}>
                            <button onClick={() => displayCard(cards[x * cols.length + y].id)}
                                className={player.isPlaying ? 'btn' : 'btn disabled'}
                                id={cards[x * cols.length + y].id}>
                                <img src={cards[x * cols.length + y].isVisible ? cards[x * cols.length + y].img : '/img/none.png'}
                                    alt="" className="img-fluid" />
                            </button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
};

export default DisplayPlayerGame;