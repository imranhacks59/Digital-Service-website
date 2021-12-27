import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../image/web-dev1.jpg"


const Card = (props) => {
  return (
    <>
 
              <div className="col-md-4 col-10 mx-auto">
                  {/* card */}
                <div className="card" >
                  <img src={props.imgsrc} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">
                      we have a team of great developer.
                    </p>
                    <NavLink to="" className="btn btn-primary">
                     More details
                    </NavLink>
                  </div>
                </div>
              </div>
           
    </>
  );
};

export default Card;
