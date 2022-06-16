import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [flag , setFlag] = useState(true)
  const [height , setHeight] = useState(false)
  const handeldown = (e) => {
  e.preventDefault()
  setFlag(!flag)
  }
  
  const changeBD = () =>  {
    if(window.scrollY >= 100 )
    {
      setHeight(true)
    }
    else{
      setHeight(false)

    }
  }
useEffect(() => {
  window.addEventListener('scroll', changeBD)
}, [])
  return (
    <div>
      <nav>
        <div className={height ? "content2" : "content"}>
          <div className="container">
          <div className="logo">
          <Link className="brand vivify unfold duration-10550 delay-500" to={"/"} />
          </div>
            <section className="links">
             <i onClick={handeldown} className="fa fa-bars" aria-hidden="true"></i>
      
              <ul className={flag ? "hide" : "show"}>
                <li>
                  <Link to={"/"}>HOME</Link>
                </li>
                <li>
                  <Link to={"#service"}>SERVIES</Link>
                </li>
                <li>
                  <Link to={"/"}>SKILLS</Link>
                </li>
                <li>
                  <Link to={"/"}>INDUSTRIES</Link>
                </li>
                <li>
                  <Link to={"/"}>BLOGS</Link>
                </li>
                <li>
                  <Link to={"/"}>WE ARE HIRING</Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </nav>
    </div>
  );
};
