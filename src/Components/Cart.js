import {React, useContext} from 'react'
import { CartContext} from './CartContext';

function Cart() {
const {add} = useContext(CartContext);

    return (
        <div>
            <h5>{add.nombre}</h5>
            <div>{add.precio}</div>
        </div>
        )
}

export default Cart
