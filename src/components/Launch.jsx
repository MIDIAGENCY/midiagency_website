import React from "react";
import { BsArrowRight } from "react-icons/bs";
import peeps1 from "../assets/artclub.jpeg";
import peeps2 from "../assets/gagarin.png";

export default function Launch() {
  return (
    <div className="releases" id="launch">
      <div className="launch pink">
        <div className="content">
          <h2 className="title" data-aos="fade" data-aos-offset="-200">⚠️ Up Coming Event 7.12.2022 ⚠️ </h2>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="100">
          We have an up coming event to our booking agency
          </p>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="200">
          It is going to be hosted in the legendary club: ArtClub
          </p>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="300">80% of the purchases will be donated to a variety of charity organizations worldwide.</p>
          <a href="https://eventer.co.il/" className="link" data-aos="fade" data-aos-offset="-200" data-aos-delay="400">
            We want you to take part! <BsArrowRight />
          </a>
        </div>
        <div className="image" data-aos="fade" data-aos-offset="-200" data-aos-delay="500">
          <img src={peeps1} alt="peeps" />
          <div className="ellipse turquoise"></div>
        </div>
      </div>
      <div className="launch yellow">
        <div className="image" data-aos="fade" data-aos-offset="-200" data-aos-delay="500">
        <img src={peeps2} alt="peeps" />
          <div className="ellipse pink"></div>
        </div>
        <div className="content">
          <h2 className="title" data-aos="fade" data-aos-offset="-200">⚠️ Up Coming Event 8.1.2023 ⚠️</h2>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="200">
          We have another great up coming event to our booking agency
          </p>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="300">
            There will be only a few of tickets available. Make sure so that you don't miss out.
          </p>
          <p className="description"  data-aos="fade" data-aos-offset="-200" data-aos-delay="400">95% of the purchases will be donated to a variety of charity organizations worldwide.</p>
          <a href="https://gagarin.co.il/" className="link" data-aos="fade" data-aos-offset="-200" data-aos-delay="500">
            I want more details <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
