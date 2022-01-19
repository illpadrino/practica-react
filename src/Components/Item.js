import React from 'react';



function Item(props) {

    const { nombre} = props;
    
    return (
       
        <div>
            <h5>{nombre}</h5>
        </div>
        
    )
}

export default Item
