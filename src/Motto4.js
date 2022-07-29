import "./Motto.css";
import React from "react";

function Motto4() {
  return (
    <div>
      <section className="motto" id="motto4">
        <div className="motto-box2 reveal">
          <div className="motto-word word1">"GOOD TIMES, TRYING TIMES,</div>
          <div className="motto-word word2">VALUE EXPERIENCE AT ANY TIME"</div>
        </div>
        <svg
          width="300"
          height="300"
          className="divide svgReveal"
          id="svgRevealID"
        >
          <path
            fillOpacity={0}
            d="m150.59154,6.36999l0,0c24.40904,0 44.1965,19.78745 44.1965,44.1965c0,24.40906 -19.78744,44.1965 -44.1965,44.1965c-24.40907,0 -44.1965,-19.78741 -44.1965,-44.1965c0,-24.40905 19.78741,-44.1965 44.1965,-44.1965zm0,287.20209c-24.40907,0 -44.1965,-19.78743 -44.1965,-44.19651c0,-24.40904 19.78741,-44.1965 44.1965,-44.1965c24.40904,0 44.1965,19.78744 44.1965,44.1965c0,24.40907 -19.78744,44.19651 -44.1965,44.19651zm-129.97203,-187.79755l259.94405,0l0,88.39301l-259.94405,0l0,-88.39301z"
            stroke-width="12"
            stroke="#fec397"
          />
        </svg>
      </section>
    </div>
  );
}

export { Motto4 };
