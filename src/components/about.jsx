
import img from '../assets/bh_no_bg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function About() {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, [])

  return (
    <div id='About' className=''>
        <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img data-aos='fade-down' src={img} width={400} height={400} className='rounded border-2 p-1 border-red-500 img_glow' alt="code" />

      <div  className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal text-red-600 uppercase'>About Me
        </h1>
        <p data-aos='fade-left' className='mb-3'>I am an Aspiring Software Developer trying to break into the programming world. As tech continues to grow I will do my best to grow with it. Currently I am a Data Analyst with skills in Power BI and Data Gathering. I have a Bachelor's degree in Computer Information Systems and many different certificates </p>
        <div className="skills flex w-[50%] justify-between items-center">
              <ul>
                <h3 className='text-2xl text-red-600'>Software Developer Skills</h3>
                <div className=' border-l-2 border-red-600 p-2'>
                  <li>Frontend</li>
                  <li>Backend</li>
                  <li>Databases</li>
                  <li>FullStack</li>
                </div>
              </ul>
              <ul>
                <h3 className='text-red-600 text-2xl'>Data Analyst</h3>
                <div className=' border-l-2 border-red-600 p-2'>
                  <li>SQL</li>
                  <li>Power BI</li>
                  <li>Databases</li>
                  <li>Agile Methodology</li>
                </div>
              </ul>
              
            </div>
        <div className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            
            <div className='lg:flex md:flex-col space-x-2 '>
              <h2 className='text-[32px] font-semibold text-red-600 py-2 mr-2 uppercase'>Certificates</h2>
              <a href='#' target='_blank' className='neno-button shadow-xl hover:shadow-red-800/50 text-white border-2 hover:bg-red-800 border-red-800 rounded-lg py-4 px-8  relative overflow-hidden ' >CourseCareers</a>
              <a href='#' target='_blank' className='neno-button shadow-xl hover:shadow-red-800/50 text-white border-2 hover:bg-red-800 border-red-800 rounded-lg py-4 px-8  relative overflow-hidden ' >Data Analyst</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
