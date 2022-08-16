import "./About.css";
import React from "react";
import TagCloud from "TagCloud";

function About() {
  React.useEffect(() => {
    const container = document.querySelector(".tagcloud");
    const texts = [
      "Html",
      "Css",
      "Javascript",
      "React",
      "MySql",
      "MS SQL",
      "styled-components",
      "Bootstrap",
      "Material-UI",
      "Node.js",
      "Java",
      "Python",
      "Airtable",
      "Spring",
      "Docker",
      "Selenium",
      "express",
    ];
    const options = {
      radius: 200,
    };
    return () => {
      TagCloud(container, texts, options);
    };
  }, []);
  return (
    <div>
      <section className="about" id="about">
        <div className="title">﹤about﹥</div>
        <div className="container">
          <div className="detail">
            <h1 className="text1 reveal">
              My name is Yung-Lin Tai. I am interested in creation and design
              since I was a child. From high school till now, I found that I
              like web design increasingly. I had a feeling of achievement when
              I customized website to meet customers' needs.
            </h1>
            <h1 className="text2 reveal">
              I'm good at summarizing and love to share with others. During my
              studies, I joined front-end web design society, where experts
              sharing their experiences of programming or latest updates.
            </h1>
            <h1 className="text3 reveal">
              In fact, I think what a programmer must understand is how to solve
              problems, every time I pass a test, my ability will also improve,
              which gives recognition to my ability.
            </h1>
          </div>
          <div className="skills tagcloud"></div>
        </div>
        {/* <button className="btn">
          <i className="fa-solid fa-cloud-arrow-down"></i>Download
        </button> */}
        <div className="title2">﹤/about﹥</div>
      </section>
    </div>
  );
}

export { About };
