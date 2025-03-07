import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

// Import images
import BackgroundImage1 from "../../assets/portfolioimgs/1.png";
import BackgroundImage2 from "../../assets/portfolioimgs/2.png";
import Image1 from "../../assets/portfolioimgs/1.png";
import Image2 from "../../assets/portfolioimgs/1.png";
import Image3 from "../../assets/portfolioimgs/1.png";
import Image4 from "../../assets/portfolioimgs/1.png";
import Image5 from "../../assets/portfolioimgs/1.png";
import Image6 from "../../assets/portfolioimgs/1.png";
import Image7 from "../../assets/portfolioimgs/1.png";
import Image8 from "../../assets/portfolioimgs/1.png";
import Image9 from "../../assets/portfolioimgs/1.png";
import Image10 from "../../assets/portfolioimgs/1.png";
import Image11 from "../../assets/portfolioimgs/1.png";
import Image12 from "../../assets/portfolioimgs/1.png";
import Image13 from "../../assets/portfolioimgs/1.png";
import Image14 from "../../assets/portfolioimgs/1.png";
import Image15 from "../../assets/portfolioimgs/1.png";

const Portfolio = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Artwork containers (Horizontal alignment)
  const containers = [
    {
      title: "Nature's Beauty",
      description: "A breathtaking collection of nature-inspired artworks.",
      images: [Image1, Image2, Image3, Image4, Image5],
    },
    {
      title: "Futuristic Cities",
      description: "A glimpse into the future with neon-lit cityscapes.",
      images: [Image6, Image7, Image8, Image9, Image10],
    },
    {
      title: "Surreal Dreamscapes",
      description: "Exploring the depths of imagination and creativity.",
      images: [Image11, Image12, Image13, Image14, Image15],
    },
  ];

  const openModal = (artwork) => {
    setSelectedArtwork(artwork);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedArtwork(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedArtwork.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedArtwork.images.length) % selectedArtwork.images.length);
  };

  return (
    <div className="w-full">
      {/* First Section - Parallax Background */}
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
        style={{ backgroundImage: `url(${BackgroundImage1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Scrolling Text */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-lg mt-2">Explore a world of creativity and imagination.</p>
        </div>
      </div>

      {/* Horizontal Image Containers */}
      <div className="w-full flex">
        <div className="flex w-full gap-0">
          {containers.map((container, index) => (
            <div
              key={index}
              className="relative w-1/3 h-[600px] cursor-pointer flex items-center justify-center text-white text-center overflow-hidden"
              onClick={() => openModal(container)}
            >
              {/* Image as Background Cover */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${container.images[0]})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              
              {/* Text Content */}
              <div className="z-10 px-4">
                <h2 className="text-3xl font-semibold">{container.title}</h2>
                <p className="text-lg mt-2">{container.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Section - Parallax Background */}
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
        style={{ backgroundImage: `url(${BackgroundImage2})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Scrolling Text */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-bold">Thank You for Visiting</h1>
          <p className="text-lg mt-2">Stay inspired and keep exploring creativity.</p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button onClick={closeModal} className="absolute top-4 right-4 text-white text-2xl">
            <FaTimes />
          </button>
          <button onClick={prevImage} className="absolute left-4 text-white text-3xl">
            <FaArrowLeft />
          </button>
          <img src={selectedArtwork.images[currentImageIndex]} className="max-h-screen max-w-full" alt="Artwork" />
          <button onClick={nextImage} className="absolute right-4 text-white text-3xl">
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
