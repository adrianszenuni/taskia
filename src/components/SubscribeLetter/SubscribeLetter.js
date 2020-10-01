import React from "react";
import "./SubscribeLetter.css";

const SubscribeLetter = () => {
  return (
    <div className="subscribe_letter pb-5">
      <div className="row m-0">
        <div className="col-lg-12 ">
          <div className="d-flex  flex-column align-items-center">
            <h4 className="subscribe_letter_heading">Get better work done</h4>
            <div className="col-lg-3">
              <p className="subscribe_letter_description">
                See why millions of people across 195 countries use Dash.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0 mt-5 d-flex justify-content-center">
        <div className="col-lg-4 d-flex justify-content-end">
          <input
            className="subscribe_letter_input"
            type="text"
            placeholder="Name@company.com"
          />
        </div>
        <div className="col-lg-3">
          <button className="subscribe_letter_button">Try it free</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeLetter;
