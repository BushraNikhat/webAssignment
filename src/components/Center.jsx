import React from 'react'

import CenterLeft from './CenterLeft'
import CenterRight from './CenterRight'
import { useParams } from 'react-router'

const Center = (props) => {
  const {route}=useParams()

    return (
        <>
        {/* if no props passed from the router center component will be empty else full. */}
        {props.empty ? <div className="center shadow">
              <div className="row center_container g-0 ">

              </div>
              </div>
              :
              
              <div className="center shadow ">
              <div className="row center_container g-0 ">
             
              
                  <div className="left_side col-lg-2 col-md-3  col-4">
                    <CenterLeft/>

                  </div>
                  <div className="right_side col-lg-10  col-md-9 col-8 shadow ">
                    <CenterRight route={route}/>
                       
                  </div>
                  
              </div>
            </div>
              }
            
        </>
    )
}

export default Center
