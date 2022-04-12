import React from 'react';
import PropTypes from 'prop-types';
import './ShopItem.css'


const ShopItem = ({items}) => {
    return (
        items.map(item=>
            <div className='item'>
                <img src={item.img} alt={item.name+'_'+item.color} className="item__img"/>
                <div className="item__name">{item.name}</div>
                <div className="item__color">{item.color}</div>
                <div className="item__price">${item.price}</div>
                <button className="item__btn">Add to card</button>
            </div>
        )
    )
}



ShopItem.propTypes = {
    items: PropTypes.array.isRequired
};

export default ShopItem;