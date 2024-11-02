import React from 'react';
import Service from './Service';
import pencilImg from '../assets/f3.png';
import globeImg from '../assets/f4.png';
import flafImg from '../assets/f5.png';

function Section() {
  // const servicesData = [
  //   {
  //     imgSrc: '../assets/f3.png',
  //     altText: 'pencil',
  //     title: 'First Block',
  //     description: 'Description for pencil',
  //   },
  //   {
  //     imgSrc: '../assets/f4.png',
  //     altText: 'globe',
  //     title: 'Second Block',
  //     description: 'Description for globe',
  //   },
  //   {
  //     imgSrc: '../assets/f5.png',
  //     altText: 'flag',
  //     title: 'Third Block',
  //     description: 'Description for flag',
  //   },
  // ];

  return (
    <div className="section">
      <h2>What do you need?</h2>
      <div className="services">
        {/* {servicesData.map((service, index) => (
          <Service
            key={index}
            imgSrc={service.imgSrc}
            altText={service.altText}
            title={service.title}
            description={service.description}
          />
        ))} */}
        <Service
          imgSrc={pencilImg}
          altText='pencil'
          title='First Block'
          description='Description for pencil'
        />
        <Service
          imgSrc={globeImg}
          altText='globe'
          title='Second Block'
          description='Description for globe'
        />
        <Service
          imgSrc={flafImg}
          altText='flag'
          title='Third Block'
          description='Description for flag'
        />
      </div>
    </div>
  );
}

export default Section;
