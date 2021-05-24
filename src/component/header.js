import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: red,
  },
  title: {
    flexGrow: 1,
    color: red,
  },
}));

function Header(props) {
  const classes = useStyles();
  console.log(`props`, props);

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#f5f5f5" }}>
        <Toolbar style={{ color: "black" }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ fontWeight: "bold" }}
          >
            OUT STORE
          </Typography>
          <Button color="inherit">Cart ({props.cart.cart.length})</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cart: state.Carts,
  };
};


export default connect(mapStateToProps)(Header);