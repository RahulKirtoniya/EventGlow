import React from "react";
import {
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp,
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
    const phoneNumber = "+918597138810"; // Replace with your phone number

    // Function to format the phone number for WhatsApp link
    const formatPhoneNumberForWhatsApp = (phoneNumber) => {
        return phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    };

    // Create the WhatsApp link
    const whatsappLink = `https://wa.me/${formatPhoneNumberForWhatsApp(phoneNumber)}`;

    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Contact Us</span>
                <span className="big-text">Reach Out, Let's Make Your Event Shine! Contact Us Now</span>
                {/* <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Mobile Number" />
                    <button>Submit</button>
                </div> */}
                <div className="text">FOLLOW US ON OUR VARIOUS SOCIAL PLATFORMS</div>
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                    <div className="icon">
                        <FaLinkedin size={14} />
                    </div>
                </div>
                {/* WhatsApp icon in its own div */}
                <div className="icon whatsapp-icon">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={50} />
                    </a>
                </div>

                {/* WhatsApp button with direct link */}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <button>Chat on WhatsApp</button>
                </a>
            </div>
        </div>
    );
};

export default Newsletter;
