import Header from "./Components/1-header/Header";
import Hero from "./Components/2-hero/Hero";
import Main from "./Components/3-main/Main";
import Contact from "./Components/4-contact/Contact";
import Footer from "./Components/5-footer/Footer";

function App() {
  return (
    <div id="up" className="container">
      <Header />
      <div className="divider" />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a href="#up">
        <button className="scroll2Top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
