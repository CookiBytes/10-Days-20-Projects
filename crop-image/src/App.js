import React from "react";
import ImageCropper from "./componenets/imageCropper";
import cropImage from "./image.jpg";

function App() {
  return (
    <div>
      <ImageCropper src={cropImage} />
    </div>
  );
}

export default App;
