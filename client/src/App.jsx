import React from "react";
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import LandingPage from "./views/LandingPage";
import './index.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage/>} path="/"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
