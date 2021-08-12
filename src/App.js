import { useState, useEffect, useReducer } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import CartSide from './components/CartSide';
import productData from './data/products.json';

export const CART_ACTIONS = {
	ADD: "add",
	REMOVE: "remove"
}

function cartReducer(inCart, action) {
	switch (action.type) {
		case CART_ACTIONS.ADD:
			return [...inCart, addProductToCart(action.payload.product)]
		case CART_ACTIONS.REMOVE:
			return inCart.filter(prod => prod.id !== action.payload.product.id)
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
	const [products, setProducts] = useState();

	useEffect(() => {
		setProducts(productData);
	}, [products]);

	console.log(inCart);

	const productDisplay = products ? products.map((prod, idx) => {
		return <ProductCard product={prod} key={idx} dispatchCart={dispatchCart} />
	}) : "Loading";

	return (
		<div className="App">
			<h1>React Review Online Store</h1>
			<div className="productDisplay">
				{productDisplay}
			</div>
			<CartSide inCart={inCart} />
		</div>
	);
}

export default App;
