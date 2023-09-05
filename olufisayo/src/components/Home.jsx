import { TypeAnimation } from 'react-type-animation'
import tech from '../assets/jpeg/technology.jpg'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Home = () => {
  return (
    <div id='#main' className="relative">
      <img  src={tech} alt='technology' className='w-full h-screen object-cover'/>
      <div className='w-full h-screen absolute top-0 left-0 bg-black/70'></div>

      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'> 
        <h1 className="sm:text-5xl text-4xl font-bold text-white  text-startup-blue">I'm Israel Olufisayo</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-white'>
          I am 
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'a software Enthusiast  ',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'a software Engineer  ',
            1000,
            'a Computer Programmer',
            1000,
            'a Frontend Developer',
            1000
          ]}
          wrapper="div"
          speed={50}
          style={{ fontSize: '1em',  paddingLeft: '5px', WebkitTextFillColor: 'white' }}
          repeat={Infinity}
        />
        </h2>
        <div className='flex justify-between pt-6 max-w-[200px] w-full'>
          <FaFacebook className='cursor-pointer text-white  hover:bg-black hover:rounded-full' size={20}/>
          <FaInstagram className='cursor-pointer text-white hover:bg-black hover:rounded-full' size={20}/>
          <FaLinkedin className='cursor-pointer text-white hover:bg-black hover:rounded-full' size={20}/>
          <FaTwitter className='cursor-pointer text-white hover:bg-black hover:rounded-full' size={20}/>
        </div>

      </div>
    </div>
  )
}

export default Home
