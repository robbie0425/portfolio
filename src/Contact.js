import "./Contact.css";
import React from "react";

function Contact() {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="title">﹤contact﹥</div>
        <div className="container-co">
          <h1>Feel free to send an e-mail on robbie04272000@gmail.com</h1>
          <div className="inputbox">
            <input type="text" required></input>
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input type="text" required></input>
            <span>Email</span>
          </div>
          <div className="inputbox">
            <textarea cols="79" rows="5" required></textarea>
            <span>Message</span>
          </div>
          <button className="btn">
            <i className="fa-solid fa-paper-plane"></i>Send
          </button>
        </div>
        <div className="title2">﹤/contact﹥</div>
      </section>
    </div>
  );
}

export { Contact };
