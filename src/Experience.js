import "./Experience.css";
import React from "react";

function Experience() {
  return (
    <div>
      <section className="experience" id="experience">
        <div className="title">﹤experience﹥</div>
        <div className="container-ex">
          <div className="timeline">
            <div className="timeline-content">
              <div className="year">2020</div>
              <div className="icon">
                <i class="fa-solid fa-bed"></i>
              </div>
              <div className="content2 reveal">
                <h1 className="topic">
                  Bedder
                  <br />
                  Fu Jen Catholic University and Schramm
                </h1>
                <p className="detail">
                  I cooperated with Schramm to produce an internal ERP system in
                  independent study by using React.js and Airtable of cloud
                  database.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-content">
              <div className="year">2021</div>
              <div className="icon">
                <i class="fa-solid fa-briefcase"></i>
              </div>
              <div className="content2 reveal2">
                <h1 className="topic">
                  Web Developer
                  <br />
                  Far Eastern International Leasing Company
                </h1>
                <p className="detail">
                  During this period, I also studied the use of python as a web
                  crawler, ASP.NET and collected useful data from various
                  websites for analysis with colleague.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-content">
              <div className="year">2022</div>
              <div className="icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="content2 reveal">
                <h1 className="topic">Now</h1>
                <p className="detail">
                  College degree, Information Management, Fu Jen Catholic
                  University, E-Commerce program and Artificial Intelligence
                  program.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="title2">﹤/experience﹥</div>
      </section>
    </div>
  );
}

export { Experience };
