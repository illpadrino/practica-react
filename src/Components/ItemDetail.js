import React from 'react'
import {useContext} from 'react'
import { CartContext} from './CartContext';

export const ItemDetail = ({producto}) => {
    
    const {setAdd} = useContext(CartContext);

    const aumentar = () =>{
        setAdd(producto);
    }

    return (
        <div>
         <h5>DETALLE</h5>
         <div>{producto.nombre}</div>
         <div>{producto.precio}</div>
         <div>{producto.modelo}</div>
         <button onClick={aumentar} >Agregar al Carrito</button>
        </div>
    )
}

export default ItemDetail;
