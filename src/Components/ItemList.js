import React from 'react';
import Item from './Item';
import {Link} from 'react-router-dom';

function ItemList({items}) {
    
    return (
        <div>

            {
                items.map( i =>{
                    return(
                        <Link key = {i.id}  to={`/ItemDetailContainer/${i.id}`}>
                        <Item key = {i.id} nombre = {i.nombre}/>
                        </Link>
                    )
                })
            }
           
        </div>
    )
}

export default ItemList
