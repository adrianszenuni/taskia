import React from "react";
import TaskManagementImage from "../../assets/taskmanagement.png";
import "./WhyTaskManagement.css";

const WhyTaskManagement = () => {
  return (
    <div className="task_management">
      <div className="row m-0">
        <div className="col-lg-6 d-flex justify-content-center">
          <img
            className="img-fluid"
            src={TaskManagementImage}
            alt="Task management"
          />
        </div>
        <div className="col-lg-5">
          <h4 className="task_management_heading">
            Why do you need task management software?
          </h4>

          <p className="task_management_description mt-5">
            Do you waste time organizing sticky notes, searching your email and
            apps for to-dos, and figuring out what to work on first? Then you
            need one solution to prioritize your tasks, manage your time, and
            meet your deadlines.
          </p>

          <button className="task_management_button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default WhyTaskManagement;
