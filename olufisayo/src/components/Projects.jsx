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
        <p className='text-center py-8 text-stone-600'>
          Welcome to my portfolio of projects. Here, you'll find a selection of my recent work
          showcasing a variety of skills and technologies I've mastered. Feel free to explore
          and get in touch if you have any questions or would like to collaborate on a project.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItems img={firstImage} title='React'/>
            <ProjectItems img={secondImage} title='Alx'/>
            <ProjectItems img={thirdImage} title='Html, Css'/>
            <ProjectItems img={fourthImage} title='javascript'/>
        </div>
    </div>
  )
}

export default Projects
