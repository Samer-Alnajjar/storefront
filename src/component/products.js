import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import "./products.scss";

function Products(props) {
  console.log(`products`, props);
  return (
    <section>
      <ul className="products">
        {props.products.map((product) => {
          if (props.active === product.category) {
            return (
              <Card
                style={{ width: "18rem" }}
                className={`cards ${product.name}`}
                key={product.name}
              >
                <CardMedia className={"img"} image={product.image} />
                <CardContent>{product.name}</CardContent>
                <CardContent>Price : {product.price}$</CardContent>
                <CardContent>in Stock : {product.count}</CardContent>
                <section className="btnn">
                  <Button variant="light">ADD TO CART</Button>
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
return { active: state.Categories.active, products: state.Products.products};
};

export default connect(mapStateToProps)(Products);
