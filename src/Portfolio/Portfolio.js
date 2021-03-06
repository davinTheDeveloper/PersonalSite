/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="PortfolioPage">
            <div className="PortfolioBox">
                <h2 className="PortfolioHeader">Portfolio</h2>
            </div>
            <div className="PortfolioSection">
                <div> When I say I like to develop...</div>
                <div>
                    <div className="PortProjects">
                        <div className="container">
                            <li>I enjoy solving problems</li>
                                <a className="project_1" href='https://davinthedeveloper.github.io/compareCharacters.github.io/' target="_blank" rel="noreferrer noopener"> </a>
                        </div>
                        <br />
                        <div className="container">
                            <li>I am passionate about helping people</li>
                                <a className="project_2" href="https://davinthedeveloper.github.io/nonprofitTemplate/" target="_blank" rel="noreferrer noopener"> </a>
                        </div>
                        <br />
                        <div className="container">
                            <li>I learn by doing</li>
                                <a className="project_3" href="https://davinthedeveloper.github.io/decoderCyphers/" target="_blank" rel="noreferrer noopener"></a>
                            </div>
                        </div>
                        <div className="PortProjects">
                        <br />
                        <div className="container">
                            <li>I'm calculated...</li>
                                <a className="project_4" href="https://davinthedeveloper.github.io/Basic-Calculator/" target="_blank" rel="noreferrer noopener"></a>
                        </div>
                        <br />
                        <div className="container">
                            <li>I make games for learning...</li>
                                <a className="project_5" href="https://davinthedeveloper.github.io/wordGames/" target="_blank" rel="noreferrer noopener"></a>
                        </div>
                        <br />
                    </div>
                    <div className="container">
                        <li><a href="www.google.com" target="_blank" classname="resume" >Resume/CV</a></li>
                    </div>
                    <div className="container">
                        <div className="centerLink">
                            <a href='https://github.com/davinTheDeveloper' className="gitLink" target="_blank" rel="noreferrer noopener" ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;