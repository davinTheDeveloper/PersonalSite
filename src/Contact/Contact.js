/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Contact.css';

function Contact() {

    return (
        <div className="ContactPage">
        <div className="ContactBox">
            <h2 className="ContactHeader">Contact</h2>
        </div>
        <div className="ContactSection">
            <div>(/* -- Thanks for visiting... -- */)</div>
            </div>
        <div className="contactLinks">
            <li className="emailLink">
        <a href='mailto:davinthedeveloper@gmail.com' target="_blank" rel="noreferrer noopener"> </a>
        </li>
        <li className="linkedinLink">
        <a href='https://www.linkedin.com/in/davinhenrik/' target="_blank" rel="noreferrer noopener"></a>
        </li>
        </div>
        </div>
    );
};

export default Contact;