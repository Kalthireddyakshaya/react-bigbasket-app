import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About BigBasket</h2>
      <p className="about-description">
        BigBasket is India's leading online grocery store, delivering fresh, high-quality groceries to your doorstep. We are dedicated to making grocery shopping easier, more affordable, and accessible to everyone across the country.
      </p>
      <div className="mission">
        <h3>Our Mission</h3>
        <p>
          Our mission is to simplify the grocery shopping experience by offering a wide range of high-quality products, timely delivery, and exceptional customer service.
        </p>
      </div>
      <div className="values">
        <h3>Our Values</h3>
        <ul>
          <li>Quality: We ensure that all our products are fresh and of the highest quality.</li>
          <li>Convenience: Shop from the comfort of your home and have your groceries delivered at your convenience.</li>
          <li>Trust: We value our customers' trust and provide transparent services with no hidden fees.</li>
        </ul>
      </div>
      <div className="team">
        <h3>Our Team</h3>
        <p>
          BigBasket is made up of a dedicated team of professionals committed to bringing you the best online grocery experience. From our tech team to delivery personnel, everyone works tirelessly to meet your needs.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
