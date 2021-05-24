import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { addProduct } from "../store/cart-reducer";
import "./products.scss";


function Products(props) {
  console.log(`inStock`, props.products);
  return (
    <section>
      <ul className="products">
        {props.products.map((product, index) => {
          if (props.active === product.category) {
            product.index = index;
            console.log(`stock`, product.inStock);
            return (
              <Card
                style={{ width: "18rem" }}
                className={`cards ${product.name}`}
                key={product.name}
              >
                <CardMedia className={"img"} image={product.image} />
                <CardContent>{product.name}</CardContent>
                <CardContent>Price : {product.price}$</CardContent>
                <CardContent>in Stock : {product.inStock}</CardContent>
                <section className="btnn">
                  <Button
                    onClick={() => props.addProduct(product)}
                    variant="light"
                  >
                    ADD TO CART
                  </Button>
                  <Button variant="light">VIEW DETAILS</Button>
                </section>
              </Card>
            );
          } else {
            return "";
          }
        })}
      </ul>
    </section>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return { active: state.Categories.active, products: state.Products.products };
};

const mapDispatchToProps = { addProduct };


export default connect(mapStateToProps, mapDispatchToProps)(Products);
