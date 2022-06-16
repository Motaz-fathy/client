import React, { useState } from "react";
import "./collapse.css";
export const Collapse = () => {
    const [click1 , setClick1] = useState(true)
    const [click2 , setClick2] = useState(true)
    const toggle1 = (e) => {
    e.preventDefault()
    setClick1(!click1)
    }
    const toggle2 = (e) => {
        e.preventDefault()
        setClick2(!click2)
        }
  return (
    <div className="all">
      <div className="container">
        <div className="title">
          <h2>Frequently Asked Questiond</h2>
        </div>
        <div className="collap">
          <div id="toggel1" onClick={toggle1}>
            <h3>
              Can I hire testers from Appituneity and integrate them with my
              team?
            </h3>
            <i className="fa fa-plus" />
          </div>
          <div id={click1 ? "content" : "con"}>
            <div>
            <h4>What is Software Quality Assurance(QA)?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.{" "}
            </p>
            </div>
          </div>



          <div id="toggel2" onClick={toggle2}>
            <h3>
              Can I hire testers from Appituneity and integrate them with my
              team?
            </h3>
            <i className="fa fa-plus" />
          </div>
          <div id={click2 ? "content2" : "con2"}>
            <div>
            <h4>What is Software Quality Assurance(QA)?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.{" "}
            </p>
            </div>
          </div>
 
        </div>


      </div>
    </div>
  );
};
