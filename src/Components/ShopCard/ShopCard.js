import React from 'react';
import PropTypes from 'prop-types';
import './ShopCard.css'

const ShopCard = ({cards}) => {
    return (
        cards.map(card=>
            <div className='shop-card'>
                <div className="shop-card__title">
                    <div className="shop-card__name">{card.name}</div>
                    <div className="shop-card__color">{card.color}</div>
                </div>
                <img src={card.img} alt={card.name+'_'+ card.color} className="shop-card__img"/>
                <div className="shop-card__buy">
                    <div className="shop-card__price">${card.price}</div>
                    <button className="shop-card__button">Add to card</button>
                </div>
            </div>
        )
    );
};

ShopCard.propTypes = {
    cards: PropTypes.array.isRequired,
};

export default ShopCard;