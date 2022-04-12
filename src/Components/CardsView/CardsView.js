import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from "../ShopCard/ShopCard";
import './CardsView.css'

const CardsView = ({cards}) => {
    return (
        <div className='cards_view'>
            <ShopCard cards={cards}/>
        </div>
    );
};

CardsView.propTypes = {
   cards: PropTypes.array.isRequired,
};

export default CardsView;