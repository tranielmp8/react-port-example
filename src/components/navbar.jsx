import { useState } from 'react';
import {Link} from 'react-scroll'
import {FaTimes} from 'react-icons/fa'
import { CiMenuFries } from "react-icons/ci"
import img2 from '../assets/test.png'


export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }
  const content = <>
    <div className='lg:hidden block absolute h-[100vh] top-16 w-full left-0 right-0  transition z-50 hamburger'>
      <ul className='text-center text-xl p-20'>
        <Link spy={true} smooth={true} to="Home">
          <li className='nav-link my-4 py-4 border-b border-black hover:bg-black hover:rounded'>Home</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className='nav-link my-4 py-4 border-b border-black hover:bg-black hover:rounded'>About</li>
        </Link>
        <Link spy={true} smooth={true} to="Services">
          <li className='nav-link my-4 py-4 border-b border-black hover:bg-black hover:rounded'>Services</li>
        </Link>
        <Link spy={true} smooth={true} to="Projects">
          <li className='nav-link my-4 py-4 border-b border-black hover:bg-black hover:rounded'>Projects</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className='nav-link my-4 py-4 border-b border-black hover:bg-black hover:rounded'>Contact</li>
        </Link>
       
      </ul>
    </div>
    </>
  return (
    <nav>
      <div className='h-10v flex justify-between  text-white lg:py-5 px-20 py-4 border-b-2 border-red-800'>
        
          <a className='flex items-end rounded-full p-3  ml-10 logo' href="#">
            <img src={img2} width={50} alt="" />
          </a>
       
        <div className='lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden'>
          <div className='flex justify-center items-center'>
            <ul className='flex gap-8 mr-16 text-[18px] '>
            <Link className='' spy={true} smooth={true} to="Home">
              <li className='nav-link hover:text-red-600 transition hover:border-b-2 border-white hover:border-red-600 cursor-pointer'>Home</li>
            </Link>
            <Link className='' spy={true} smooth={true} to="About">
              <li className='nav-link hover:text-red-600 transition hover:border-b-2 border-white hover:border-red-600 cursor-pointer'>About</li>
            </Link>
            <Link className='' spy={true} smooth={true} to="Technology">
              <li className='nav-link hover:text-red-600 transition hover:border-b-2 border-white hover:border-red-600 cursor-pointer'>Technology</li>
            </Link>
            <Link className='' spy={true} smooth={true} to="Projects">
              <li className='nav-link hover:text-red-600 transition hover:border-b-2 border-white hover:border-red-600 cursor-pointer'>Projects</li>
            </Link>
            <Link className='' spy={true} smooth={true} to="Contact">
              <li className='nav-link hover:text-red-600 transition hover:border-b-2 border-white hover:border-red-600 cursor-pointer'>Contact</li>
            </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  )
}
