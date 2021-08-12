import QuantitySelector from "./QuantitySelector";
import { CART_ACTIONS } from "../App";

export default function CartProduct(props) {
    return (
        <div 
            style={{
                width: "500px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                border: "1px solid grey",
                borderRadius: "10px"
            }}>
            <img 
                src={props.product.src} 
                alt={props.product.alt} 
                style={{
                    width: "50px",
                    height: "auto"
                }}
            />
            <h3>{props.product.name}</h3>
            <p>{props.product.price}</p>
            <p>{props.product.quantity}</p>
            <button 
                onClick={
                () => props.dispatchCart({ 
                    type: CART_ACTIONS.REMOVE, payload: { 
                        product: props.product 
                }})}>X</button>
            <QuantitySelector />
        </div>
    )
}