import React from 'react';
import './About.css';


function About() {

    return (
        <div className="AboutPage" id="About">
            <div className="AboutBox">
            <h2 className="AboutHeader">About</h2>
            </div>
            <div className="AboutSection">
                <div className="AboutTitle">So....what is a Davin Henrik?</div>
                <div className="davinImage">
                </div>
                <ul>
                    <li className="li_1">iCode</li>
                    <li className="li_2">iDevelop</li>
                    <li className="li_3">iDrinkCoffee</li>
                    <li className="li_4">iStudyCrypto</li>
                    <li className="li_5">iAmOptomistic</li>
                </ul>
                </div>
                <div className="AboutVideoContainer">
                <div className="AboutMe">
                    Here's a little more....
                </div>
                <div className="DavinVideo"></div>
                </div>
        </div>
    );
};

export default About;

