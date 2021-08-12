import { CART_ACTIONS } from '../App';

export default function ProductCard(props) {
	const cardStyles = {
		border: "1px solid black",
		borderRadius: "10px",
		margin: "10px",
		padding: "20px"
	}
	
	return (
		<div 
			className="product-card"
			style={cardStyles}
		>
			<img 
				src={props.product.src} 
				alt={props.product.alt}
				style={{width: "100%", maxHeight: "60%"}}
			/>
			<h1>{props.product.name}</h1>
			<h3>${props.product.price}</h3>
			<button 
				onClick={() => props.dispatchCart({ type: CART_ACTIONS.ADD, payload: {product: props.product} })}>Add to Cart</button>
		</div>
	);
}