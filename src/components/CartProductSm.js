import QuantitySelector from "./QuantitySelector";
import { CART_ACTIONS } from "../App";
// import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

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
            <Button 
                variant="outlined"
                color="secondary"
                onClick={
                () => props.dispatchCart({ 
                    type: CART_ACTIONS.REMOVE, payload: { 
                        product: props.product 
                }})}>X</Button>
            <QuantitySelector />
        </div>
    )
}



