import React from 'react'

type ProjectCardProps = {
  number: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ number }) => {
  return (
    <div className='ml-10'>
      <div className='flex flex-col justify-end w-[401px] h-[308px] bg-slate-200'>
        {number}
        <div className='bg-slate-400 w-full h-[104px]'>
          <h4>Type of Project</h4>
          <h2>Name of Project</h2>
        </div>
      </div>
    </div>
  )
}

export default function index() {
  return (
    <div className='w-[90%] my-24'>
      <div className='flex flex-row items-center justify-center'>
        <div>
          <h5 className='font-bold text-lg mb-2'>RECENT WORK</h5>
          <h2 className='font-bold text-3xl w-[60%]'>
            Look at my portolio and give me your feedback
          </h2>
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex flex-col pr-5 border-solid border-r-2 border-blue-trans'>
            <h2 className='font-bold text-4xl'>xxxK</h2>
            <h4 className='font-semibold text-gray-500'>Completed Projects</h4>
          </div>
          <div className='flex flex-col pl-5'>
            <h2 className='font-bold text-4xl'>xxx%</h2>
            <h4 className='font-semibold text-gray-500'>Positive Rating</h4>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center mt-12'>
        <ProjectCard number={1} />
        <ProjectCard number={2} />
        <ProjectCard number={3} />
      </div>
    </div>
  )
}
