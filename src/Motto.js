import "./Motto.css";
import React from "react";

function Motto() {
  // var path = document.querySelector("path");
  // alert(path.getTotalLength());
  return (
    <div>
      <section className="motto" id="motto">
        <div className="motto-box reveal">
          <div className="motto-word word1">"DO WHAT YOU LOVE</div>
          <div className="motto-word word2">LOVE WHAT YOU DO"</div>
        </div>
        <svg
          width="300"
          height="300"
          className="plus svgReveal"
          id="svgRevealID"
        >
          <path
            fillOpacity={0}
            d="m7.49997,102.18961l94.18967,0l0,-94.18965l96.62072,0l0,94.18965l94.18968,0l0,96.6207l-94.18968,0l0,94.18964l-96.62072,0l0,-94.18964l-94.18967,0l0,-96.6207z"
            stroke-width="12"
            stroke="#fec397"
          />
        </svg>
      </section>
    </div>
  );
}

export { Motto };
