import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <header>
                <ul style={{display: 'flex', justifyContent: 'center'}}>
                    <li style={{listStyle: 'none', margin: '20px'}}>
                        <Link to= '/'>HOME</Link>
                    </li>
                    <li style={{listStyle: 'none', margin: '20px'}}>
                        <Link to= 'productos'>PRODUCTOS</Link>
                    </li>
                    <li style={{listStyle: 'none', margin: '20px'}}>
                        <Link to= 'contacto'>CONATACTO</Link>
                    </li>
                    <li style={{listStyle: 'none', margin: '20px'}}>
                        <Link to= 'cart'>CART</Link>
                    </li>
                </ul>
            </header>
            
        </div>
    )
}

export default NavBar
