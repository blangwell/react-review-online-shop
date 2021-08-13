// import { useState } from 'react';
import CardProductSm from './CartProductSm';

export default function CartSide(props) {
    const cartProducts = props.inCart.length > 0 ? 
        props.inCart.map((prod, idx) => <CardProductSm product={prod} key={idx} dispatchCart={props.dispatchCart}/>) :
        <p>Nothing in Cart</p> 

        
    return (
        <div className="animate__animated animate__slideInRight">
            <h1>Your Cart</h1>
            {cartProducts}
        </div>
    )
}