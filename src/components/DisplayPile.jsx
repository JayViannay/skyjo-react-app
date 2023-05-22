import { useEffect, useState } from "react";

const DisplayPile = ({ cards, displayPile }) => {
    const [currentIndexCard, setCurrentIndexCard] = useState(0);
    const [nextIndexCard, setNextIndexCard] = useState(1);
    const [prevIndexCard, setPrevIndexCard] = useState(0);

    useEffect(() => { }, [cards, currentIndexCard, nextIndexCard]);

    const handlePile = () => {
        displayPile(cards[prevIndexCard === 0 ? prevIndexCard : currentIndexCard].id);
        setPrevIndexCard(currentIndexCard);
        setCurrentIndexCard(nextIndexCard);
        setNextIndexCard(nextIndexCard + 1 < 120 ? nextIndexCard + 1 : alert('fin de pioche'));
    }

    return (
        <div className="row">
            <div className="col-3 my-3 mx-auto">
                <button onClick={() => handlePile()} className="btn" id={cards[prevIndexCard].id}
                    value={cards[prevIndexCard].value}>
                    <img src='/img/none.png' alt="" className="img-fluid" />
                </button>
            </div>
            <div className="col-3 my-3 mx-auto">
                <img src={cards[currentIndexCard].img} alt="" className="img-fluid" />
            </div>
        </div>
    )
}

export default DisplayPile;