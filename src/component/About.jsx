import React from 'react'

function About() {

  const frontendskills =["React","javascipt","tailwindcss","bootsrap"]
  const backendskills =["Github","firebase"]
  return (
   <section id='About' className='min-h-screen flex justify-center items-center py-20'>
    <div className=' max-w-3xl mx-auto px-4' >
        <h2 className='text-5xl md:7xl font-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text 
        text-transparent text-center'>About me</h2>

        <div className=' rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all'>
          <p className='text-gray-300 mb-6'>passionate developer who likes to take on any challenge to develop a scaleable and nice performance
            website.and taking no as a motivation to be better in what am doing
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='rounded-xl p-6 hover:translate-y-1 transition-all'>
             <h3 className='font-xl font-bold mb-4 text-gray-300'>frontend</h3>
             <div className='flex flex-wrap gap-2'>
              {frontendskills.map((tech,key)=>(
                <h4 key={key} 
                className='bg-blue-500/10 text-blue-300 rounded-full py-1 px-3'>{tech}</h4>
              ))}
             </div>
            </div>

            <div className='rounded-xl p-6hover:translate-y-1 transition-all'>
             <h3 className='font-xl font-bold mb-4 text-gray-300'>Backend</h3>
             <div className='flex flex-wrap gap-2'>
              {backendskills.map((tech,key)=>(
                <h4 key={key} 
                className='bg-blue-500/10 text-blue-300 rounded-full py-1 px-3'>{tech}</h4>
              ))}
             </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
          <div className='border border-white/10 text-gray-300 rounded-xl transition-all duration-300 ease-in-out p-6'>
            <h3 className='text-xl font-bold mb-4'>Education</h3>
            <ul className='list-disc list-inside  space-y-2'>
              <li>HND in computer science-[2017-2022], institute and management Technology Enugu state</li>
              <li>relevant course:web development</li>
            </ul>
          </div>

          <div className='border border-white/10 text-gray-300 rounded-xl transition-all duration-300 ease-in-out p-6'>
            <h3 className='text-xl font-bold mb-4'>work experience</h3>
            <p>i work as a freelencer in building website like e-commerce,blog site,portfolio etc....</p>
          </div>
        </div>
    </div>
   </section>
  )
}

export default About