import React from 'react'
import {Lock} from "@material-ui/icons"
import {NavLink} from "react-router-dom"


const CenterLeft = () => {
 
    return (
        <>
            <div className="left_side_top d-flex align-items-center">
                        <span >Events Settings</span>
                    </div>

                    <ul className="list-unstyled d-flex flex-column ">
                        <NavLink to="/travel/other"  className="center_left_link">Privacy</NavLink>
                        <NavLink to="/travel/features" className="center_left_link">Features</NavLink>
                        <NavLink to="/travel/other" className="center_left_link">Customization</NavLink>
                        <NavLink to="/travel/other" className="center_left_link">Integration</NavLink>
                        <NavLink to="/travel/other" className="d-flex align-items-center center_left_link">
                        <span> Session Settings</span>
                       
                        <Lock className="ms-2"/>
                        </NavLink>
                        <NavLink to="/travel/other" className="center_left_link">My Plans</NavLink>
                    </ul>
        </>
    )
}

export default CenterLeft
