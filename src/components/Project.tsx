import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import Corridor from '../assets/images/RightCorridor.png'
import potion from '../assets/images/HealthRender.jpg';
import wood from '../assets/images/ToonWood.png'
import watch from'../assets/images/WatchRender.jpg'
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.artstation.com/artwork/1NmqQ8" target="_blank" rel="noreferrer"><img src={watch} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.artstation.com/artwork/1NmqQ8" target="_blank" rel="noreferrer"><h2>VFX and Game Production Studio</h2></a>
                <p>A simulated studio space where we had 1 week sprints and weekly team stand ups and used project management tools like Jira. I was one of the main modellers and created many models every week.</p>
            </div>
            <div className="project">
                <a href="https://www.artstation.com/artwork/qJa19y" target="_blank" rel="noreferrer"><img src={potion} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.artstation.com/artwork/qJa19y" target="_blank" rel="noreferrer"><h2>Synoptic Project</h2></a>
                <p>I created a level using my own intuition as a level designer at the time and gathered feedback from colleagues and friends about what I could improve upon and change and used that knowledge to create a universal level design system.(WIP)</p>
            </div>
            <div className="project">
                <a href="https://www.artstation.com/artwork/qJa19y" target="_blank" rel="noreferrer"><img src={Corridor} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.artstation.com/artwork/qJa19y" target="_blank" rel="noreferrer"><h2>Environmental storytelling</h2></a>
                <p>This is a Level I created by using industry standard techniques where I had to guide a player through the level without explicit instructions.</p>
            </div>
            <div className="project">
                <a href="https://www.artstation.com/artwork/bgAE8v" target="_blank" rel="noreferrer"><img src={wood} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.artstation.com/artwork/bgAE8v" target="_blank" rel="noreferrer"><h2>Personal Projects</h2></a>
                <p>This is a personal collection of models I have created for fun!</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;