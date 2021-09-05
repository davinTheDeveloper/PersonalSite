/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './About.css';


function About() {

    return (
        <div className="AboutPage" id="About">
            <div className="AboutBox">
                <h2 className="AboutHeader">About</h2>
            </div>
            <div className="AboutSection">
                <div className="AboutTitle">(/* -- So....what is a Davin Henrik? -- */)</div>
                <div className="davinImage">
                </div>
                <ul>
                    <li className="li_1">iCode</li>
                    <li className="li_2">iDrinkCoffee</li>
                    <li className="li_3">iDevelop</li>
                    <li className="li_4">iStudyCrypto</li>
                    <li className="li_5">iAmOptomistic</li>
                </ul>
            </div>
            <div className="AboutVideoContainer">
                <div className="AboutMe">
                    (/* -- Here's a little more.... -- */)
                </div>
                <div className="Container_2">
                    <div>
                        <h3 className="h_size">Web Development</h3>
                        <ul className="listSize">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            </ul></div>
                    <div>
                        <h3 className="h_size">Back-end Development</h3>
                        <ul className="listSize">
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="h_size">Application/Software Development</h3>
                        <ul className="listSize" >
                            <li>React</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="h_size">Spreadsheet Applications</h3>
                        <ul className="listSize">
                            <li>MS Excel</li>
                            <li>Google Sheets</li>
                        </ul>
                       
                    </div>
                    <div className="centerImg">
                    <div className="davinImage_2"></div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;

