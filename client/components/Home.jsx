import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Welcome to my website</h1>
            <p>My name is Ian Haworth and I am a developer</p>
            <p>Click on the button below to learn more about me</p>
            <Link to="/about">
                <button>About Me</button>
            </Link>
            <p>Mission Statement: To showcase my skills and projects in development.</p>
        </div>
    )
    }
    