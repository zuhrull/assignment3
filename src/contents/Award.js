import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import awapic from '../img/award.png';

class Award extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Awards<hr style={{maxWidth: "130px"}} /></h1>
            <Widecard title="Runner Up" where="National Server Admin Competition" from="December 2017" to="Universitas Muhammadiyah Purwokerto"/>
            <div className="absolute">
            <Widecard title="Finalist" where="Network Admin Competition" from="August 2019" to="SMK N 1 Cilacap"/>
            <Widecard title="Participant" where="STEM Competition by RedHat" from="August 2022" to="techready.id"/>
            </div>
            <img src={awapic} alt="bg-about" className="bg-pic" />
            </div>
            )
        }
    }
    
export default Award
    