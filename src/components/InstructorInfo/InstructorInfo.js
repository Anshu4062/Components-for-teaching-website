import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import images from "../images";
import "./InstructorInfo.css";

const InstructorInfo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target.querySelectorAll("img"),
              { opacity: 0 },
              { opacity: 1, duration: 1, stagger: 0.2 }
            );
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <h1 className="heading">Our Instructors</h1>
      <img className="css-margin" src={images.instructorDemoImage1} alt="" />
      <img src={images.instructorDemoImage2} alt="" />
      <img src={images.instructorDemoImage3} alt="" />
      <img src={images.instructorDemoImage4} alt="" />
    </div>
  );
};

export default InstructorInfo;
