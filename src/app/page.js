import{BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillLinkedin,AiFillGithub,AiFillTwitterCircle} from 'react-icons/ai';
import Image from 'next/image';
import deved from './Images/dev-ed-wave.png'
import andre from './Images/andre.png'
import andre2 from './Images/andre2.png'
import andre3 from './Images/andre3.png'
import code from './Images/code.png'
import ahoy from './Images/ahoy1.png'
import ahoy2 from './Images/ahoy2.png'
import ahoy3 from './Images/ahoy4.png'
import suss from './Images/suss1.png'
import suss2 from './Images/suss2.png'
import suss3 from './Images/suss3.png'


export default function Home() {
 
  return (
   <main className=' bg-white px-10 md:px-20 lg:px-40'>
    <section className="  min-h-screen">
      <nav className=' py-10 mb-12 flex justify-between'>
        <h1 className=' text-xl font-semibold'>Nallattuthodika Haris Rahman</h1>
        <ul className='flex items-center'>
          <li><BsFillMoonStarsFill className=' cursor-pointer text-2xl'/></li>
          <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='Resume.pdf'download  >Resume</a></li>

        </ul>
      </nav>
      <div className=' text-center p-10'>
        <h2 className=' text-5xl py-2 text-teal-800 font-medium md:text-6xl'>Haris Rahman</h2>
        <h3 className=' text-2xl'>Full-Stack developer </h3>
        <p className=' text-md py-5 leading-8 text-gray-600'>qualified to make adjustments that will improve the functionality of software programmes and to aid in their development, maintenance, and deployment. I am a good problem-solver with the aptitude to handle both technical and abstract problems.
 </p>
      </div>
      <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-500'>
        <AiFillTwitterCircle/>
        <AiFillLinkedin/>
        <AiFillGithub/>

      </div>
      <div className=' relative mx-auto bg-gradient-to-b from-green-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
        <Image src={deved} layout='fill' objectFit='cover'/>

      </div>

    </section>
    <section>
      <div >
        <h3 className=' text-3xl py-1'>Services I offer</h3>
        <p className=' text-md py-2 leading-8 text-gray-500'>
        Since I started my career as a freelance <span className=' text-green-400'>developer</span>, I have worked remotely for <span className=' text-green-400'>start-up</span>  businesses and with creative individuals to create final projects.
        </p>
        
      </div>
     <div>
       
        <div className=' text-center shadow-lg p-10 rounded-xl my-10 '>
          <Image src={code} width={100} height={100}/>
          <h3 className=' text-lg font-medium pt-8 pb-2'>Code</h3>
          <p className=' py-2'>Making websites with modern tools and appropriate layouts
          </p>
          <h4 className=' py-4 text-green-600'>Programming Language I use</h4>
          <p className='text-gray-700 py-1'>JavaScript <span>React</span> <span>Next js</span></p>
          <p className='text-gray-700 py-1'>PHP <span>Laravel</span></p>
          <p className='text-gray-700 py-1'>HTML <span>HTML5</span></p>
          <p className='text-gray-700 py-1'>CSS <span>CSS3</span><span>TailwindCSS</span></p>
  
        </div>
        
     </div>
    </section>
    <section>
      <div>
        <h3 className=' text-3xl py-1'>Portfolio</h3>
        <p className=' text-md py-2 leading-8 text-gray-500'>
          
        Since I started my career as a freelance <span className=' text-green-400'>developer</span>, I have worked remotely for <span className=' text-green-400'>start-up</span>  businesses and with creative individuals to create final projects.
        </p>
      </div>
      <div className='  flex flex-col gap-16 py-10' >
        
       
        <div className=' lg:flex lg:justify-between lg:p-5 lg:align-middle  gap-3 '>
          <p className=' text-lg font-medium  py-2 leading-8 text-gray-500'>
          <span className=' text-2xl font-bold'>Personal portfolio</span><br/>
          <a className=' hover:text-green-500' href='https://andreport-aac85.web.app/'>https://andreport-aac85.web.app/</a><br/> React Js has been used to construct a personal portfolio. React Library was used, including React Iconand Font Awesome, and Email.js Service was used to generate the conversational elements, Firebase was used to manage the hosting.
          </p>
        <Image src={andre}  className=' lg:w-full lg:h-96 rounded-md'/>
        <Image src={andre2}  className=' lg:w-full lg:h-96 rounded-md' />
        <Image src={andre3}  className=' lg:w-full lg:h-96 rounded-md'/>
        </div>
        <div className='  lg:flex lg:justify-between lg:p-5 lg:align-middle gap-3 '>
          <p className=' text-lg font-medium py-2 leading-8 text-gray-500'>
          <span className=' text-2xl font-bold'>Company portfolio</span><br/>
          <a className=' hover:text-green-500' href='https://andreport-aac85.web.app/'>https://andreport-aac85.web.app/</a><br/>
            React Js has been used to construct a personal portfolio. React Library was used, including React Iconand Font Awesome, and Email.js Service was used to generate the conversational elements, Firebase was used to manage the hosting.
          </p>
        <Image src={suss}  className=' lg:w-full lg:h-96 rounded-md'/>
        <Image src={suss2}  className=' lg:w-full lg:h-96 rounded-md'/>
        <Image src={suss3}  className=' lg:w-full lg:h-96 rounded-md' />
        
        </div>
        <div className='  lg:flex lg:justify-between lg:p-5 lg:align-middle gap-3 p-5 '>
          <p className=' text-lg font-medium  py-2 leading-8 text-gray-500'>
          <span className=' text-2xl font-bold'>Company Website</span><br/>
          <a className=' hover:text-green-500' href='https://andreport-aac85.web.app/'>https://andreport-aac85.web.app/</a><br/>
            React Js has been used to construct a personal portfolio. React Library was used, including React Iconand Font Awesome, and Email.js Service was used to generate the conversational elements, Firebase was used to manage the hosting.
          </p>
        <Image src={ahoy}  className=' lg:w-full lg:h-96 rounded-md'/>
        <Image src={ahoy2}  className=' lg:w-full lg:h-96 rounded-md'/>
        <Image src={ahoy3}  className=' lg:w-full lg:h-96 rounded-md'/>
        </div>
        
      </div>
    </section>

   </main>
  )
}
