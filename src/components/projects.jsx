import img1 from '../assets/github_discussions_red.png'
import img2 from '../assets/chat_no_bg.png'
import img3 from '../assets/flex_no_bg.png'
import img4 from '../assets/ticket_no_bg.png'
import img5 from '../assets/expense_1.png'
import img6 from '../assets/sword_nbg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Projects() {

  useEffect(()=>{
    AOS.init({duration: 1000})
  }, [])

  return (
    <div id='Projects' className='p-16 flex flex-col min-h-screen items-center justify-center '>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-red-600'>Projects</h1>
      <div data-aos='fade-up' className='cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-7'>
        <div className='w-72 rounded-xl card text-white p-2 border-2 border-red-600'>
          <img  height={350} width={300} className='bg-white rounded-xl border-2 border-red-600' src={img1} alt="" />
          <div >
            <h2 className='text-[32px] text-red-600 flex items-center justify-center'>Github Discussions</h2>
            <p className='p-2'>Github Discussions is a place only for github users. Create Topics and Post within that topic. Users can reply to the posts. Note: Click sign in even if you get an error - issue with nextjs caching</p>
          </div>
          <div className='project-tech flex'>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>Nextjs</span>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>Postgres</span>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>Reactjs</span>
          </div>
          <div className="web-links flex">
            <a className='text-red-600 m-2 underline text-[22px]' href="https://github.com/tranielmp8/Github_Disc" target='_blank'>github</a>
            <a className='text-red-600 m-2 underline text-[22px]' href="https://github-disc-git-main-tranielmp8s-projects.vercel.app/" target='_blank'>website</a>
          </div>
        </div>
        <div className='w-72 rounded-xl card text-white p-2 border-2 border-red-600'>
          <img  height={350} width={300} className='bg-white rounded-xl border-2 border-red-600' src={img4} alt="" />
          <div >
            <h2 className='text-[32px] text-red-600 flex items-center justify-center'>Ticket Master</h2>
            <p className='p-2'>Application for Service Tickets. Authenticated users can create their own tickets. Users are able to delete their own tickets. Priority option available  </p>
          </div>
          <div className='project-tech flex'>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>Nextjs</span>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>Supabase</span>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>Reactjs</span>
          </div>
          <div className="web-links flex">
            <a className='text-red-600 m-2 underline text-[22px]' href="https://github.com/tranielmp8/nextjs_ticket_app" target='_blank'>github</a>
            <a className='text-red-600 m-2 underline text-[22px]' href="https://nextjs-ticket-app-sepia.vercel.app/login" target='_blank'>website</a>
          </div>
        </div>
        <div className='w-72 rounded-xl card text-white p-2 border-2 border-red-600'>
          <img  height={300} width={300} className='bg-white rounded-xl border-2 border-red-600' src={img3} alt="" />
          <div >
            <h2 className='text-[32px] text-red-600 flex items-center justify-center'>Vue Flex</h2>
            <p className='p-2'>Authenticated users can create workout cards. Click the plus sign at the top right after logging in. Add todo tags to your workout cards. Click tags after completion </p>
          </div>
          <div className='project-tech flex'>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>Vuejs</span>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>Firebase</span>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>JavaScript</span>
          </div>
          <div className="web-links flex">
            <a className='text-red-600 m-2 underline text-[22px]' href="https://github.com/tranielmp8/vue-ninja-flex" target='_blank'>github</a>
            <a className='text-red-600 m-2 underline text-[22px]' href="https://vue-ninja-flex.web.app/login" target='_blank'>website</a>
          </div>
        </div>
        <div className='w-72 rounded-xl card text-white p-2 border-2 border-red-600'>
          <img  height={350} width={300} className='bg-white rounded-xl border-2 border-red-600' src={img5} alt="" />
          <div >
            <h2 className='text-[32px] text-red-600 flex items-center justify-center'>Expense Tracker</h2>
            <p className='p-2'>Track your expenses using local storage on your system. Basic arithmetic used to track your finances</p>
          </div>
          <div className='project-tech flex'>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>JavaScript</span>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>HTML</span>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>CSS</span>
          </div>
          <div className="web-links flex">
            <a className='text-red-600 m-2 underline text-[22px]' href="https://github.com/tranielmp8/expense-tracker" target='_blank'>github</a>
            <a className='text-red-600 m-2 underline text-[22px]' href="https://unruffled-wing-b2c891.netlify.app/" target='_blank'>website</a>
          </div>
        </div>
        <div className='w-72 rounded-xl card text-white p-2 border-2 border-red-600'>
          <img  height={350} width={300} className='bg-white rounded-xl border-2 border-red-600' src={img2} alt="" />
          <div >
            <h2 className='text-[32px] text-red-600 flex items-center justify-center'>VueChat</h2>
            <p className='p-2'>Authenticated users can chat in real time with this Vue Chat App</p>
          </div>
          <div className='project-tech flex'>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>Vuejs</span>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>Firebase</span>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>JavaScript</span>
          </div>
          <div className="web-links flex">
            <a className='text-red-600 m-2 underline text-[22px]' href="https://github.com/tranielmp8/vue-chat-app" target='_blank'>github</a>
            <a className='text-red-600 m-2 underline text-[22px]' href="https://vue-chat-project-ed321.web.app/" target='_blank'>website</a>
          </div>
        </div>
        <div className='w-72 rounded-xl card text-white p-2 border-2 border-red-600'>
          <img  height={350} width={300} className='bg-white rounded-xl border-2 border-red-600' src={img6} alt="" />
          <div >
            <h2 className='text-[32px] text-red-600 flex items-center justify-center'>Magic Cards</h2>
            <p className='p-2'>Flip the cards to see if they match. See how good your memory is</p>
          </div>
          <div className='project-tech flex'>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>Reactjs</span>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>CSS</span>
            <span className='pill p-2 m-1 bg-red-600 rounded-2xl'>JavaScript</span>
          </div>
          <div className="web-links flex">
            <a className='text-red-600 m-2 underline text-[22px]' href="https://github.com/tranielmp8/magic-cards-react/tree/main" target='_blank'>github</a>
            <a className='text-red-600 m-2 underline text-[22px]' href="https://nostalgic-hypatia-d0baf2.netlify.app/" target='_blank'>website</a>
          </div>
        </div>
      </div>
    </div>
  )
}
