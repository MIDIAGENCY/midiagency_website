import React from "react";
import home from "../assets/mixer.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title" data-aos="fade" data-aos-offset="-200">We are Midi</p>
          <h1 className="title" data-aos="fade" data-aos-offset="-200" data-aos-delay="100">MidiAgency 🎹</h1>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="200">
          the agency for electronic music artists<br></br> located in Berlin but
          spread all over the world
          </p>
          <a href="mailto:info@midiagency.com?subject=Mail from our Website MidiAgency.com&body=Hi, please reach out to me, my phone number is: "><button data-aos="fade" data-aos-offset="-200" data-aos-delay="300">CONTACT US 🔥</button></a>
        </div>
        <div className="image-container" data-aos="fade" data-aos-offset="-200" data-aos-delay="400">
          <div className="image">
            <LazyLoadImage
            alt="home"
            src={home}
            effect="blur"
            delayTime={300}
              />
          </div>
          <div className="ellipse-container">
            <div className="ellipse turquoise"></div>
            <div className="ellipse pink"></div>
          </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
      </div>
    </div>
  );
}
