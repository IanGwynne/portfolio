import React from 'react';

// Functional component to display the services offered
export default function Services() {
    return (
        <>
            {/* Main heading for the services section */}
            <h1>Services Offered</h1>
            
            {/* Container for the services, using flexbox for layout */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                {/* Web Development service */}
                <div style={{ margin: '20px', textAlign: 'center' }}>
                    <img src="./images/web_development.png" alt="Web Development" style={{ width: '100px', height: '100px' }} />
                    <h2>Web Development</h2>
                    <p>Creating responsive and dynamic websites.</p>
                </div>
                
                {/* Mobile Apps service */}
                <div style={{ margin: '20px', textAlign: 'center' }}>
                    <img src="./images/mobile_apps.jpg" alt="Mobile Apps" style={{ width: '100px', height: '100px' }} />
                    <h2>Mobile Apps</h2>
                    <p>Developing user-friendly mobile applications.</p>
                </div>
                
                {/* General Programming service */}
                <div style={{ margin: '20px', textAlign: 'center' }}>
                    <img src="./images/general_programming.png" alt="General Programming" style={{ width: '100px', height: '100px' }} />
                    <h2>General Programming</h2>
                    <p>Providing solutions for various programming needs.</p>
                </div>
            </div>
        </>
    );
}