import React from "react";
import Card from "./card";
import Sdata from "./sdata";


const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto mb-5">
            <div className="row gy-4">
              
              {/* <Card /> */}
              {/* to get mare ad more components from js arrar(Sdata) so its required to create map */}
              {
                Sdata.map((val,ind)=>{
                  return <Card key={ind}
                  imgsrc={val.imgsrc}
                  title = {val.title}
                  />
                })

              }
           
           
           
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
