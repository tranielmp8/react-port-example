import img1 from '../assets/laptop.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Projects() {

  useEffect(()=>{
    AOS.init({duration: 1000})
  }, [])

  return (
    <div id='Projects' className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10'>
        <img data-aos='fade-up' height={350} width={300} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 tech-glow' src={img1} alt="" />
        <img data-aos='fade-down' height={350} width={300} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 tech-glow' src={img1} alt="" />
        <img data-aos='fade-up' height={350} width={300} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 tech-glow' src={img1} alt="" />
        <img data-aos='fade-down' height={350} width={300} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 tech-glow' src={img1} alt="" />
      </div>
    </div>
  )
}
