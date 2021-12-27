import React from "react";
import { NavLink } from "react-router-dom";
import web from "../image/screen-rocket.svg"

const Common = (props) => {
  return (
    <>
      {/* <h4>Welcome to home page</h4> */}
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto"></div>
            {/* take another row of image */}
            <div className="row">
            {/* left dow container */}
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>
                {/* Grow your business with{" "} */}
                {props.name}
                <strong className="brand-name">Tech.Ai</strong>
              </h1>
              <h2 className="my-3">we are a team of a developer</h2>
              <div className="mt-3">
                {/* <NavLink to='/Service' className="btn-get-started"> */}
                <NavLink to={props.visit} className="btn-get-started">
                  {props.btname}
                </NavLink>
              </div>
            {/* </div> */}
            </div>

            {/* right image container */}
            <div className="col-lg-6 order-1 order-2 header-img">
              
            {/* <img src={web} className="img-fluid animated" alt="home img" /> */}
 
            <img src={props.imgsrc} className="img-fluid animated" alt="home img" />


            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
