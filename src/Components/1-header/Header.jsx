import { useEffect, useState } from "react";
import "./header.css";
const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  const [iconMode, setIconMode] = useState(
    localStorage.getItem("currentIconMode") ?? "icon-moon-o"
  );
  
  useEffect(() => {
    if (theme === "light" ) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
       // Change l'icône en fonction du thème
       document.querySelector(".iconChange").classList.remove("icon-moon-o");
       document.querySelector(".iconChange").classList.add("icon-sun")
      
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
  // Change l'icône en fonction du thème
  document.querySelector(".iconChange").classList.remove("icon-sun");
  console.log( document.querySelector(".iconChange"));
  
  document.querySelector(".iconChange").classList.add("icon-moon-o");
    }
  }, [theme]); 

  return (
    <header className=" flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className=" menu icon-menu flex"
      ></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#About">About</a>
          </li>
      
          
          <li>
            <a href="#Projects">Projects</a>
          </li>
         <li>
            <a href="#Speaking">Speaking</a>
          </li>
          <li>
            <a href="#Uses">Uses</a>
          </li>
        </ul>
      </nav>
      <button 
        onClick={() => {
          // send value to ls
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
         
          // get value from ls

          setTheme(localStorage.getItem("currentMode"));
          
        }}
        className="mode flex"
      >
        <span className=" iconChange icon-moon-o"></span>
      </button>
      {showModal && (
        <div className="border fixed">
          <ul className="modal border">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
