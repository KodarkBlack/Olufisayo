import { TypeAnimation } from 'react-type-animation'
import tech from '../assets/jpeg/technology.jpg'

const Home = () => {
  return (
    <div className="relative">
      <img  src={tech} alt='technology' className='w-full h-screen'/>

      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'> 
        <h1 className="text-3xl text-white  text-startup-blue">I'm Israel Olufisayo</h1>
        <h2>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'I am a software Enthusiast  ',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'I am a software Engineer  ',
            1000,
            'I am a software Programmer',
            1000,
            'I am a software Badass',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em',  display: 'inline-block', WebkitTextFillColor: 'white' }}
          repeat={Infinity}
        />
        </h2>
        {/* <div>
          <FaTwitter/>
          <FaFacebook/>
          <FaInstagram/>
        </div> */}
      </div>
    </div>
  )
}

export default Home
