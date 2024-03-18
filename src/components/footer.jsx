import React from 'react'
import { FaGithub, FaDiscord, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import img from '../assets/pnd.png'

export default function Footer() {

  return (
    <footer id='Footer' className='border-2 border-t-red-600 text-white lg:px-10 p-7 mt-7 py-2 flex flex-col'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 items-center '>
        {/* <div className='mb-4 md:mb-0'>
          <span className='text-3xl font-semibold text-red-800 py-2 uppercase'>Logo</span>
          <p className='text-[16px] py-4 my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, laudantium.</p>
        </div> */}
        <div>
          <img src={img} alt="" className='' width={100} />
        </div>
        <div className='md:mb-0'>
          <h2 className='text-[22px] font-semibold text-red-800 py-2 uppercase'>Contact</h2>
          <p className='text-[16px] my-4'>Email: traniel.pride@pridendevelopment.com</p>
        </div>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-semibold text-red-800 py-2 uppercase'>Follow Me</h2>
          <div className='flex space-x-4 my-4'>
            <a className='text-xl text-white hover:text-red-800 transition-all duration-150 ease-in-out' href="https://github.com/tranielmp8" target='_blank'>
              <FaGithub />
            </a>
            <a className='text-xl text-white hover:text-red-800 transition-all duration-150 ease-in-out' href="https://www.linkedin.com/in/traniel-pride/" target='_blank'>
              <FaLinkedinIn />
            </a>
            
            <a className='text-xl text-white hover:text-red-800 transition-all duration-150 ease-in-out' href="#footer" onClick={() => alert('My Discord Alias: kakashi_sensei#8333')}>
              <FaDiscord />
              {}
            </a>
          </div>
        </div>
        
      </div>
      <h3 className='text-2xl flex items-center justify-center'>
        PrideNDevelopment - &#169; 2024 -
        </h3>
    </footer>
  )
}
