import React from "react";
import Clock from './components/Clock.js'
import "./components/Clock.css"

const App = () => {

    const london = "Europe/London"
    const tokyo = "Asia/Tokyo"
    const newYark = "America/New_york"

    return (
        <div className="container-block">
            <Clock tzone = {london} title = {'London'} />
            <Clock tzone = {newYark} title = {'New York'} />
            <Clock tzone = {tokyo} title = {'Tokyo'} />
        </div>
        )

}
export default App;