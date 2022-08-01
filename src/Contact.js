import "./Contact.css";
import React from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  function send() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const form = {
      name: name,
      email: email,
      message: message,
    };

    if (name !== "" && email !== "" && message !== "") {
      emailjs.send("gmail", "email-template", form, "hLfRX_kpLxpeQPHWH").then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      const send = document.getElementById("send");
      send.classList.add("active");
      setTimeout(() => {
        send.classList.remove("active");
      }, 6000);
    } else {
      alert("Name, Email and Message all sould be required!");
    }
  }
  return (
    <div>
      <section className="contact" id="contact">
        <div className="title">﹤contact﹥</div>
        <div className="container-co">
          <h1>Feel free to send an e-mail on robbie04272000@gmail.com</h1>
          <div className="inputbox">
            <input type="text" id="name" required></input>
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input type="text" id="email" required></input>
            <span>Email</span>
          </div>
          <div className="inputbox">
            <textarea cols="79" rows="5" id="message" required></textarea>
            <span>Message</span>
          </div>
          <button className="btn" id="send" onClick={send}>
            <div className="send">
              <i className="fa-solid fa-paper-plane fa-beat" />
              <span className="sendText">Send</span>
            </div>
          </button>
        </div>
        <div className="title2">﹤/contact﹥</div>
      </section>
    </div>
  );
}

export { Contact };
