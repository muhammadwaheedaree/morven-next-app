// src/app/page.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-3xl font-bold text-blue-400">Morven Cigarettes</div>
          <ul className="flex space-x-6 text-lg">
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Products</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Experience the Richness of Morven Cigarettes</h1>
          <p className="text-lg md:text-xl mb-8">Indulge in a premium smoking experience crafted for the discerning smoker.</p>
          <a 
            href="#buy" 
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300 shadow-lg"
          >
            Buy Now
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="w-full max-w-md h-64 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg flex items-center justify-center">
            <h2 className="text-3xl font-semibold text-white">Premium Cigarettes</h2>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="buy" className="py-20 bg-gray-800 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Why Choose Morven?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              <h3 className="text-2xl font-semibold mb-4">Premium Quality</h3>
              <p>Our cigarettes are made from the finest tobacco, ensuring a rich and satisfying experience.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              <h3 className="text-2xl font-semibold mb-4">Stylish Packaging</h3>
              <p>Morven Cigarettes come in sleek, stylish packaging that stands out.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              <h3 className="text-2xl font-semibold mb-4">Available Nationwide</h3>
              <p>Find Morven Cigarettes at your nearest retailer or order online for convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Experience Morven?</h2>
        <p className="text-lg mb-8">Join the Morven family today and elevate your smoking experience.</p>
        <a 
          href="#buy" 
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300 shadow-lg"
        >
          Buy Morven Cigarettes
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center text-gray-400">
        &copy; 2024 Morven Cigarettes. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
