import pnd1 from '../assets/pnd1.png'
import pnd2 from '../assets/pnd2.png'
import pnd3 from '../assets/pnd3.png'
import pnd4 from '../assets/pnd4.png'
import pnd5 from '../assets/pnd5.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Projects() {

  useEffect(()=>{
    AOS.init({duration: 1000})
  }, [])

  return (
    <div id='Projects' className='flex flex-col items-center proj-wrapper'>

      <h1 data-aos='fade-down' className='text-[32px] text-red-600' >Projects</h1>
      
      {/* custom */}
      {/* subscription platform */}
      <div data-aos='fade-right' className="flex w-4/5 justify-center m-4  proj-container ">
        {/* <div className=" h-60 w-56 flex-none bg-cover img-container overflow-hidden" style={{backgroundImage: `url(${pnd1})`}} title="laptop">

        </div> */}
        <div className='w-[50%] proj-img' >
          <img src={pnd1} alt="" />
        </div>
        
        <div className=" project-details w-[70%] flex flex-col justify-around bg-white p-3">
        
          <h2 className='text-black text-[24px]'>
            Subscription Platform
          </h2>
          <p className="text-sm text-gray-600 flex items-center">
            The subscription platform is an application which allows you to create Standard and Premium articles if you are a writer. If you are a client you can read the Writer articles by paying a subscription price for either standard or premium. To play as a client then you would need to setup an Paypal Sandbox API. Easy to do and fun.
          </p>
          <p className="text-sm text-gray-600 flex items-center">
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#Django</span>
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#AWS</span>
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#HTML/CSS</span>
          </p>

          <div className="web-links flex items-center justify-center ">
            <h3 className='italic text-slate-600 p-2 text-[20px]' >Created By: Traniel Pride</h3>
            <a className='text-red-600 m-2 underline text-[20px]' href="https://github.com/tranielmp8/django-subplatform" target='_blank'>github</a>
            <a className='text-red-600 m-2 underline text-[20px]' href="https://django-subplatform-production.up.railway.app/" target='_blank'>website</a>
          </div>
        </div>
      </div>

      {/* Github Discussions */}
      <div className="flex w-4/5 justify-center m-4  proj-container ">
        {/* <div className=" h-60 w-56 flex-none bg-cover img-container overflow-hidden" style={{backgroundImage: `url(${pnd1})`}} title="laptop">

        </div> */}
        <div className='w-[50%] proj-img' >
          <img src={pnd2} alt="" />
        </div>
        
        <div className=" project-details w-[70%] flex flex-col justify-around bg-white p-3">
        
          <h2 className='text-black text-[24px]'>
            Github Discussions
          </h2>
          <p className="text-sm text-gray-600 flex items-center">
          Github Discussions is a place only for github users. Create Topics and Post within that topic. Users can reply to the posts. Note: Click sign in even if you get an error - issue with nextjs caching
          </p>
          <p className="text-sm text-gray-600 flex items-center">
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#Nextjs</span>
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#React</span>
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#Postgres</span>
          </p>

          <div className="web-links flex items-center justify-center ">
            <h3 className='italic text-slate-600 p-2 text-[20px]' >Created By: Traniel Pride </h3>
            <a className='text-red-600 m-2 underline text-[20px]' href="https://github.com/tranielmp8/Github_Disc" target='_blank'>github</a>
            <a className='text-red-600 m-2 underline text-[20px]' href="https://github-disc-git-main-tranielmp8s-projects.vercel.app/" target='_blank'>website</a>
          </div>
        </div>
      </div>

      {/* Service Ticket Master */}
      <div className="flex w-4/5 justify-center m-4  proj-container ">
        {/* <div className=" h-60 w-56 flex-none bg-cover img-container overflow-hidden" style={{backgroundImage: `url(${pnd1})`}} title="laptop">

        </div> */}
        <div className='w-[50%] proj-img' >
          <img src={pnd3} alt="" />
        </div>
        
        <div className=" project-details w-[70%] flex flex-col justify-around bg-white p-3">
        
          <h2 className='text-black text-[24px]'>
            Ticket Master
          </h2>
          <p className="text-sm text-gray-600 flex items-center">
          Application for Service Tickets. Authenticated users can create their own tickets. Users can view others tickets as well, but are unable to delete another users tickets. Priority options available with each ticket. Enjoy
          </p>
          <p className="text-sm text-gray-600 flex items-center">
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#Nextjs</span>
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#React</span>
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#Supabase</span>
          </p>

          <div className="web-links flex items-center justify-center ">
            <h3 className='italic text-slate-600 p-2 text-[20px]' >Created By: Traniel Pride </h3>
            <a className='text-red-600 m-2 underline text-[20px]' href="https://github.com/tranielmp8/nextjs_ticket_app" target='_blank'>github</a>
            <a className='text-red-600 m-2 underline text-[20px]' href="https://nextjs-ticket-app-sepia.vercel.app/login" target='_blank'>website</a>
          </div>
        </div>
      </div>


      {/* Christi Pride Website*/}
      <div className="flex w-4/5 justify-center m-4  proj-container ">
        {/* <div className=" h-60 w-56 flex-none bg-cover img-container overflow-hidden" style={{backgroundImage: `url(${pnd1})`}} title="laptop">

        </div> */}
        <div className='w-[50%] proj-img' >
          <img src={pnd4} alt="" />
        </div>
        
        <div className=" project-details w-[70%] flex flex-col justify-around bg-white p-3">
        
          <h2 className='text-black text-[24px]'>
            Christi Pride LifeCoach
          </h2>
          <p className="text-sm text-gray-600 flex items-center">
            This portfolio website is a landing page for my wife. I used react js to create the website. She is an entrepreneur with a certified life coaching license. This page has different links to more of her business pages.
          </p>
          <p className="text-sm text-gray-600 flex items-center">
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#React</span>
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#HTML/CSS</span>
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#Af Designer</span>
          </p>

          <div className="web-links flex items-center justify-center ">
            <h3 className='italic text-slate-600 p-2 text-[20px]' >Created By: Traniel Pride </h3>
            <a className='text-red-600 m-2 underline text-[20px]' href="https://github.com/tranielmp8/christi-react-port" target='_blank'>github</a>
            <a className='text-red-600 m-2 underline text-[20px]' href="https://christipride.com/" target='_blank'>website</a>
          </div>
        </div>
      </div>

      {/* AudioBook Collections */}
      <div className="flex w-4/5 justify-center m-4  proj-container ">
        {/* <div className=" h-60 w-56 flex-none bg-cover img-container overflow-hidden" style={{backgroundImage: `url(${pnd1})`}} title="laptop">

        </div> */}
        <div className='w-[50%] proj-img' >
          <img src={pnd5} alt="" />
        </div>
        
        <div className=" project-details w-[70%] flex flex-col justify-around bg-white p-3">
        
          <h2 className='text-black text-[24px]'>
            AudioBook Collections
          </h2>
          <p className="text-sm text-gray-600 flex items-center">
            AudioBook Collections was created using django. you can create a list of your audiobooks and leave your own description for each. You are able to upload images for each audiobook you have read also. Profile management to change your username and password reset option available.
          </p>
          <p className="text-sm text-gray-600 flex items-center">
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#django</span>
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#JavaScript</span>
            <span className='pill m-2 bg-red-600 p-2 text-white border-2 rounded-lg' >#AWS</span>
          </p>

          <div className="web-links flex items-center justify-center ">
            <h3 className='italic text-slate-600 p-2 text-[20px]' >Created By: Traniel Pride </h3>
            <a className='text-red-600 m-2 underline text-[20px]' href="https://github.com/tranielmp8/django-audiobook-collection" target='_blank'>github</a>
            <a className='text-red-600 m-2 underline text-[20px]' href="https://web-production-809b.up.railway.app/" target='_blank'>website</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}
