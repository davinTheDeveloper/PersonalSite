/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './About.css';


function About() {

    return (
        <div className="AboutPage" >
            <div className="AboutBox">
                <h2 className="AboutHeader">About</h2>
            </div>
                <div className="AboutSection">
                    <div className="imageControl">
                <div className="davinImage">
                </div>
                </div>
                <div className="listControl">
                    <div className="listContHeight">
                        <h3 className="h_size">Front-end:</h3>
                        <ul className="listSize">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Reactjs</li>
                            <li>Bootstrap</li>
                            </ul></div>
                    <div className="listContHeight">
                        <h3 className="h_size">Back-end:</h3>
                        <ul className="listSize">
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                    <div className="listContHeight">
                        <h3 className="h_size">Spreadsheet Applications</h3>
                        <ul className="listSize">
                            <li>MS Excel</li>
                            <li>Google Sheets</li>
                        </ul>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default About;

