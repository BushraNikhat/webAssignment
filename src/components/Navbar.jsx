import React from 'react'
import {Sort,Battery20Outlined,LockOpenOutlined} from "@material-ui/icons"

const Navbar = () => {
    return (
        <>
            <div className="navbar p-0 shadow">
                <div className="navbar_container d-flex align-items-center justify-content-between  flex-grow-1">
                    <div className="nav_left d-flex align-items-center">
                        <Sort className="hamburger"/>
                        <h3 className="m-0">Admin Dashboard</h3>
                    </div>
                    <div className="nav_right d-flex align-items-center">
                        <span>Preview on: </span>
                
                        <Battery20Outlined className="icons"/>
                        
                        <LockOpenOutlined className="icons"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
