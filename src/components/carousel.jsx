import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./carousel.css" // Ensure this CSS file exists and is correctly linked

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(
        prevIndex => (prevIndex + 1 < 6 ? prevIndex + 1 : 0) // Assuming 5 sets of images, adjust accordingly
      )
    }, 5000) // Change set of images every 5 seconds

    return () => clearInterval(timer) // Cleanup on component unmount
  }, [])

  const displayImages = () => {
    // Directly return StaticImage components for the images you want to show
    let imagesToShow = []
    // This is a placeholder logic to show how you might decide which images to include
    switch (currentIndex) {
      case 0:
        imagesToShow = [
          <StaticImage src="../images/bomeimage.jpeg" alt="Image 1" key="1" />,
          <StaticImage src="../images/bomeimage2.jpeg" alt="Image 2" key="2" />,
          <StaticImage src="../images/bomeimage3.jpeg" alt="Image 3" key="3" />,
        ]
        break
      case 1:
        imagesToShow = [
          <StaticImage src="../images/bomeimage4.jpeg" alt="Image 4" key="4" />,
          <StaticImage src="../images/bomeimage5.jpeg" alt="Image 5" key="5" />,
          <StaticImage src="../images/bomeimage6.jpeg" alt="Image 6" key="6" />,
        ]
        break
      // Add more cases for different sets of images if necessary
      default:
        imagesToShow = [
          <StaticImage src="../images/bomeimage7.jpeg" alt="Image 7" key="7" />,
          <StaticImage src="../images/bomeimage8.jpeg" alt="Image 8" key="8" />,
          <StaticImage src="../images/bomeimage9.jpeg" alt="Image 9" key="9" />,
        ]
    }

    return imagesToShow.map(image => (
      <div key={image.key} className="carousel-image-container">
        {image}
      </div>
    ))
  }

  return <div className="carousel-container">{displayImages()}</div>
}

export default Carousel
