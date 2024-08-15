import React from 'react'
import './Contact.css'

import msg_icon from '../../assets/icons/msg_icon.png'
import phone_icon from '../../assets/icons/phone_icon.png'
import email_icon from '../../assets/icons/mail_icon.png'
import point_icon from '../../assets/icons/point_icon.png'
import white_arrow from '../../assets/icons/white_arrow.png'

export const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "375108ab-6101-4c80-b271-baa27c669032");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className='contact'>
            <div className="contact-call">
                <h3>Send us a message <img src={msg_icon} alt=""/></h3>
                <p>Feel free to reach out through contact form or find
                    our contact information below. Your feedback, questions,
                    and suggestions are important to us as we strive to provide
                    exceptional service to our university community.</p>
                <ul>
                    <li><img src={email_icon} alt=""/>Contact@GreatStack.dev</li>
                    <li><img src={phone_icon} alt=""/>+1 123-456-7890</li>
                    <li><img src={point_icon} alt=""/>77 Massachusetts Ave, Cambridge<br/>
                        MA 02139, United States
                    </li>
                </ul>
            </div>
            <div className="contact-call">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label>Your number</label>
                    <input type="tel" name='phone' placeholder='Enter your phone number' required />
                    <label>Write your message here</label>
                    <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt=""/></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}
