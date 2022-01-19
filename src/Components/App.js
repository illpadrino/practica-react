import React  from 'react'
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Cart from './Cart';
import { CartContext} from './CartContext';
import { useState } from 'react';

const App = () => {

    const [add, setAdd] = useState (0);

    return(
    <CartContext.Provider value = {{add, setAdd}}>
     <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path = "/" element = {<ItemListContainer/>}/>
            <Route path = "/ItemDetailContainer/:id" element = {<ItemDetailContainer/>}/>
            <Route path = "/contacto" />
            <Route path = "/Cart" element = {<Cart/>}/>
        </Routes>
     </BrowserRouter>
     </CartContext.Provider>
    )
        
}

export default App;
