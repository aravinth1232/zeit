"use client"

import React, { useState, useEffect }  from 'react'

const TextAnimation = () => {

    const text = "Aravinth.A.M";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Adjust the delay for typing speed

      return () => clearTimeout(timeoutId); // Cleanup timeout
    }
  }, [index, text]);
  return (
    <h1 className="text-xl xl:text-3xl poppins  text-white ">
    Hi, I am <span className='animate-pulse'>{displayedText}</span>
    <span className=" animate-blink"></span>
  </h1>
  )
}

export default TextAnimation