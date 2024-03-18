
import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn, FaInstagram, FaDiscord} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import img from '../assets/lp_code.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function Banner() {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, [])

  return (
    <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal'>Hello, I'm <span className='text-red-600'>Traniel Pride</span>
        </h1>
        <p data-aos='fade-left' className='text-[22px]'>Software Developer ready to bring your imagination to life. Please enjoy the website and click the different links to get to know me better. PrideNDevelopment is not just a brand, but also my action when it comes to being a developer </p>
        <div data-aos='fade-right' className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-2 '>
              <a href="https://github.com/tranielmp8" target='_blank' className='text-red-600 hover:text-red-500 rounded-full glow p-2'>
                <AiFillGithub className='text-[28px]' />
              </a>
              <a href="https://www.linkedin.com/in/traniel-pride/" target='_blank' className='text-red-600 hover:text-red-500 rounded-full glow p-2'>
                <FaLinkedinIn className='text-[28px]' />
              </a>
             
              <a href="#home" className='text-red-600 hover:text-red-500 rounded-full glow p-2' onClick={() => alert('My Discord Alias: kakashi_sensei#8333')}>
                <FaDiscord className='text-[28px]' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img data-aos='fade-up' src={img} width={600}  className='rounded-xl p-1 banner-img ' alt="code" />
    </div>
  )
}
