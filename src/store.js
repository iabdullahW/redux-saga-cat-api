// src/store.js

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import catReducer from "./features/catSlice";
import catSaga from "./sagas";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store
const store = configureStore({
  reducer: {
    cat: catReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Run the saga
sagaMiddleware.run(catSaga);

export default store;
