import React from 'react';
import svgIcon from './assets/demo.svg';
// import imageFile from './assets/demo.png';

const App = () => (
  <div className="container">
    <h1>Hello React + Webpack 5</h1>
    <img src={svgIcon} alt="SVG Demo" width="80" />
    {/* <img src={imageFile} alt="PNG Demo" width="80" /> */}
  </div>
);

export default App;
