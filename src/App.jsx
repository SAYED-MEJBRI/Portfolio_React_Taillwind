import { useEffect, useState } from "react";
import Header from "./Components/1-header/Header";
import Hero from "./Components/2-hero/Hero";
import Main from "./Components/3-main/Main";
import Contact from "./Components/4-contact/Contact";
import Footer from "./Components/5-footer/Footer";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY> 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  },[]);
  const [showScrollBTN, setshowScrollBTN] = useState(false);
  return (
    <div id="up" className="container">
      <Header />
      <div className="divider" />
      <Hero  />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact  />
      <div className="divider" />
      <Footer />
 
        <a style={{opacity: showScrollBTN? 1:0, transition: "1s"}} href="#up">
          <button className="scroll2Top icon-keyboard_arrow_up"></button>
        </a>
    
    </div>
  );
}

export default App;
