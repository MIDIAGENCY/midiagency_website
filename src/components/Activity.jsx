import React from "react";
import crown from "../assets/crown.webp";
import medal from "../assets/medal.webp";

export default function Activity() {
  return (
    <div className="activity" id="activity">
      <div className="container">
        <div className="content">
          <div className="image" data-aos="fade" data-aos-offset="-200">
            <img src={crown} alt="crown" />
          </div>
          <h2 className="title" data-aos="fade" data-aos-offset="-200" data-aos-delay="100">Produce Music For Your Needs.</h2>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="200"> 
          MidiAgency works with the best music producers around the world and we can assist you with anything related to creating music.
          </p>
          {/* <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim.
          </p> */}
        </div>
        <div className="content">
          <div className="image"  data-aos="fade" data-aos-offset="-200">
            <img src={medal} alt="medal" />
          </div>
          <h2 className="title" data-aos="fade" data-aos-offset="-200" data-aos-delay="100">Provide DJ For Event.</h2>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="200">
          As a worldwide agency for the best talents out there in the music scene we can provide you with the perfect dj for your needs.
          </p>
          {/* <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim.
          </p> */}
        </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    </div>
  );
}
