import React from 'react'
import { Link } from 'react-router-dom';
// import Cart from './cart.js'
// import Content from './Content'
// import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
const Header=(props)=>{
    const {countCartItems}=props;
    return ( <header className="row block center">
        <div className='title'>
                <h1>
                ELECTRONICS STORE
                </h1>
        </div>
        <div className='cart'>
            <Link to="/cart">
            🛒{ ' ' }
                {countCartItems?(
                    <button className="badge">{countCartItems}</button>
                ):('')
                }
            </Link><Link to="/">Home</Link><Link to="/laptop">Laptops</Link><Link to="/tv">Television</Link><Link to="/phone">Phone</Link>
        </div>
    </header>
    );
}
export default Header;