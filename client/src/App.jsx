import React from "react";
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import LandingPage from "./views/LandingPage";
import './index.css'
import ContactUsPage from "./views/ContactUsPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage/>} path='/'/>
          <Route element={<ContactUsPage/>} path='/Contact_Us'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
