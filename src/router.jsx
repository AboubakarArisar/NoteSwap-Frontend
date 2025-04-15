import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/Landing Page/LandingPage";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/contactUS/ContactUs";
import DocumentPage from "./components/DocumentPages/DocumentPage";
const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/documents' element={<DocumentPage/>} />

        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
