import React from 'react'
import ProjectItems from './ProjectItems'
import Shoppy from '../assets/shoppy.png'
import Toms from '../assets/toms.png'
import Detlify from '../assets/detlify.png'
import Ladey from '../assets/ladey.png'
import Acadasave from '../assets/acadasave.png'
import Yoruba from '../assets/yoruba.png'
import Tomsplace from '../assets/tomsplace.png'
import Tomsfood from '../assets/tomsfood.png'
import Olufisayo from '../assets/olufisayo.png'



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
            <ProjectItems img={Toms} title='React'/>
            <ProjectItems img={Detlify} title='HTML, CSS, JAVASCRIPT, BOOTSTRAP, AOS'/>
            <ProjectItems img={Ladey} title='HTML, CSS, JAVASCRIPT, BOOTSTRAP, AOS'/>
            <ProjectItems img={Shoppy} title='HTML, CSS, JAVASCRIPT, BOOTSTRAP, AOS'/>
            <ProjectItems img={Acadasave} title='HTML, CSS, JAVASCRIPT, BOOTSTRAP, AOS'/>
            <ProjectItems img={Olufisayo} title='HTML, CSS, JAVASCRIPT, BOOTSTRAP'/>
            <ProjectItems img={Yoruba} title='HTML, CSS, JAVASCRIPT'/>
            <ProjectItems img={Tomsplace} title='React + vite,  tailwindcss'/>
            <ProjectItems img={Tomsfood} title='React + vite,  tailwindcss'/>
        </div>
    </div>
  )
}

export default Projects
