// src/components/CatImageGrid.js

import React from "react";
import { useSelector } from "react-redux";

function CatImageGrid() {
  const images = useSelector((state) => state.cat.images);

  return (
    <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
      {images.length > 0 ? (
        images.map((image, index) => (
          <img key={index} src={image.url} alt="Cat" style={{ width: "100px", height: "100px" }} />
        ))
      ) : (
        <p style={{  fontSize: "20px", fontWeight: "bold"}}>Click the button to fetch cat images!</p>
      )}
    </div>
  );
}

export default CatImageGrid;
