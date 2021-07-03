import counterReducer from "./counter.reducer";
import loginReducer from "./isLogged.reducer";
import { combineReducers } from "redux";

const masterReducers = combineReducers({
  counter: counterReducer,
  login: loginReducer,
});

export default masterReducers;
