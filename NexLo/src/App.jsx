import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage.jsx';
import Footer from './Components/Footer.jsx';
import SignIn from "./Components/SignIn.jsx";
import Showdetail from "./Components/Showdetail.jsx";
import PartnerRegistration from './Components/PartnerRegistration.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/partner" element={<Showdetail />} />
        <Route path="/partnerregistration" element={<PartnerRegistration />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;