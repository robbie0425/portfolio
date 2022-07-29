//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Menu } from "./Menu";
import { Home } from "./Home";
import { Motto } from "./Motto";
import { Projects } from "./Projects";
import { Motto2 } from "./Motto2";
import { About } from "./About";
import { Motto3 } from "./Motto3";
import { Experience } from "./Experience";
import { Motto4 } from "./Motto4";
import { Contact } from "./Contact";

function App() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var reveals2 = document.querySelectorAll(".reveal2");

    if (reveals) {
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    if (reveals2) {
      for (var j = 0; j < reveals2.length; j++) {
        var windowHeight2 = window.innerHeight;
        var elementTop2 = reveals2[j].getBoundingClientRect().top;
        var elementVisible2 = 150;

        if (elementTop2 < windowHeight2 - elementVisible2) {
          reveals2[j].classList.add("active");
        } else {
          reveals2[j].classList.remove("active");
        }
      }
    }

    var svgReveal = document.querySelectorAll(".svgReveal");
    // var svgRevealID = document.getElementById("svgRevealID");
    var svgRevealID = document.querySelectorAll(`[id="svgRevealID"]`);

    if (svgReveal) {
      for (var k = 0; k < svgReveal.length; k++) {
        var windowHeight3 = window.innerHeight;
        var elementTop3 = svgReveal[k].getBoundingClientRect().top;
        var elementVisible3 = 150;

        let strokeHeight = parseInt(
          windowHeight3 - elementVisible3 - elementTop3
        );

        for (var l = 0; l < 300; l++) {
          if (l === strokeHeight) {
            if (1000 - l * 4 > 0) {
              svgRevealID[k].style.strokeDashoffset = 1000 - l * 4;
            }
          }
        }
      }
    }
  }
  React.useEffect(() => {
    window.addEventListener("scroll", reveal);
  }, []);
  return (
    <div className="App">
      <Menu />
      <Home />
      <Motto />
      <Projects />
      <Motto2 />
      <About />
      <Motto3 />
      <Experience />
      <Motto4 />
      <Contact />
    </div>
  );
}

export default App;
