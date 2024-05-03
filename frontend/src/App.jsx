import "./App.css"
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <Services/>
      <About />
      <Contact />
      <Footer/>
      <Toaster />
    </BrowserRouter>
  )
}
export default App;