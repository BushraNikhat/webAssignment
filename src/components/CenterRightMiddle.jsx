import React, { useState } from "react";
import { ToggleOff, ToggleOn } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const CenterRightMiddle = (props) => {
  const [toggle, setToggle] = useState(false);
  const { heading, topic, button } = props.element;


  return (
    <>
      <div className="middle_content d-flex align-items-center justify-content-between mb-3 ">
        <div className="">
          <h3 className="m-0">{heading}</h3>
          <span className="topic">{topic}</span>
          {button && (
            <div className="d-flex justify-content-around mt-2">
              <Button
                variant="outlined"
                color="primary"
                className="middle_button button"
              >
                {button[0]}
              </Button>
              <Button variant="outlined" className="middle_button button">
                {button[1]}
              </Button>
              <Button variant="outlined" className="middle_button button">
                {button[2]}
              </Button>
            </div>
          )}
        </div>
        <span onClick={() => setToggle(!toggle)} >
          {toggle ? (
            <ToggleOn className="center_right_icons toggle_on" />
          ) : (
            <ToggleOff className="center_right_icons" />
          )}
        </span>
      </div>
    </>
  );
};

export default CenterRightMiddle;
