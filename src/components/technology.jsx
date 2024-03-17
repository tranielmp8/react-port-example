import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {
    FaReact, 
    FaHtml5, 
    FaCss3Alt, 
    FaNodeJs,
    FaPython
  } from 'react-icons/fa'
import{FaGolang} from 'react-icons/fa6'
import {TbBrandNextjs, TbBrandJavascript} from 'react-icons/tb'
import {SiCsharp, SiMicrosoftsqlserver, SiMongodb, SiPostgresql} from 'react-icons/si'

export default function Technology() {

  useEffect(()=>{
    AOS.init({duration: 1000})
  }, [])

  return (
    <div  id='Technology' className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-red-600'>Technology</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-20'>

        <div data-aos='fade-up' className='text-[26px] flex flex-col items-center justify-center border-2 border-red-600 rounded p-4 tech-container' >
        <h2 className='text-[40px] font-semibold text-red-600 mb-3'> Frontend </h2>
        <div className='tech flex space-x-2'>
          <FaReact className='text-[32px] text-red-500 tech-icons' />
          <FaHtml5 className='text-[32px] text-red-600 tech-icons' />
          <FaCss3Alt className='text-[32px] text-red-600 tech-icons' />
          <TbBrandJavascript className='text-[32px] text-red-600 tech-icons' />
          <TbBrandNextjs className='text-[32px] text-red-600 tech-icons' />
        </div>
        </div>

        <div data-aos='fade-down' className='text-[32px] flex flex-col items-center justify-center border-2 border-red-600 rounded p-4 tech-container'>
        <h2 className='text-[40px] font-semibold text-red-600 mb-3'>Backend</h2>
        <div className='tech flex space-x-2'>
          <FaPython className='text-[32px] text-red-600 tech-icons' />
          <FaGolang className='text-[32px] text-red-600 tech-icons' />
          <SiCsharp className='text-[32px] text-red-600 tech-icons' />
          <FaNodeJs className='text-[32px] text-red-600 tech-icons' />
        </div>
        </div>

        <div data-aos='fade-up' className='text-[32px] flex flex-col items-center justify-center border-2 border-red-600 rounded p-4 tech-container'>
        <h2  className='text-[40px] font-semibold text-red-600 mb-3'>Databases</h2>
        <div className='tech flex '>
          <SiMicrosoftsqlserver className='text-[32px] text-red-600 tech-icons' />
          <SiMongodb className='text-[26px] text-red-600 tech-icons' />
          <SiPostgresql className='text-[26px] text-red-600 tech-icons' />
        </div>
      </div>

        {/* <div data-aos='fade-down' className=''>
        <h2 className='text-[26px] flex items-center justify-center font-semibold text-red-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-red-800 tech-glow'>CSS3</h2>
        </div> */}
        
      
      </div>
    </div>
  )
}
