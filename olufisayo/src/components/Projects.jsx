import React from 'react'
import ProjectItems from './ProjectItems'
import firstImage from '../assets/screenshotone.png'
import secondImage from '../assets/screenshottwo.png'
import thirdImage from '../assets/screenshotthree.png'
import fourthImage from '../assets/screenshotfour.png'

const Projects = () => {
  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi eius nisi non. Illo aspernatur mollitia consequuntur
            eum optio dolores odio.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItems img={firstImage} title='first'/>
            <ProjectItems img={secondImage} title='second'/>
            <ProjectItems img={thirdImage} title='third'/>
            <ProjectItems img={fourthImage} title='fourth'/>
        </div>
    </div>
  )
}

export default Projects
