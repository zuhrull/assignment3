import React, { Component } from 'react';
import aboutpic from '../img/about.png';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me<hr style={{maxWidth: "100px"}} /></h1>
            <h4>Hey there,</h4>
            <h1>I'm Zuhrul Ikfa</h1>
            <h3>React <u>Developer</u> | UI/UX <u>Designer</u></h3>
            <br></br>
            <p>I love programming since I was in high school, I keep learning especially 
                in web programming. I want to one day become an expert in this field, making 
                masterpieces that can be enjoyed by many people. Follow my learning journey 
                via github and instagram.
            </p>
            <img src={aboutpic} alt="bg-about" className="bg-pic" />
            </div>
            )
        }
    }
    
export default About
    