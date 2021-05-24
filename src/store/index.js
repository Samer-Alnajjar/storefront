import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Categories from "./categories-reducer";
import Products from "./products-reducer";
import Carts from "./cart-reducer";

const rootReducer = combineReducers({ Categories, Products, Carts });
const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();
