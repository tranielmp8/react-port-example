import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Footer() {

  return (
    <footer id='Footer' className=' border border-t-red-600 text-white lg:px-48 px-4 py-20'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='mb-4 md:mb-0'>
          <span className='text-3xl font-semibold text-red-800 py-2 uppercase'>Logo</span>
          <p className='text-[16px] py-4 my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, laudantium.</p>
        </div>
        <div>
          <h2 className='text-[22px] font-semibold text-red-800 py-2 uppercase'>Services</h2>
          <ul className='text-[16px] my-4'>
            <li className='my-2' >Software Development</li>
            <li className='my-2' >Backend Engineer</li>
            <li className='my-2' >Data Analyst</li>
            <li className='my-2' >Business Analyst</li>
          </ul>
        </div>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-semibold text-red-800 py-2 uppercase'>Contact</h2>
          <p className='text-[16px] my-4'>Email: kakashi@gmail.com</p>
          <p className='text-[16px] my-4'>Phone: 111-222-3333</p>
        </div>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-semibold text-red-800 py-2 uppercase'>Follow Me</h2>
          <div className='flex space-x-4 my-4'>
            <a className='text-white hover:text-red-800 transition-all duration-150 ease-in-out' href="#">
              <FaGithub />
            </a>
            <a className='text-white hover:text-red-800 transition-all duration-150 ease-in-out' href="#">
              <FaLinkedinIn />
            </a>
            <a className='text-white hover:text-red-800 transition-all duration-150 ease-in-out' href="#">
              <FaTwitter />
            </a>
            <a className='text-white hover:text-red-800 transition-all duration-150 ease-in-out' href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
