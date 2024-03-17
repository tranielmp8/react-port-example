import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, [])

  return (
    <div id='Contact' className='p-4 lg:p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-red-600'>Contact Me</h1>
      <form action="" className='flex flex-col gap-2 lg:w-1/2'>
        <div className='lg:flex gap-9'>
          <input className='w-full lg:my-3 my-6 rounded-lg bg-gray-500 p-4 border-2 border-red-800 tech-glow text-xl ' placeholder='Enter Your Name' type="text" />
          <input className='w-full lg:my-3 my-6 rounded-lg bg-gray-500 p-4 border-2 border-red-800 tech-glow text-xl ' placeholder='Enter Your Email' type="email" />
        </div>
        <textarea className='w-full my-4 rounded-lg bg-gray-500 p-4 border-2 border-red-800 tech-glow text-xl text-slate-100'  placeholder='Enter Your Message' name="" id="" cols="20" rows="10"></textarea>
        <button className='neno-button shadow-xl hover:shadow-red-800/50 border-2 border-red-800  rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden tech-glow text-2xl text-bold text-white hover:text-black hover:bg-red-600'  type='submit'>Submit</button>
      </form>
    </div>
  )
}
