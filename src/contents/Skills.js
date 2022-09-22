import React, { Component } from 'react';
import skillpic from '../img/skills.png';

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['HTML','CSS','JS','REACT JS','REACT NATIVE','FIGMA','ADOBE XD']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills<hr style={{maxWidth: "100px"}} /></h1>
            <ul className="absolute">
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            <img src={skillpic} alt="bg-about" className="bg-pic" />
            </div>
            )
        }
    }
    
    export default Skills
    