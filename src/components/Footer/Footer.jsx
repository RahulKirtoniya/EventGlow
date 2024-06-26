// Footer.jsx
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col" id="about-section">
                    <div className="title">About</div>
                    <div className="text">
                        EventGlow: Elevating celebrations with style. From lively parties and gourmet catering to birthday bashes, chic decorations, and skilled makeup artistry—experience the glow of urban sophistication.
                    </div>
                </div>
                <div className="col" id="categories-section">
                    <div className="title">Categories</div>
                    <div className="text">Wedding Ceremony</div>
                    <div className="text">Birthday Celebrations</div>
                    <div className="text">Various Event Organizer</div>
                    <div className="text">Party Event</div>
                    <div className="text">Entertainment</div>
                    <div className="text">Catering Service</div>
                </div>
                {/* ... (existing code) */}
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        EventGlow 2024 Created By Group-VII.
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
