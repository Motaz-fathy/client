import React from "react";
import { Link } from "react-router-dom";
import "./services.css";
export const Services = () => {
  return (
    <div className="service" id="service">
      <h2>OUR SERVICES </h2>
      <div className="container">
      

        <div className="row vivify unfold duration-40550 delay-2000">
          <div className="col">
            <div className="card_service_mov">
              <h4 className="head">Web Application Development</h4>
              <hr />
              <p className="serP">
                Our specialized team At Appittuneity builds various web
                applications such as administrative, financial and educational
                applications,and more. regardless of the size of you business
                and the number
                <Link to={"/"}>read more .. </Link>
              </p>
              <img
                src={"./assetes/services/1.png"}
                alt="icon"
                className="icon"
              />
            </div>
          </div>
          <div className="col">
            <div className="card_service_green">
              <h4 className="head">Custom Software Development</h4>
              <hr />
              <p className="serP">
                To build your next software project and get an optimal solution
                in terms of performance, security, project cost and scalability
                for your dedicated software, we at Appittuneity have the
                multifunc..
                <Link to={"/"}>read more .. </Link>
              </p>
              <img
                src={"./assetes/services/2.png"}
                alt="icon"
                className="icon"
              />
            </div>
          </div>
          <div className="col">
            <div className="card_service_red">
              <h4 className="head">Mobile App Development</h4>
              <hr />
              <p className="serP">
                We provide you with comprehensive features and services in your
                mobile applications to increase the levels of communication and
                engagement with your customers, and thus increas..
                <Link to={"/"}>read more .. </Link>
              </p>
              <img
                src={"./assetes/services/3.png"}
                alt="icon"
                className="icon"
              />
            </div>
          </div>
          <div className="col">
            <div className="card_service_blue">
              <h4 className="head">Dedicated Development Teams</h4>
              <hr />
              <p className="serP">
                At Appittuneity, we have dedicated DvOps engineers who are ready
                to help you build, organize and manage your software projects,
                no matter how huge. We believe that automat..
                <Link to={"/"}>read more .. </Link>
              </p>
              <img
                src={"./assetes/services/4.png"}
                alt="icon"
                className="icon"
              />
            </div>
          </div>
        </div>
        <div className="row vivify unfold duration-40550 delay-3000">
          <div className="col">
            <div className="card_service_mov">
              <h4 className="head">DevOps Engineers</h4>
              <hr />
              <p className="serP">
                We believe that automating software development and delivery is
                the key to success in large and a constantly developing project,
                so our DvOps engineers help you organize your project codes in..
                <Link to={"/"}>read more .. </Link>
              </p>
              <img
                src={"./assetes/services/5.png"}
                alt="icon"
                className="icon"
              />
            </div>
          </div>
          <div className="col">
            <div className="card_service_green">
              <h4 className="head">Creative Design</h4>
              <hr />
              <p className="serP">
                At Appittuneity, we give great importance to creative design,
                because we believe that a good design for your website or mobile
                application is able to direct the attention of your customers
                and website visitors to..
                <Link to={"/"}>read more .. </Link>
              </p>
              <img
                src={"./assetes/services/6.png"}
                alt="icon"
                className="icon"
              />
            </div>
          </div>
          <div className="col">
            <div className="card_service_red">
              <h4 className="head">Testing & QA</h4>
              <hr />
              <p className="serP">
                For more than ten years, Appittuneity has built a testing team
                experienced in various industries, So whatever the size of your
                software project, our test experts can get to the depths of your
                code in a few days, validating..
                <Link to={"/"}>read more .. </Link>
              </p>
              <img
                src={"./assetes/services/7.png"}
                alt="icon"
                className="icon"
              />
            </div>
          </div>
          <div className="col">
            <div className="card_service_blue">
              <h4 className="head">AL ML Modules</h4>
              <hr />
              <p className="serP">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standardLorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem..
                <Link to={"/"}>read more .. </Link>
              </p>
              <img
                src={"./assetes/services/8.png"}
                alt="icon"
                className="icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="risk">
        <div className="container">
          <div className="rp">
            <p className="p1">
              Risk free deals allows you to trial your team before you hire them
            </p>
            <p className="p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.{" "}
            </p>
          </div>
          <p id="lp" >15+ years Of experience in the big Tech</p>
        </div>
      </div>
    </div>
  );
};
