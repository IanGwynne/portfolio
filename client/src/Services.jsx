/* 
 * File name: Services.jsx
 * Student's Name: Ian Haworth
 * StudentID: 301487971
 * Date: September 27th, 2024
 */

import React from 'react';

export default function Services() {
    return (
        <>
            <h1>Services Offered</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ margin: '20px', textAlign: 'center' }}>
                    <img src="./images/web_development.png" alt="Web Development" style={{ width: '100px', height: '100px' }} />
                    <h2>Web Development</h2>
                    <p>Creating responsive and dynamic websites.</p>
                </div>
                <div style={{ margin: '20px', textAlign: 'center' }}>
                    <img src="./images/mobile_apps.jpg" alt="Mobile Apps" style={{ width: '100px', height: '100px' }} />
                    <h2>Mobile Apps</h2>
                    <p>Developing user-friendly mobile applications.</p>
                </div>
                <div style={{ margin: '20px', textAlign: 'center' }}>
                    <img src="./images/general_programming.png" alt="General Programming" style={{ width: '100px', height: '100px' }} />
                    <h2>General Programming</h2>
                    <p>Providing solutions for various programming needs.</p>
                </div>
            </div>
        </>
    );
}