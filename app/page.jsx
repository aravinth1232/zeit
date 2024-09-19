
"use client"

// import Loader from "../components/Loader"
// import Router from 'next/router';
import { Link } from 'react-scroll'
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
// import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';

import logo from "../app/logonew.png"

import s1 from "../app/assets/if.png"
import s2 from "../app/assets/wd.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from 'react-icons/fa';



const services =[
  {
    name:"Influencer marketing",
  image: s1,
  description: "We help brands connect with influencers to promote their products and increase brand awareness. Leverage the power of influencer marketing to create authentic connections with your target audience. Our approach involves identifying and partnering with influencers who align with your brand values and audience. We manage every aspect of the campaign, from strategy and influencer outreach to content creation and performance analysis, ensuring impactful results that resonate with your market."   
  },
  {
    name:"Web Development",
    image: s2,
    description: "Our team builds professional and modern websites tailored to your brands needs and vision.Transform your online presence with a custom-built website tailored to your business needs. Our development team focuses on creating user-friendly, visually appealing, and highly functional websites that provide a seamless experience across all devices. We offer end-to-end services, including design, development, testing, and ongoing support."   
  },

]



export default function Home() {

  


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
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
      

      <section
        id="about"
        className="h-svh lg:h-screen flex items-center justify-start relative overflow-hidden"
      >
        <div className="z-10 px-10 w-full lg:w-3/4 flex flex-col gap-10 lg:gap-5">
        <h1 className="text-2xl  font-semibold lg:text-3xl leading-[2.5rem] lg:leading-[3.5rem] "><span className="font-bold text-red-500 text-3xl  lg:text-4xl">Zeit</span>  seamlessly integrates influencer marketing with cutting-edge website development, providing a holistic approach to elevating your brand&apos;s online presence.</h1>

        <Link
          to="contact" 
          smooth={true}
          offset={-70}
          duration={500}
          
        >
          <button className="bg-white text-red-500 font-bold flex justify-center items-center gap-[2px] px-4 py-2 border-2  hover:border-2 hover:border-black ">
           <h1 className="">Let&apos;s Connect</h1>
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
      <section id="services" className=" flex items-center justify-center ">
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 py-5 lg:py-10 px-10' >{
          
            services.map((service,index)=>(
              
              <div key={index}
              className='flex flex-col  shadow-xl gap-3 px-3 lg:px-5 py-7   rounded-xl' 
              >

                <div className='flex flex-row justify-start items-center gap-1 lg:gap-2 '>
                <Image
                className='w-10 h-10 lg:w-18 lg:h-18 rounded-full '
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                  />
                  <h1 className='text-red-500 text-lg font-bold' >{service.name}</h1>
                  
                </div>

                <div>
                  <p className='text-gray-600 text-justify' >{service.description}</p>
                </div>

              

              </div>

            ))

          }</div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="py-7 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-red-500">Contact Us</h2>

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
              <label htmlFor="name" className="block text-sm font-medium text-red-500">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg  "
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-red-500">
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
              <label htmlFor="email" className="block text-sm font-medium text-red-500">
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
              <label htmlFor="message" className="block text-sm font-medium text-red-500">
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
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-400 transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>

    <section>
        <footer className='bg-red-100 flex flex-row justify-around items-center '>
        <div className='flex items-center justify-center'>
        <Image
            alt='logo'
            priority 
            src={logo}
            className='w-20 h-20'

            />          
        </div>
        <div className='flex flex-row gap-3 lg:gap-6 justify-center items-center'>
        <a
        href="" // Replace with your desired URL
        className="text-gray-800 hover:text-red-500 transition-transform duration-300 transform hover:scale-125"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebook"
      >
        <FaFacebookF className="w-5 h-5 transition-transform duration-300 transform hover:scale-110" />
      </a>
        <a
        href="" // Replace with your desired URL
        className="text-gray-800 hover:text-red-500 transition-transform duration-300 transform hover:scale-125"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="instagram"
      >
        <FaInstagram className="w-5 h-5 transition-transform duration-300 transform hover:scale-110" />
      </a>
      
        </div>
        </footer>

    </section>

    <div className="relative flex items-center">
        <a 
          href="https://wa.me/1234567890"
          className="fixed bottom-14 right-3 md:bottom-4 md:right-4 bg-red-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 group"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
         <FaWhatsapp className="w-6 h-6" />
          
          <span className="absolute left-0 bottom-0 transform -translate-x-full -translate-y-1/2 bg-red-500 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us
          </span>
        </a>
      </div>

{/* <div className="relative flex items-center">
        <a 
          href="https://wa.me/1234567890" // Replace with your WhatsApp number
          className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 group"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 8a6 6 0 11-8 0 6 6 0 018 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-5.5-5.5"
            />
          </svg>
          
          <span className={`absolute left-0 bottom-1/2 transform -translate-x-full -translate-y-1/2 bg-black text-white text-xs rounded py-1 px-2 opacity-0 transition-opacity duration-300 whitespace-nowrap ${scrolled ? 'group-hover:opacity-100' : 'hidden'}`}>
            Chat with us
          </span>
        </a>
      </div> */}




    </div>

   </>
  );
}






