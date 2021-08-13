import { useState, useReducer } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import CartSide from './components/CartSide';
import productData from './data/products.json';

export const CART_ACTIONS = {
	ADD: "add",
	REMOVE: "remove",
	TOGGLE: "show"
}
let inCartCopy;

function cartReducer(inCart, action) {
	switch (action.type) {
		case CART_ACTIONS.ADD:
			inCartCopy = [...inCart];
			// check if item already inCart and increment quantity if so			
			for (let obj of inCartCopy) {
				if (obj.id === action.payload.product.id) {
					obj.quantity += 1; // will execute twice in dev strict mode
					return inCartCopy;
				}
			}
			return [...inCart, addProductToCart(action.payload.product)]
		case CART_ACTIONS.REMOVE:
			inCartCopy = [...inCart];
			return inCartCopy.filter(prod => prod.id !== action.payload.product.id)
			
		// case CART_ACTIONS.TOGGLE:
			
		default:
			return inCart;
	}
}

function addProductToCart(prod) {
	return {
		id: prod.id,
		name: prod.name,
		src: prod.src,
		alt: prod.alt,
		price: prod.price,
		quantity: 1
	}
}


function App() {
	const [inCart, dispatchCart] = useReducer(cartReducer, [])
	const [showCart, setShowCart] = useState(false);

	const products = [...productData];

	const productDisplay = products ? products.map((prod, idx) => {
		return <ProductCard product={prod} key={idx} dispatchCart={dispatchCart} />
	}) : "Loading";

	return (
		<div className="App">
			<h1>React Review Online Store</h1>
			<span onClick={() => setShowCart(!showCart)}>Toggle Cart</span>
			<div className="productDisplay">
				{productDisplay}
			</div>
			{showCart ? <CartSide inCart={inCart} dispatchCart={dispatchCart} /> : null}
			
		</div>
	);
}

export default App;
