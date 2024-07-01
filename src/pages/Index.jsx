import React from "react";

function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-horse.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold">Discover the Majestic World of Horses</h1>
          <p className="mt-4 text-xl">Experience the beauty, grace, and strength of these magnificent creatures.</p>
          <button className="mt-8 px-6 py-3 bg-primary text-white rounded-full">Learn More</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center">About Horses</h2>
        <div className="mt-8 flex flex-col md:flex-row items-center">
          <img src="/images/about-horse.jpg" alt="About Horses" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="mt-8 md:mt-0 md:ml-8">
            <p className="text-lg">
              Horses have been an integral part of human history for thousands of years. They have been used for transportation, agriculture, and companionship. There are over 300 different breeds of horses, each with unique characteristics and abilities.
            </p>
            <p className="mt-4 text-lg">
              From the powerful Clydesdale to the graceful Arabian, horses come in all shapes and sizes. They are known for their intelligence, strength, and loyalty. Whether you are an experienced rider or just starting out, there is a horse out there for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Gallery</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img src="/images/gallery-horse1.jpg" alt="Horse 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <img src="/images/gallery-horse2.jpg" alt="Horse 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <img src="/images/gallery-horse3.jpg" alt="Horse 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <img src="/images/gallery-horse4.jpg" alt="Horse 4" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          {/* Add more images as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <div className="mt-8 flex flex-col md:flex-row items-center">
          <form className="w-full md:w-1/2">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium">Name</label>
              <input type="text" id="name" className="w-full mt-2 px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium">Email</label>
              <input type="email" id="email" className="w-full mt-2 px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium">Message</label>
              <textarea id="message" className="w-full mt-2 px-4 py-2 border rounded-lg" rows="4"></textarea>
            </div>
            <button type="submit" className="px-6 py-3 bg-primary text-white rounded-full">Send Message</button>
          </form>
          <div className="mt-8 md:mt-0 md:ml-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="mt-4 text-lg">123 Horse Street, Equine City, EQ 12345</p>
            <p className="mt-2 text-lg">Phone: (123) 456-7890</p>
            <p className="mt-2 text-lg">Email: info@horsehaven.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 bg-gray-800 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-lg font-semibold">Horse Haven</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#gallery" className="hover:text-gray-400">Gallery</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;