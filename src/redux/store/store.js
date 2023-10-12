import { combineReducers, compose, legacy_createStore } from "redux";
import formSlice from "../slices/formSlice";
import listSlice from "../slices/listSlice";
import searchSlice from "../slices/searchSlice";

const reducer = combineReducers({
  form: formSlice,
  list: listSlice,
  search: searchSlice,
});

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSOIN__ && window.__REDUX_DEVTOOLS_EXTENSOIN__(); 

const store = legacy_createStore(
  reducer,
  compose(ReactReduxDevTools)
)

export default store;