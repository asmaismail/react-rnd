import React from "react";
import "./Mainpg.css";

const Section = () => {
  return (
    <>
      <div className="outerdiv">
        <div className="innerdiv ">
          <div
            className={`sidebar 
        `}
          >
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
            </ul>
          </div>
          <div className="div1">
            <h1 className="heading">Main heading</h1>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to <br />
              demonstrate the visual form of a document or a typeface without
              relying on meaningful content. Lorem ipsum may be used as a
              placeholder before the final
              <br /> copy is available. Wikipedia
            </p>
            <span className="">
              <button className="btn">Demo</button>
              <button className="btn">View More</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
