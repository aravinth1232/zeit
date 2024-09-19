
"use client"
import { Link } from 'react-scroll'
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
// import { IoIosArrowForward } from "react-icons/io";



export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Added state for success message visibility

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

   

const serviceID = 'service_s1l0x0f'; // EmailJS Service ID
const templateID = 'template_40c1n6a'; // EmailJS Template ID
const userID = 'OUx0znxEEgANdIw9N'; // EmailJS User ID

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setShowSuccessMessage(true); // Added: show success message after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setIsSubmitting(false);
      });
  };

  // Close the success message
  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false); // Added: function to close the success message
  };


  return (
   <>
        <div>
      

      {/* About Section */}
      <section
        id="about"
        className="h-svh lg:h-screen flex items-center justify-start relative overflow-hidden"
      >
        <div className="z-10 px-10 w-full lg:w-3/4 flex flex-col gap-10 lg:gap-5">
        <h1 className="text-2xl  font-semibold lg:text-3xl leading-[2.5rem] lg:leading-[3.5rem] "><span className="font-bold text-red-500 text-3xl  lg:text-4xl">Zeit</span>  seamlessly integrates influencer marketing with cutting-edge website development, providing a holistic approach to elevating your brand's online presence.</h1>

        <Link
          to="contact" // ID of the Contact section
          smooth={true}
          offset={-70}
          duration={500}
          
        >
          <button className="bg-white text-red-500 font-bold flex justify-center items-center gap-[2px] px-4 py-2 border-2  hover:border-2 hover:border-black ">
           <h1 className="">Let's Connect</h1>
           {/* <IoIosArrowForward /> */}
        </button>
        </Link>
        
        </div>
       
        {/* SVG vector background */}
        <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
        <path fill="#ef4444" fill-opacity="1" d="M0,192L120,192C240,192,480,192,720,176C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="h-screen flex items-center justify-center ">
        <h1 className="text-4xl">Our Services</h1>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

        {showSuccessMessage ? ( // Added condition to show success message
          <div className="relative p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-100">
            <span className="block text-center font-bold">Message Sent Successfully!</span>
            <button
              onClick={handleCloseSuccessMessage} // Added: close button action
              className="absolute top-0 right-0 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
    </div>
   </>
  );
}






