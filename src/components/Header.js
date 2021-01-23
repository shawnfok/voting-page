import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"

const Header = () => {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
            <Link to="/"><h2>Voting Page</h2></Link>
            {/* below should be chaged as confirmation button after selecting an image */}
            <Link to="/cart">
                <i className={`${cartClassName} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header
