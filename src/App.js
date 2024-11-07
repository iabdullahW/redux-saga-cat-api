// src/App.js

import React from "react";
import { useDispatch } from "react-redux";
import { fetchCats } from "./features/catSlice";
import CatImageGrid from "./components/CatImageGrid";

function App() {
  const dispatch = useDispatch();

  const handleFetchCats = () => {
    dispatch(fetchCats());
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "20px",backgroundColor: "gray",height:"60vh" }}>
      <h1>Random Cat Images</h1>
      <button style={{backgroundColor:"teal",padding:"10px",borderRadius:"10px"}} onClick={handleFetchCats}>Fetch Cat Images</button>
      <CatImageGrid />
    </div>
  );
}

export default App;
