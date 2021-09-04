import React from "react";
import { Assessment, Timeline, Group, Drafts } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const Leftbar = () => {
  return (
    <>
      <div className="leftbar sidebar shadow">
        <div className="leftbar_container">
          <div className="leftbar_content d-flex flex-column align-items-center">
            <img src="/images/web_logo.png" alt="logo" />

            <NavLink to="/" className="icon_container d-flex align-items-center  flex-column">
              <Assessment className="leftbar_icons" />
              <span>Events</span>
            </NavLink>
            <NavLink to="/travel" className="icon_container d-flex align-items-center flex-column">
              <Group className="leftbar_icons" />
              <span>Travels</span>
            </NavLink>
            <NavLink to="/" className="icon_container d-flex align-items-center flex-column">
              <Timeline className="leftbar_icons " />
              <span>Analytics</span>
            </NavLink>
            <NavLink to="/" className="icon_container d-flex align-items-center flex-column">
              <Drafts className="leftbar_icons" />
              <span>Results</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftbar;
