import React from "react";
import "./Statistics.css";
import BigSmileyMember from "../../assets/smileymember_big.png";
import BigSeriousMember from "../../assets/seriousmember_big.png";
import MediumSeriousMember from "../../assets/seriousmember_medium.png";
import SmallSeriousMember from "../../assets/seriousmember_small.png";
import SmallSmileyMember from "../../assets/smileymember_small.png";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="row m-0 d-flex justify-content-center">
        <div className="col-lg-1 mt-5 statistics_first_member">
          <img
            className="img-fluid "
            src={BigSmileyMember}
            alt="Smiley Member"
          />
        </div>
        <div className="col-lg-8 d-flex justify-content-center">
          <h4 className="statistics_heading">
            Trust us and feel free to try our service
          </h4>
        </div>
        <div className="col-lg-1 statistics_second_member mt-3">
          <img
            className="img-fluid"
            src={BigSeriousMember}
            alt="Serious Member"
          />
        </div>
      </div>
      <div className="row m-0 d-flex justify-content-center">
        <div className="col-lg-1 mt-5 hide_on_mobile">
          <img
            className="img-fluid"
            src={MediumSeriousMember}
            alt="Serious Member"
          />
        </div>
        <div className="col-lg-5 d-flex justify-content-center">
          <h1 className="statistic_number">100 000</h1>
        </div>
        <div className="col-lg-1 hide_on_mobile">
          <img
            className="img-fluid"
            src={SmallSeriousMember}
            alt="Serious Member"
          />
        </div>
      </div>
      <div className="row m-0 d-flex justify-content-between">
        <div className="col-lg-3 hide_on_mobile">
          <div className="d-flex justify-content-center">
            <img
              className="img-fluid"
              src={SmallSmileyMember}
              alt="Smiley Member"
            />
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center hide_on_mobile">
          <img
            className="img-fluid"
            src={BigSmileyMember}
            alt="Smiley Member"
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
