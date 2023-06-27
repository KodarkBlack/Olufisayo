import React from 'react'
import {TypeAnimation} from 'react-type-animation'

const Home = () => {
  return (
    <div id="main">
      <img  src="https://unsplash.com/photos/XJXWbfSo2f0" alt="" />

      <div>
        <h1 className="text-3xl  text-startup-blue">I'm Israel Olufisayo</h1>
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
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
        </h2>
        <div>
          <FaTwitter/>
          <FaFacebook/>
          <FaInstagram/>
        </div>
      </div>
    </div>
  )
}

export default Home
