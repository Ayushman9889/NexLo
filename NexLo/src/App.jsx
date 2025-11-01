import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage.jsx';
import Footer from './Components/Footer.jsx';

// Placeholder pages — as we create these pages later
function SignIn() {
  return <div className="text-center py-20 text-darkBlue text-2xl">Sign In Page</div>;
}
function Partner() {
  return <div className="text-center py-20 text-darkBlue text-2xl">Partner With Us Page</div>;
}

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;