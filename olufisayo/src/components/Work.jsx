import React from 'react'
import WorkItems from '../WorkItems'

const data = [
    {
        year: 2020,
        title: 'Team Lead',
        duration: '1 Years',
        details: 'Led a team of developers, managed project timelines, and ensured successful project delivery.'
    },
    {
        year: 2021,
        title: 'Frontend Developer',
        duration: '3 Years',
        details: 'Designed and developed user-friendly interfaces for web applications using modern frontend technologies.'
    },
    {
        year: 2022,
        title: 'Backend Developer',
        duration: '2 Years',
        details: 'Built and maintained backend systems, including databases, APIs, and server-side logic.'
    },
    {
        year: 2023,
        title: 'Full Stack  Developer',
        duration: 'Present',
        details: 'Currently working as a full-stack developer, handling both frontend and backend development tasks.'
    }
]

const Work = () => {
  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx)=> (
            <WorkItems 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details}
            />
        ))}
    </div>
  )
}

export default Work
