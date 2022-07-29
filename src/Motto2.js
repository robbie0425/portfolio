import "./Motto.css";
import React from "react";

function Motto2() {
  return (
    <div>
      <section className="motto" id="motto2">
        <div className="motto-box3 reveal">
          <div className="motto-word">"EVER POSITIVE, NEVER NEGATIVE"</div>
        </div>
        <svg
          width="300"
          height="300"
          className="minus svgReveal"
          id="svgRevealID"
        >
          <path
            fillOpacity={0}
            d="m6,106l288.00007,0l0,92.17258l-288.00007,0l0,-92.17258z"
            stroke-width="12"
            stroke="#fec397"
          />
        </svg>
      </section>
    </div>
  );
}

export { Motto2 };
