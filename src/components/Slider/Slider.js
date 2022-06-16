import React from "react";
import { Link } from "react-router-dom";
import "./slider.css";
export const Slider = () => {


  return (
   
      <div className="All_shapes">
        <div className="circl_shap">
          <div className="sh1" />
          <div className="sh2" />
        </div>
        <div className="poly_shap">
          <div className="poly1"  id= "poly1">
            <h4 id="head1"> Dedicated Development Teams</h4>
            <hr />
            <p id="p1">
              Our specialized team At Appittuneity builds various web
              applications such as administrative, financial and educational
              applications,and more. regardless of the size of you business and
              the number <Link to={'/'}>Read more ..</Link>
            </p>
          </div>
          <div  id="poly2" >
            <h4 id="head2" >Mobile App Development</h4>
            <hr />
            <p id="p2">
              Our specialized team At Appittuneity builds various web
              applications such as administrative, financial and educational
              applications,and more. regardless of the size of you business and
              the number <Link to={'/'}>Read more ..</Link>
            </p>
          </div>
          <div  id="poly3">
            <h4 id="head3" >Custom Software Development </h4>
            <hr />
            <p id="p3">
              Our specialized team At Appittuneity builds various web
              applications such as administrative, financial and educational
              applications,and more. regardless of the size of you business and
              the number <Link to={'/'}>Read more ..</Link>
            </p>
          </div>
          <div  id="poly4">
            <h4 id="head4" >Web Application Development</h4>
            <hr />
            <p id="p4">
              Our specialized team At Appittuneity builds various web
              applications such as administrative, financial and educational
              applications,and more. regardless of the size of you business and
              the number <Link to={'/'}>Read more ..</Link>
            </p>
          </div>
        </div>
      </div>
   
  );
};
