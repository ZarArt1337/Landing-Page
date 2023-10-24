import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Gallery.sass';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3},
    1300: { items: 4 },
};

const items = [
  <img className="gallery-img" src="./src/assets/gallery/img1.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img className="gallery-img" src="./src/assets/gallery/img2.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img className="gallery-img" src="./src/assets/gallery/img3.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img className="gallery-img" src="./src/assets/gallery/img4.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img className="gallery-img" src="./src/assets/gallery/img5.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img className="gallery-img" src="./src/assets/gallery/img6.jpg" onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
  return (
    <div className="gallery-container" id="gallery">
      <h1 className="section-name">Gallery</h1>
      <AliceCarousel disableButtonsControls responsive={responsive} mouseTracking items={items}/>
    </div>

  );
}

export default Gallery;