import "./Projects.css";
import React from "react";

function Projects() {
  return (
    <div>
      <section className="projects" id="projects">
        <div className="title">﹤projects﹥</div>
        <div className="box-list">
          <div className="box reveal">
            <div className="icon1">
              <i class="fa-solid fa-bed"></i>
            </div>
            <div className="text">
              <h1>Bedder</h1>
              <p>React, Bootstrap, Material-UI, Airtable</p>
            </div>
          </div>
          <div className="box reveal">
            <div className="icon1">
              <i class="fa-brands fa-discord"></i>
            </div>
            <div className="text">
              <h1>Discord Bot</h1>
              <p>Node.js, Discord API, Weather API, Twitch API, Youtube API</p>
            </div>
          </div>
          <div className="box reveal">
            <div className="icon1">
              <i class="fa-brands fa-line"></i>
            </div>
            <div className="text">
              <h1>Line Bot</h1>
              <p>Node.js, Line API, Weather API, Twitch API, Youtube API</p>
            </div>
          </div>
          <div className="box reveal">
            <div className="icon1">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="text">
              <h1>Shopping Website</h1>
              <p>React, styled-components, Spring(Java), Mysql</p>
            </div>
          </div>
          <div className="box reveal">
            <div className="icon1">
              <i class="fa-brands fa-twitch"></i>
            </div>
            <div className="text">
              <h1>Twitch Redeem</h1>
              <p>Node.js, tmi.js, node-key-sender</p>
            </div>
          </div>
          <div className="box reveal">
            <div className="icon1">
              <i class="fa-solid fa-person"></i>
            </div>
            <div className="text">
              <h1>Personal Portfolio</h1>
              <p>React, typed.js</p>
            </div>
          </div>
        </div>
        <div className="title2">﹤/projects﹥</div>
      </section>
    </div>
  );
}

export { Projects };
