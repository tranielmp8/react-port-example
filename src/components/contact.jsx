
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export default function Contact() {

  const [name, setName] =useState('')
  const [email, setEmail] =useState('')
  const [message, setMessage] =useState('')

  useEffect(()=>{
    AOS.init({duration: 1000})
  }, [])

  return (
    <div id='Contact' className='lg:p-10 flex justify-center items-center'>
      <div className='flex flex-col items-center justify-center w-[75%] '>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-red-600'>Contact Me</h1>
      <form name="contact" netlify method='POST' className='flex flex-col gap-2 lg:w-1/2 border-2 border-red-600 p-10 rounded-xl tech-glow' >
        <input type="hidden" name="form-name" value="contact" />
        <div className='gap-9'>
          <input name="name" className='w-full lg:my-3 my-6 rounded-lg bg-white p-4 border-2 border-red-800  text-xl ' placeholder='Enter Your Name' type="text" value={name} onChange={(e)=> setName(e.target.value)}
          />
          <input name='email' className='w-full lg:my-3 my-6 rounded-lg bg-white p-4 border-2 border-red-800  text-xl ' placeholder='Enter Your Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <textarea name="message" className='w-full my-4 rounded-lg bg-white p-4 border-2 border-red-800  text-xl text-black'  placeholder='Enter Your Message' id="" cols="20" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button className='neno-button shadow-xl hover:shadow-red-800/50 border-2 border-red-800  rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden tech-glow text-2xl text-bold text-white hover:text-black hover:bg-red-600'  type='submit'>Submit</button>
      </form>
      </div>
    </div>
  )
}
