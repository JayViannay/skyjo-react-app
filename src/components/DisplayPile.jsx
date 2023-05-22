const DisplayPile = ({ card, displayPile }) => {
    return (
        <div className="row">
            <div className="col-3 mx-auto my-3">
                <button onClick={() => displayPile(card.id)}
                    className="btn"
                    id={card.id}>
                    <img src='/img/none.png'
                        alt="" className="img-fluid" />
                </button>
            </div>
            <div className="col-3 mx-auto my-3">
                    <img src={card.isVisible ? card.img : '/img/none.png'}
                        alt="" className="img-fluid" />
            </div>  
        </div>
    )
}

export default DisplayPile;