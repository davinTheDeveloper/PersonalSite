import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="PortfolioPage">
            <div className="PortfolioBox">
            <h2 className="PortfolioHeader">Portfolio</h2>
            </div>
            <div className="PortfolioSection">
            <div>When I say I like to develop...</div>
            <div>
                <div className="PortProjects">
                    <div className="container">
                    <li>I enjoy solving problems</li>
                    <div className="project_1"></div>
                    </div>
                    <br />
                    <div className="container">
                    <li>I am passionate about helping people</li>
                    <div className="project_2"></div>
                    </div>
                    <br />
                    <div className="container">
                    <li>I learn by doing</li>
                <div className="project_3"></div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;