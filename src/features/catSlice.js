// src/features/catSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  images: [],
};

// Create slice
const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    // Action to initiate fetching of cat images (for saga)
    fetchCats(state) {},
    // Action to set fetched cat images in the state
    setCats(state, action) {
      state.images = action.payload;
    },
  },
});

// Export actions for use in components and saga
export const { fetchCats, setCats } = catSlice.actions;

// Export reducer to add to the store
export default catSlice.reducer;
