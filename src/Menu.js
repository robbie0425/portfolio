import "./Menu.css";
import React from "react";

function Menu() {
  function stopScroll(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  function link1() {
    const menu = document.getElementById("menu");
    const menuBG1 = document.getElementById("menuBG1");
    const menuBG2 = document.getElementById("menuBG2");
    const menuBG3 = document.getElementById("menuBG3");
    const menuList = document.getElementById("menuList");
    const menuPage = document.getElementById("menuPage");
    menu.classList.remove("open");
    menuBG1.classList.remove("open");
    menuBG2.classList.remove("open");
    menuBG3.classList.remove("open");
    menuList.classList.remove("open");
    menuPage.removeEventListener("wheel", stopScroll);
    window.location.hash = "home";
  }
  function link2() {
    const menu = document.getElementById("menu");
    const menuBG1 = document.getElementById("menuBG1");
    const menuBG2 = document.getElementById("menuBG2");
    const menuBG3 = document.getElementById("menuBG3");
    const menuList = document.getElementById("menuList");
    const menuPage = document.getElementById("menuPage");
    menu.classList.remove("open");
    menuBG1.classList.remove("open");
    menuBG2.classList.remove("open");
    menuBG3.classList.remove("open");
    menuList.classList.remove("open");
    menuPage.removeEventListener("wheel", stopScroll);
    window.location.hash = "projects";
  }
  function link3() {
    const menu = document.getElementById("menu");
    const menuBG1 = document.getElementById("menuBG1");
    const menuBG2 = document.getElementById("menuBG2");
    const menuBG3 = document.getElementById("menuBG3");
    const menuList = document.getElementById("menuList");
    const menuPage = document.getElementById("menuPage");
    menu.classList.remove("open");
    menuBG1.classList.remove("open");
    menuBG2.classList.remove("open");
    menuBG3.classList.remove("open");
    menuList.classList.remove("open");
    menuPage.removeEventListener("wheel", stopScroll);
    window.location.hash = "about";
  }
  function link4() {
    const menu = document.getElementById("menu");
    const menuBG1 = document.getElementById("menuBG1");
    const menuBG2 = document.getElementById("menuBG2");
    const menuBG3 = document.getElementById("menuBG3");
    const menuList = document.getElementById("menuList");
    const menuPage = document.getElementById("menuPage");
    menu.classList.remove("open");
    menuBG1.classList.remove("open");
    menuBG2.classList.remove("open");
    menuBG3.classList.remove("open");
    menuList.classList.remove("open");
    menuPage.removeEventListener("wheel", stopScroll);
    window.location.hash = "experience";
  }
  function link5() {
    const menu = document.getElementById("menu");
    const menuBG1 = document.getElementById("menuBG1");
    const menuBG2 = document.getElementById("menuBG2");
    const menuBG3 = document.getElementById("menuBG3");
    const menuList = document.getElementById("menuList");
    const menuPage = document.getElementById("menuPage");
    menu.classList.remove("open");
    menuBG1.classList.remove("open");
    menuBG2.classList.remove("open");
    menuBG3.classList.remove("open");
    menuList.classList.remove("open");
    menuPage.removeEventListener("wheel", stopScroll);
    window.location.hash = "contact";
  }

  return (
    <div id="menuPage">
      <div className="menuBG1" id="menuBG1"></div>
      <div className="menuBG2" id="menuBG2"></div>
      <div className="menuBG3" id="menuBG3"></div>
      <section className="menuList" id="menuList">
        <div className="menuItem" onClick={link1}>
          <div className="menuText">HOME</div>
        </div>
        <div className="menuItem" onClick={link2}>
          <div className="menuText">PROJECTS</div>
        </div>
        <div className="menuItem" onClick={link3}>
          <div className="menuText">ABOUT</div>
        </div>
        <div className="menuItem" onClick={link4}>
          <div className="menuText">EXPERIENCE</div>
        </div>
        <div className="menuItem" onClick={link5}>
          <div className="menuText">CONTACT</div>
        </div>
      </section>
    </div>
  );
}

export { Menu };
