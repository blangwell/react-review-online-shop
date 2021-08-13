import { CART_ACTIONS } from '../App';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		minWidth: 300,
		margin: 20
	},
	cardActions: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}
})

export default function ProductCard(props) {
	const classes = useStyles();
	
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="100"
					image={props.product.src}
					title={props.product.alt}
				/>
				<CardContent>
					<Typography variant="h5" component="h3">
						{props.product.name}
					</Typography>
					<Typography variant="body2" component="p">
						{props.product.price}
					</Typography>
					<Typography variant="body2" component="p">
						Quantity: {props.product.quantity}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.cardActions}>
				<Button 
					size="small" 
					variant="outlined"
					color="primary"
					onClick={() => props.dispatchCart(
						{ type: CART_ACTIONS.ADD, 
						payload: {product: props.product} }
						)}
				>
					Add to Cart
				</Button>
			</CardActions>
		</Card>
	);
}