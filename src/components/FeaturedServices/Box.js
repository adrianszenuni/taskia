import React from "react";
import "./Box.css";

const Box = ({ img, alt, background, color }) => {
  return (
    <div
      className={`${background} service_box d-flex flex-column align-items-center`}
    >
      <img className="service_box_image mt-5" src={img} alt={alt} />
      <h4 className={` ${color} service_box_heading `}>
        Keep tasks in one place
      </h4>
      <p className={` ${color} service_box_description mt-3 `}>
        Save time, avoid losing work and information, delegate, and track tasks
        to stay on schedule
      </p>
    </div>
  );
};

export default Box;
