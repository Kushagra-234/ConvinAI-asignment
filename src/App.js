import React, { useState } from "react";
import Header from "./components/header/Header";
import Bucket from "./components/Bucketcard/Bucket";
import "./App.css";
import { data } from "./data";

// use of BEM naming convention to avoid scoping conflicts However we can also use modular css

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Bucket />
        <Bucket />
        <Bucket />
        <Bucket />
      </div>
    </div>
  );
};

export default App;
