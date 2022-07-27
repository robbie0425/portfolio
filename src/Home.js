import "./Home.css";
import React from "react";
import Typed from "typed.js";

function Home() {
  // Create reference to store the DOM element containing the animation
  const element = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["Robbie.", "Web Designer."],
      typeSpeed: 70,
      backSpeed: 100,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(element.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  function stopScroll(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  React.useEffect(() => {
    const menu = document.getElementById("menu");
    const menuBG1 = document.getElementById("menuBG1");
    const menuBG2 = document.getElementById("menuBG2");
    const menuBG3 = document.getElementById("menuBG3");
    const menuList = document.getElementById("menuList");
    const menuPage = document.getElementById("menuPage");
    let menuOpen = false;
    menu.addEventListener("click", () => {
      if (!menuOpen) {
        menu.classList.add("open");
        menuBG1.classList.add("open");
        menuBG2.classList.add("open");
        menuBG3.classList.add("open");
        menuList.classList.add("open");
        menuPage.addEventListener("wheel", stopScroll);
        menuOpen = true;
      } else {
        menu.classList.remove("open");
        menuBG1.classList.remove("open");
        menuBG2.classList.remove("open");
        menuBG3.classList.remove("open");
        menuList.classList.remove("open");
        menuPage.removeEventListener("wheel", stopScroll);
        menuOpen = false;
      }
    });
  }, []);
  return (
    <div>
      <section className="header" id="home">
        <div className="menu" id="menu">
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
        <div className="header-text">
          <span>Hello World,</span>
          <span>
            I'm&nbsp;
            <span className="auto-type" ref={element}></span>
          </span>
        </div>
        <div className="cupPlate">
          <div className="plate"></div>
          <div className="cup">
            <div className="top">
              <div className="smoke">
                <span style={{ "--i": 0 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 5 }}></span>
                <span style={{ "--i": 4 }}></span>
                <span style={{ "--i": 9 }}></span>
                <span style={{ "--i": 8 }}></span>
              </div>
              <div className="circle">
                <div className="coffee"></div>
              </div>
            </div>
            <div className="handle"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Home };
