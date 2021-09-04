import React,{useState} from 'react'
import {QuestionAnswer,ToggleOff,ToggleOn,ExpandLess,ExpandMore,CloseRounded} from "@material-ui/icons"
import {Button} from "@material-ui/core" 
import CenterRightMiddle from './CenterRightMiddle'
import data from "./MapData"


const CenterRight = (props) => {

    const [toggle,setToggle]=useState(false)
    const [expand,setExpand]=useState(false)
 
    return (
        <>
        {/* if parameter is features then center-right will contain data else null */}
        {(props.route ==="features") &&
        
        
     
            <div className="right_side_container ">
            <CloseRounded className="close"/>
                            <div className="right_content_top d-flex align-items-end justify-content-between">
                                <div className="top_left d-flex align-items-center">
                                  <QuestionAnswer className="center_right_icons"/>
                                  <span>Audience Q&A</span>
                                </div>
                                <div className="top_right d-flex align-items-center">
                                <span onClick={()=>setToggle(!toggle)}>
                                    {
                                        toggle ? <ToggleOn className="center_right_icons toggle_on"/> 
                                        : <ToggleOff className="center_right_icons"/>
                                    }
                                </span>
                                <span onClick={()=>setExpand(!expand)}>
                                    {
                                        expand ? <ExpandMore className="expand_icon center_right_icons"/>
                                        : <ExpandLess className="expand_icon center_right_icons"/>
                                    }
                                </span>
                                
                                
                                </div>
                            </div>
                            <hr/>
                            <div className="right_content_middle" id="scroll">
                                 {
                                     !expand &&
                                     data.map((element)=>{
                                         return <CenterRightMiddle key={element.id} element={element}/>
                                     })
                                     
                                 }
                                  
                            </div>
                            <div className="right_content_bottom d-flex justify-content-end">
                            {
                               !expand && <Button className="button bottom_button">Save</Button>
                            }
                                
                            </div>
                        </div>
                    }
        </>
    )
}

export default CenterRight
