//import { createStore, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./slice";
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
export default store;
