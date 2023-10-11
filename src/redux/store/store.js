import { combineReducers, compose, legacy_createStore } from "redux";
import formReducer from "../reducers/formReducer";
import listReducer from "../reducers/listReducer";

const reducer = combineReducers({
  form: formReducer,
  list: listReducer
});

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSOIN__ && window.__REDUX_DEVTOOLS_EXTENSOIN__();

const store = legacy_createStore(
  reducer,
  compose(ReactReduxDevTools)
)

export default store;