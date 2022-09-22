import React, { Component } from 'react';
import Social from '../components/Social';
import conpic from '../img/contact.png';

class Contact extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Contact Me<hr style={{maxWidth: "130px"}} /></h1>
            <h3>Email  :   zuhrulikfa19@gmail.com</h3>
            <h3>Instagram   :   @zuhrull.e</h3>
            <img src={conpic} alt="bg-about" className="bg-pic" />
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    