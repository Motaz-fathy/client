import React from "react";
import "./header.css";
import { Navbar } from "../Navbar/Navbar";
import { Slider } from "../Slider/Slider";
export const Header = () => {
  return (
    <div>
      <header>
        <Navbar />
        <div className="space">
          <div className="home">
            <section className="left">
              <div>
                <div>
                  <h1>We know what you are looking for</h1>
                  <p>We have +10 years experience working in Europe</p>
                </div>
              </div>
            </section>
            <section className="right">
              <Slider />
            </section>
            
          </div>
          
        </div>
        <div className="paragraph">
                  <p className="p1 vivify flipInX duration-10550 delay-500">
                    We have a talented team of professional web designers,
                    developers, and project managers worked in a harmonious
                    manner To achieve the best results on your bussiness at a
                    resonable cost.
                  </p>
                  <p className="p2">
                    Our team works in an agile/Scrum methodolgy, so every detail
                    of your requirements is recorded in the user story, and
                    implementation priorities are determined according to the
                    priorities of your work, and this is discussed at each
                    product cycle, which means we will achieve everything you
                    looking forward to it with the highest quality standards.
                  </p>
                </div>
      <div className="light_logo"></div>
                
      </header>
    </div>
  );
};
