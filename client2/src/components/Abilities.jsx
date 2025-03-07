import React from 'react';

// You can import your images or use static URLs for now.
import codingImage from '../assets/7.png';  // Example path for image
import modelingImage from '../assets/7.png';  // Example path for image
import sketchingImage from '../assets/7.png';  // Example path for image

const Abilities = () => {
  return (
    <section className="py-16 px-6 bg-neutral-900 text-white">
      {/* Abilities Heading */}
      <h2 className="text-4xl font-bold text-center text-rose-500 mb-12">Abilities</h2>

      {/* Cards Row */}
      <div className="flex justify-center gap-8">
        {/* Card 1 */}
        <div className="w-64 h-80 bg-white text-black rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
          <div className="relative w-full h-full">
            {/* Add Image inside card */}
            <img src={codingImage} alt="Coding" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 absolute bottom-0 bg-black bg-opacity-50">
            <h3 className="text-2xl text-white font-semibold mb-4">Coding</h3>
            <p className="text-base text-white">
              aaaa aaa aaa aaa aaaa aa aaaa aaaaa aa aa aaaaaaaa aaa aaaa aaa aa aaa aa  aaaaaa aaa aaa aaaa aa aaa.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-64 h-80 bg-white text-black rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
          <div className="relative w-full h-full">
            {/* Add Image inside card */}
            <img src={modelingImage} alt="Modeling" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 absolute bottom-0 bg-black bg-opacity-50">
            <h3 className="text-2xl text-white font-semibold mb-4">Modeling</h3>
            <p className="text-base text-white">
              bbb bb  b  b  bb bbb b bbb b b bbbb bbb bbb bbbb bbb bbbbb bbb b bb b bbb b bb b bb bb b bbb b b bb b .
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-64 h-80 bg-white text-black rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
          <div className="relative w-full h-full">
            {/* Add Image inside card */}
            <img src={sketchingImage} alt="Sketching" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 absolute bottom-0 bg-black bg-opacity-50">
            <h3 className="text-2xl font-semibold mb-4 text-white">Sketching</h3>
            <p className="text-base text-white">
              cccc cc c cc ccc cc cc c cc c c cc c cc cc c ccc c c c ccc cc c.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abilities;
