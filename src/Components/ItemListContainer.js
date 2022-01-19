import React from 'react';
import { useState, useEffect } from 'react';
import DB from './DB';
import ItemList from './ItemList';

function ItemListContainer() {
    const [items, setItems] = useState([]);


    useEffect( ()=>{

        setItems(DB);
        // console.log(items);
    },[items])

    

    return (
        <ItemList items = {items}/>
    )
}

export default ItemListContainer;
