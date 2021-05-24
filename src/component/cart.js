import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { showCart } from "../store/cart-reducer";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "./cart.scss";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  appBar: {
    top: "auto",
    bottom: 0,
    right: 0,
    height: "40px",
    width: 250,
  },
});

export default function Cart() {
  const state = useSelector((state) => {
    return {
      cart: state.Carts.cart,
      show: state.Carts.show,
      active: state.Carts.active,
    };
  });
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log(`State`, state);

  return (
    <Drawer
      anchor="right"
      open={state.show}
      onClose={() => dispatch(showCart(false))}
    >
      <List className={classes.list}>
        <ListItem>
          <Grid
            className={classes.container}
            container
            alignItems="center"
            justify="center"
            wrap="wrap"
            spacing={2}
          >
            <Typography variant="h4">My Cart</Typography>
          </Grid>
        </ListItem>
        <Divider />
        {state.cart.map((product) => {
          return (
            <div key={product.name}>
              <ListItem>
                <Grid
                  className={classes.container}
                  container
                  alignItems="center"
                  justify="space-between"
                  wrap="wrap"
                  spacing={2}
                >
                  <Typography variant="h6">
                    <strong>{product.name}</strong> ({product.count})
                  </Typography>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      dispatch({
                        type: "DELETE",
                        payload: { product, active: state.active },
                      });
                    }}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </List>
    </Drawer>
  );
}
