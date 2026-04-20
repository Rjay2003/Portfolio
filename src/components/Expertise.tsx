import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons';
import {faBezierCurve} from '@fortawesome/free-solid-svg-icons';
import {faCompassDrafting} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Unreal Engine",
    "Unity",
];

const labelsSecond = [
    "Blender",
    "Maya",
];

const labelsThird = [
    "Adobe 3D Substance Painter"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCompassDrafting} size="3x" />
                    <h3>Level Design</h3>
                    <p>I have 3 years of experience designing levels. I love the aesthetics of an overgrown, abandoned city and I also enjoy the vibe of a cozy fireplace.  </p>
                    <div className="flex-chips">
                        <span className="chip-title">Software:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBezierCurve}  size="3x" />
                    <h3>3D Modelling</h3>
                    <p>This is my main area of expertise, I have 3 years of experience modelling props for environments like a lamp post and also interactable models such as a health potion.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Software:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPaintbrush} size="3x" />
                    <h3>Texture Painting</h3>
                    <p>I have about 2 years of experience in this area, but I really enjoy the process of picking the correct texture for my models. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Software:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;