import AboutUs from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
     <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} /> 
           {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/services" element={<Services />} />
          {/* <Route path="/quality" element={<Quality />} /> */}
          <Route path="/contact" element={<Contact />} />
         </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;