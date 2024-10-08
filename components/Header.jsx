"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import logo from "../app/logonew.png"




const links =[
    {name:"About",address:"about"},
    {name:"Services",address:"services"},
    {name:"Contact",address:"contact"},
    ]



const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('overflow-hidden'); 
    } else {
      document.body.classList.remove('overflow-hidden'); 
    }
  }, [isSidebarOpen]);


  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

     


  return (
 
    <>
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-red-100 shadow-xl' : 'bg-white '
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
            <Image
            alt='logo'
            priority 
            src={logo}
            className='w-20 h-20'

            />
            </a>
          </div>
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">

          {
            links.map((link,index)=>(
              <Link 
              key={index}
              activeClass="text-red-500 font-bold"
              smooth={true}
              spy={true}
              offset={-70}
              duration={500}
              className="text-black font-semibold hover:text-red-500 cursor-pointer"
              to={link.address}
              >{link.name}</Link>
            ))
            
          }
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-red-500 hover:text-white focus:outline-none"
            >
              <FiMenu size={28}  />
            </button>
          </div>
          	  
		  <div
      className={`fixed  inset-0 z-40 transition-transform transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } bg-red-100 bg-opacity-100`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="text-red-500 hover:text-white"
        >
          <FiX size={28}  />
        </button>
      </div>

      {/* Sidebar Links */}
      <div className="flex flex-col items-center justify-center h-full gap-6 ">
        
      {
            links.map((link,index)=>(
              <Link 
              key={index}
              activeClass="text-red-500 font-bold"
              smooth={true}
              spy={true}
              offset={-70}
              duration={500}
              className="text-black font-semibold text-xl   cursor-pointer"
              to={link.address}
              onClick={() => setIsSidebarOpen(false)} 
              >{link.name}</Link>
            ))
            
          }
        
        
      </div>
    </div>
	
	
          



        </div>
      </div>
    </nav>

    {/* Mobile Sidebar */}
    
  </>

  )
}

export default Header
