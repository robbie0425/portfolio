import "./Motto.css";
import React from "react";

function Motto3() {
  return (
    <div>
      <section className="motto" id="motto3">
        <div className="motto-box3 reveal">
          <div className="motto-word">"TOGETHER, ANYTHING IS POSSIBLE"</div>
        </div>
        <svg
          width="300"
          height="300"
          className="times svgReveal"
          id="svgRevealID"
        >
          <path
            fillOpacity={0}
            d="m9,77.49057l68.61309,-68.61309l72.88662,72.88602l72.88662,-72.88602l68.61373,68.61309l-72.88664,72.88662l72.88664,72.88662l-68.61373,68.61373l-72.88662,-72.88664l-72.88662,72.88664l-68.61309,-68.61373l72.88602,-72.88662l-72.88602,-72.88662z"
            stroke-width="12"
            stroke="#fec397"
          />
        </svg>
      </section>
    </div>
  );
}

export { Motto3 };
