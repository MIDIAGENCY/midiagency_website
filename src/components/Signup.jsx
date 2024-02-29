import React from "react";
import signup from "../assets/letter.png";
export default function Signup() {
  return (
    <div className="signup" id="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title" data-aos="fade" data-aos-offset="-200">Drop us a message.</p>
          <h1 className="title" data-aos="fade" data-aos-offset="-200" data-aos-delay="100">Contact Us</h1>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="200">
            We would love to hear from you.☎️
          </p>
          
          <a href="mailto:info@midiagency.com?subject=Mail from our Website MidiAgency.com&body=Hi, please reach out to me, my phone number is: "><button data-aos="fade" data-aos-offset="-200" data-aos-delay="300">CONTACT US 🔥</button></a>
        </div>
        <div className="image-container">
          <div className="image" data-aos="fade" data-aos-offset="-200" data-aos-delay="400">
            <img src={signup} alt="home" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse turquoise"></div>
            <div className="ellipse pink"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
