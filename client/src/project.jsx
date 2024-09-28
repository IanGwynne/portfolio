/* 
 * File name: project.jsx
 * Student's Name: Ian Haworth
 * StudentID: 301487971
 * Date: September 27th, 2024
 */

import React from 'react';

// Component: Project
export default function Project() {
    return (
        <>
            {/* Section: Projects Header */}
            <h1>My Projects</h1>
            
            {/* Section: Project List */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                {/* Project 1 */}
                <div style={{ margin: '20px', textAlign: 'center' }}>
                    <img src="./images/portfolio.png" alt="Project 1" style={{ width: '768px', height: '432px' }} />
                    <h2>Project 1: Portfolio</h2>
                    <p>Role: Frontend Developer</p>
                    <p>Outcome: Developed a responsive website using React.js and CSS.</p>
                </div>
                
                {/* Project 2 */}
                <div style={{ margin: '20px', textAlign: 'center' }}>
                    <img src="./images/rockpaperscissors.png" alt="Project 2" style={{ width: '250px', height: '400px' }} />
                    <h2>Project 2: Mobile App</h2>
                    <p>Role: Developer</p>
                    <p>Outcome: Created a rock paper scissors app using java.</p>
                </div>
                
                {/* Project 3 */}
                <div style={{ margin: '20px', textAlign: 'center' }}>
                    <img src="./images/unity.png" alt="Project 3" style={{ width: '768px', height: '432px' }} />
                    <h2>Project 3: Game Development</h2>
                    <p>Role: Developer</p>
                    <p>Outcome: Currently developing a stealth game with unity</p>
                </div>
            </div>
        </>
    );
}