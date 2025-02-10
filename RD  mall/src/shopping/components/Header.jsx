// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className="left">
            <div className="title">
                <h2>Shopping Mall</h2>
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Men</li>
                <li>Woman</li>
                <li>Children</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className="search">
            <input type="text" placeholder='Search...' />
        </div>
        <div className="right">
            <div className="signin">
                Signin / Signup
            </div>
            <div className="cart">
                <FaShoppingCart className="cart-icon" />

            </div>
        </div>
    </div>
  )
}

export default Header
