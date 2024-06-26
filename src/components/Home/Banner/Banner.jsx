import React, { useState, useEffect } from "react";
import "./Banner.scss";
import BannerImg1 from "../../../assets/banner-img1.jpeg";
import BannerImg2 from "../../../assets/banner-img2.jpeg";
import BannerImg3 from "../../../assets/banner-img3.jpg";
import BannerImg4 from "../../../assets/banner-img4.jpg";
import "./Banner.scss"; // Import your SCSS file

const Banner = () => {
    const bannerContent = [
        {
            image: BannerImg1,
            text: "50+ TYPES OF INDIAN DECORATION ARE AVAILABLE",
        },
        {
            image: BannerImg2,
            text: "GET EXTRA 15% OFF YOUR FIRST ORDER",
        },
        {
            image: BannerImg3,
            text: "YOUR EVENT, OUR EXPERTISE: DELIVERING UNFORGETTABLE EXPERIENCES",
        },
        {
            image: BannerImg4,
            text: "BRINGING YOUR EVENTS TO LIFE: OUR PROFESSIONAL TOUCH",
        },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerContent.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const bannerStyle = {
        backgroundImage: `url(${bannerContent[currentImageIndex].image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "100vh",
    };

    return (
        <div className="hero-banner" style={bannerStyle}>
            <div className="content">
                <div className="text-content-container">
                    <div className="text-content">
                        <p>{bannerContent[currentImageIndex].text}</p>
                    </div>
                </div>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Book Now</div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
