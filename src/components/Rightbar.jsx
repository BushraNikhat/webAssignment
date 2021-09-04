import React from "react";
import { AdjustOutlined, Notifications } from "@material-ui/icons";

const Rightbar = () => {
  return (
    <>
      <div className="rightbar sidebar shadow">
        <div className="right_container">
          <div className="rightbar_content d-flex flex-column align-items-center">
            <img
              src="/images/profile.jpg"
              alt="profile"
              className="profile_pic"
            />
            <div  className="right_badge  mt-2 ">
            <span></span>
            <Notifications className="rightbar_icons" />
            </div>
            <div variant="dot"  className="right_badge  mt-2" >
            <span></span>
            <i className="fas fa-comments rightbar_icons " ></i>
            </div>
            
            
            <AdjustOutlined className="rightbar_icons mt-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
