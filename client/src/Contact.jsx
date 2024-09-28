/* 
 * File name: Contact.jsx
 * Student's Name: Ian Haworth
 * StudentID: 301487971
 * Date: September 27th, 2024
 */


import React from 'react';

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form submission logic here if needed
        window.location.href = '/';
    };

    return (
        <>
            <h1>Contact Information</h1>
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', maxWidth: '400px', margin: '0 auto' }}>
                <p>Email: ihawort1@my.centennialcollege.ca</p>
                <p>Phone: (613) 888-1632</p>
                <p>Address: Kingston, Ontario</p>
            </div>
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" required />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" required />
                </div>
                <div>
                    <label htmlFor="contactNumber">Contact Number:</label>
                    <input type="tel" id="contactNumber" name="contactNumber" required />
                </div>
                <div>
                    <label htmlFor="emailAddress">Email Address:</label>
                    <input type="email" id="emailAddress" name="emailAddress" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}