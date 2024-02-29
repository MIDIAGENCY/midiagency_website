import React from "react";
import Card from "./Card";
import super1 from "../assets/yuval.jpeg";
import super2 from "../assets/yuval.jpeg";
import super3 from "../assets/yuval.jpeg";
import super4 from "../assets/yuval.jpeg";

export default function Discover() {
  const data = [
    {
      image: super1,
      series: "Peeps Series",
      title: "Blue Peep",
      price: 4.39,
      tag: 17590,
      time: 10,
    },
    {
      image: super2,
      series: "Peeps Series",
      title: "Green Peep",
      price: 2.79,
      tag: 51830,
      time: 8,
    },
    {
      image: super3,
      series: "Peeps Series",
      title: "Pink Peep",
      price: 1.89,
      tag: 73021,
      time: 7,
    },
    {
      image: super4,
      series: "Peeps Series",
      title: "Purple Peep",
      price: 3.19,
      tag: 94153,
      time: 4,
    },
    {
      image: super4,
      series: "Yuval Michael",
      title: "Yuval Michael",
      price: 3.19,
      tag: 94153,
      time: 4,
    },    
    {
      image: super4,
      series: "Yuval Michael",
      title: "Yuval Michael",
      price: 3.19,
      tag: 94153,
      time: 4,
    },    
    {
      image: super4,
      series: "Yuval Michael",
      title: "Yuval Michael",
      price: 3.19,
      tag: 94153,
      time: 4,
    },
    {
      image: super4,
      series: "Peeps Series",
      title: "Purple Peep",
      price: 3.19,
      tag: 94153,
      time: 4,
    },        
  ];
  return (
    <div className="discover" id="discover">
      <div className="title-container">
        <h2 className="title" data-aos="fade" data-aos-offset="-200">Our Artists ⏳</h2><br></br>
        <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="100">
          We at MidiAgency Has the top notch of the music producers in the world <a href="https://midiagency.com/">MidiAgency</a>.
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}
