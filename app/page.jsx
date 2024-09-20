
"use client"

// import Loader from "../components/Loader"
// import Router from 'next/router';
import { Link } from 'react-scroll'
import emailjs from 'emailjs-com';
import React, { useState,useEffect} from 'react';

import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';

import logo from "../app/logonew.png"

import s1 from "../app/assets/if.png"
import s2 from "../app/assets/wd.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import { FaWhatsapp } from 'react-icons/fa';

import { FaUsers, FaBullhorn, FaLaptopCode } from 'react-icons/fa';


import AOS from "aos";
import "aos/dist/aos.css";



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


const why =[

  { name:"Influencer Network",
    description: " We work with a wide network of influencers across various niches to help you reach your target audience with authentic and engaging content.",
    icon: FaUsers  
  },
  { name:"Creative Campaigns",
    description: "Our team specializes in crafting tailored marketing campaigns that resonate with your audience, driving higher engagement and conversions.",
    icon: FaBullhorn 
  },
  { name:"Website Development",
    description: "  From strategy to design, we build websites that are not only visually stunning but optimized for performance and user experience.",
    icon: FaLaptopCode
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



  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (




   <>

        <div>
      

      <section
        id="about"
        className="h-svh lg:h-screen flex items-center justify-start relative overflow-hidden"  
      >
        <div className="z-10 px-10 w-full lg:w-3/4 flex flex-col gap-10 lg:gap-5" data-aos="zoom-in">
        <h1 className="text-2xl  font-semibold lg:text-3xl leading-[2.5rem] lg:leading-[3.5rem] text-gray-600  "><span className="font-bold text-red-500 text-3xl  lg:text-4xl ">Zeit</span>  seamlessly integrates <span className='animate-pulse'>influencer marketing</span>  with cutting-edge <span className='animate-pulse'>website development</span> , providing a holistic approach to elevating your brand&apos;s online presence.</h1>

        <Link
          to="contact" 
          smooth={true}
          offset={-70}
          duration={500}
          
        >
          <button className=" relative inline-block px-6 py-3 font-bold text-red-500 bg-white border-2 hover:text-white  overflow-hidden group">
      <span className="relative z-10">Let&apos;s Connect</span>
     
      {/* Background */}
      <span className="absolute inset-0 w-full h-full bg-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out origin-left"></span>
    </button>
        </Link>   
		  
   


        
        </div >
       
        {/* SVG vector background */}
        <div className="absolute inset-0" >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
        <path fill="#ef4444" fill-opacity="1" d="M0,192L120,192C240,192,480,192,720,176C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </div>
      </section>

      <section className="py-16">
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-red-500 mb-8">Why Zeit?</h2>
        <p className="text-lg mb-12">
          Zeit is the ultimate partner for brands looking to enhance their digital presence. We combine data-driven strategies with creative solutions to bring your vision to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{

            why.map(({name,description, icon:IconComponent}) =>(
              
                <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-up">
                <IconComponent className="text-red-500 text-4xl mb-4 mx-auto" />  
                <h3 className='text-2xl font-bold text-red-500 mb-4' >{name}</h3>
                <p className='text-gray-600'>{description}</p>
                 </div>
            ))  }         
        </div>
      </div>
    </section>



      {/* Services Section */}
      <section id="services" className="py-16 flex flex-col items-center justify-center ">
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-red-500 ">Our Services</h2>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 py-5 lg:py-10 px-10' >{
          
            services.map((service,index)=>(
              
              <div key={index}
              className='flex flex-col  shadow-xl gap-5 px-3 lg:px-5 py-7   rounded-xl' 
              data-aos="fade-up"
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
      <section id="contact" className="py-7 flex items-center justify-center " data-aos="fade-up">
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
            onClick={()=>
              window.scrollTo({top: 0, behavior: "smooth"})
            }
            role='button'
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
      <a
        href="" // Replace with your desired URL
        className="text-gray-800 hover:text-red-500 transition-transform duration-300 transform hover:scale-125"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebook"
      >
        <FaXTwitter className="w-5 h-5 transition-transform duration-300 transform hover:scale-110" />
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






