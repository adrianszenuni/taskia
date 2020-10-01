import React from "react";
import Image from "../../assets/Image 5.png";
import "./ManagementTool.css";

const ManagementTool = () => {
  return (
    <div className="row management_tool d-flex justify-content-around m-0">
      <div className="col-lg-6 my-auto">
        <div className="col-lg-10">
          <h1 className="management_tool_heading">
            Task management and lists Tool
          </h1>
        </div>
        <div className="col-lg-8 mt-3">
          <p className="management_tool_description">
            We believe that designing products and services in close partnership
            with our clients is the only way to have a real impact on their
            business.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <input
              className="management_tool_input"
              type="text"
              placeholder="Name@company.com"
            />
          </div>
          <div className="col-lg-5">
            <button className="management_tool_button">Try it free</button>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <img className="img-fluid" src={Image} alt="Partnership" />
      </div>
    </div>
  );
};

export default ManagementTool;
