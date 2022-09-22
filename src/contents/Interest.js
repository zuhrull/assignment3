import React, { Component } from 'react';
import intepic from '../img/interest.png';

class Interest extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myinterests':['CODING','SCI-FI','MOVIE','MUSIC','WAYANG','SWORD']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Interests<hr style={{maxWidth: "140px"}} /></h1>
            <ul className="absolute">
            {this.state.myinterests.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            <img src={intepic} alt="bg-about" className="bg-pic" />
            </div>
            )
        }
    }
    
    export default Interest
    