import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from "../ShopItem/ShopItem";

const ListView = ({item}) => {
    return (
        <div className='list-view'>
            <ShopItem items={item}/>
        </div>
    );
};

ListView.propTypes = {
    item: PropTypes.array.isRequired,
};

export default ListView;