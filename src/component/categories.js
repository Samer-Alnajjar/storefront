import React from "react";
import { connect } from "react-redux";
import { activeCategory } from "../store/categories-reducer";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import "./categories.scss";

function Categories(props) {
  console.log(`active`, props);
  return (
    <section>
      <h1> Browse Our Categories</h1>
      {props.categories.categories.map((category) => {
        return (
          <ButtonBase
            key={category.normalizedName}
            onClick={() => props.activeCategory(category.normalizedName)}
            style={{ marginLeft: "30px" }}
          >
            <Typography>{category.displayName}</Typography>
          </ButtonBase>
        );
      })}
    </section>
  );
}

const mapStateToProps = (state) => {
  return { categories: state.Categories };
};
const mapDispatchToProps = { activeCategory };
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
