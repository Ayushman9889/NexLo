import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage.jsx';
import Footer from './Components/Footer.jsx';
import SignIn from "./Components/SignIn.jsx";
import Showdetail from "./Components/Showdetail.jsx";


function Partner() {
  return <div className="text-center py-20 text-darkBlue text-2xl">Partner With Us Page</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/partner" element={<Showdetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
