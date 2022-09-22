import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import exppic from '../img/experience.png';

class Experience extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Experience<hr style={{maxWidth: "180px"}} /></h1>
            <Widecard title="Web Administrator" where="Anwaarunnajaah Boarding School" from="August 2019" to="Present"/>
            <div className="absolute">
             <Widecard title="Web Programming Leader" where="STARLABS" from="2021" to="Present"/>
            </div>
            <img src={exppic} alt="bg-about" className="bg-pic" />
            </div>
            )
        }
    }
    
export default Experience
    