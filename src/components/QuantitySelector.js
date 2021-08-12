import { useState } from 'react';

export default function QuantitySelector(props) {
    // const [quantity, setQuantity] = useState(1);
    
    // function updateQuantity(operator) {
    //     if (operator === "+") {
    //         setQuantity(quantity + 1);
    //     } else {
    //         if (quantity > 0) 
    //             setQuantity(quantity - 1);
    //     }
    // }

    return (
        <div style={{display: "flex"}}>
            {/* <button onClick={() => updateQuantity("-")}>-</button> */}
            {/* <p>{quantity}</p> */}
            {/* <button onClick={() => updateQuantity("+")}>+</button> */}
        </div>
    )
}