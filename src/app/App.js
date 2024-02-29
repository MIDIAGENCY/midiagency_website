import React, {
  useEffect
} from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Activity from "../components/Activity";
import Discover from "../components/Discover";
import Launch from "../components/Launch";
import Signup from "../components/Signup";

import "../css/sass/index.scss";

function App() {
  useEffect(() => {
    Aos.init({
        duration: 1500
    });
}, []);

  return (
    <div className = "app-container" >
      <ScrollToTop />
      <Navbar />
      <Home /> 
      <Activity />  
      <Discover />
      <Launch />
      <Signup /> 
    </div>
  );
}

export default App;
