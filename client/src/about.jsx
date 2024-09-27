import React from 'react';

export default function About() {
    return (
      <>
        <h1>Ian Haworth</h1>
        <img src="./images/portfolio_image_me.jpg" alt="John Doe" style={{ width: '150px', height: '150px', borderRadius: '50%' }} /> 
            <p>
                Hello! My name is Ian Haworth. I am a student from Kingston, Ontario and I am taking classes at Centennial College. 
            </p>
            <a href="./resume/IanHaworthResume2023.pdf" target="_blank" rel="noopener noreferrer">
                View My Resume
            </a>
      </>
    );
  }