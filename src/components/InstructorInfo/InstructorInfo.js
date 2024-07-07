import React, { useEffect } from "react";
import gsap from "gsap";
import images from "../images";
import "./InstructorInfo.css";

const InstructorInfo = () => {

    useEffect(() => {
        // Select all images and apply the opacity animation
        gsap.from("img", {
            duration: 1,
            opacity: 0,
            stagger: 0.2
        });
    }, []);

    return (
        <div>
            <h1 className="heading">Our Instructors</h1>
            <img className="css-margin" src={images.instructorDemoImage1} alt="" />
            <img src={images.instructorDemoImage2} alt="" />
            <img src={images.instructorDemoImage3} alt="" />
            <img src={images.instructorDemoImage4} alt="" />
        </div>
    )
}

export default InstructorInfo;
