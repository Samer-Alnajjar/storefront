import { createStore, combineReducers } from "redux";
// this to make the dev tools work
import { composeWithDevTools } from "redux-devtools-extension";
import Categories from "./categories-reducer";
import Products from "./products-reducer";

const rootReducer = combineReducers({ Categories, Products });
// in some component state.counter.totalVotes / .candidates
const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();
