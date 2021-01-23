import React, {useState, useContext} from "react";
import PropTypes from "prop-types";

import {Context} from "../Context"

// ref on how to enlarge image inclick
// (1) https://github.com/aautio/react-modal-image#readme
// (2) https://codepen.io/ongtiffany/pen/BoOeQV

const Image = ({className, img}) => {
    const [hovered, setHovered] = useState(false)
    const {addToCart, cartItems, removeFromCart} = useContext(Context)
    
    const cartIcon = () => {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-checkbox-circle-fill cart-selected" onClick={() => removeFromCart(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-checkbox-circle-line cart" onClick={() => addToCart(img)}></i>
        }

        // return <i className={`ri-checkbox-circle-line ${alreadyInCart ? 'cart-selected' : 'cart'}`} onClick={() => addToCart(img)}></i>

        
    }

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img alt={""} src={img.url} className="image-grid"/>
            {console.log("test" + img)}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
