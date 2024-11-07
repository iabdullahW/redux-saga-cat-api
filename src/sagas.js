// src/sagas.js

import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { fetchCats, setCats } from "./features/catSlice";

// Fetch cat images from the API
function fetchCatImages() {
  return axios.get("https://api.thecatapi.com/v1/images/search?limit=10");
}

// Saga worker function
function* workFetchCats() {
  try {
    const response = yield call(fetchCatImages);
    yield put(setCats(response.data)); // Set images in the state
  } catch (error) {
    console.error("Failed to fetch cat images:", error);
  }
}

// Watcher saga
function* catSaga() {
  yield takeEvery(fetchCats.type, workFetchCats);
}

export default catSaga;
