import React from "react";
import { useState, useEffect } from "react";
import { BsClock, BsClockFill } from "react-icons/bs";
import 'font-awesome/css/font-awesome.min.css';

const Clock = (props) => {
    
    const [timeClock, setTimeClock] = useState()

    const getTime = () => {
        const time = new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
                timeZone: props.tzone
            })
            setTimeClock(time)
      }

    useEffect(() => {
        // setInterval(() => {
            getTime()
        //   },1000);
    })
  
    return( 
        <React.Fragment>   
            <div className="clock-icon">{timeClock < '22' && timeClock > '07' ? <BsClock size={35}/> : <BsClockFill size={35}/>}</div>
                <div className="item">
                <p><strong>{props.title}</strong> <br/>  
                Address line 1 <br/>
                Line 2 </p>
                <p>{timeClock}</p>
            </div>
        </React.Fragment>
    )
}

export default Clock