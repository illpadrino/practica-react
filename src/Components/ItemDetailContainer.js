import React from 'react';
import { useState, useEffect } from 'react';
import DB from './DB';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

function ItemDetailContainer() {
    
    const [producto, setProducto] = useState([]);
    const {id} = useParams ();
  
    useEffect( ()=>{

        const productoSeleccionado = DB.find((p) => p.id === id);
        setProducto(productoSeleccionado);
        // console.log(productoSeleccionado);
        
    },[producto, id]);



    return (

      <ItemDetail producto = {producto}/> 
    )
}

export default ItemDetailContainer;