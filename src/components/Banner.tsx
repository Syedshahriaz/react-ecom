import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <div className='banner-slider relative h-[500px] overflow-hidden'>
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
        >
            <div>
                <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" />
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/I/61dN5ATmvqL._SX1500_.jpg" />
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" />
            </div>
        </Carousel>
        <div className='w-full h-40 bg-gradient-to-t from-gray-600 to transparent absolute bottom-0 z-20'></div>
    </div>
  )
}

export default Banner