import React from "react";
import "./FeaturedServices.css";
import TeaImage from "../../assets/tea.png";
import WalletImage from "../../assets/wallet.png";
import PocketKnifeImage from "../../assets/pocke-knife.png";
import Box from "./Box";

const FeaturedServices = () => {
  return (
    <div className="featured_services">
      <div className="row m-0 p-5">
        <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
          <h1 className="featured_services_heading">
            Featured Service that We Provide
          </h1>
        </div>
      </div>
      <div className="featured_services_boxes">
        <div className="row m-0 d-flex justify-content-around">
          <div className="col-lg-4  col-sm-12 d-flex justify-content-end ">
            <Box img={TeaImage} background="purple" color="white" alt="tea" />
          </div>
          <div className="col-lg-4  col-sm-12 d-flex justify-content-center">
            <div className="featured_services_boxes_box2">
              <Box img={WalletImage} background="light-blue" alt="wallet" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="featured_services_boxes_box3">
              <Box img={PocketKnifeImage} background="yellow" alt="knife" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
