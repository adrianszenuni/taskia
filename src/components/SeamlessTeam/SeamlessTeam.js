import React from "react";
import "./SeamlessTeam.css";
import TeamImage from "../../assets/seamlessteam.png";
import AppleLogo from "../../assets/applelogo.png";
import PlaystoreLogo from "../../assets/playstorelogo.png";

const SeamlessTeam = () => {
  return (
    <div className="seamless_team">
      <div className="row d-flex justify-content-around m-0">
        <div className="col-lg-6 seamless_team_container ml-5">
          <h4 className="seamless_team_heading mt-5">Seamless Team Workflow & Efficient Task Management</h4>
       <div className="col-lg-9 mt-5">
       <p className="seamless_team_description">
            Do you waste time organizing sticky notes, searching your email and
            apps for to-dos, and figuring out what to work on first? Then you
            need one solution to prioritize your tasks, manage your time, and
            meet your deadlines.
          </p>
       </div>
          <div className="row mt-5">
            <div className="col-lg-2 col-md-2 col-sm-2 logos">
                <img className="img-fluid" src={AppleLogo} alt="Apple Logo"/>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 logos">
                <img className="img-fluid" src={PlaystoreLogo} alt="Playstore Logo"/>
            </div>
          </div>
        </div>
        <div className="col-lg-5 d-flex justify-content-center seamless_team_image" >
          <img src={TeamImage} alt="Team" />
        </div>
      </div>
    </div>
  );
};

export default SeamlessTeam;
