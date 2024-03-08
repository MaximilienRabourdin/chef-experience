import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";


function App() {
  
  return (
    <div className="">
     
        <Router>
       
          <Routes>
            <Route path="/" element={<Home />} />
            
            
            {/* <Route path='/politique_de_confidentialite' element={<PolitiqueConfidentialite />} /> */}
          </Routes>
         
        </Router>
   
    </div>
  );
}

export default App;
