import React from 'react'
import img from '../assets/image/rossy.jpg'

function Home() {
  return (
    <section id="Home"  className='min-h-screen flex justify-center items-center relative'>

     <div className='text-center z-10 px-4'>
      <h1 className='text-5xl md:7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text
     text-transparent '>Hi, I am RossyTech</h1>

     <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>
      i am a frontend developer who loves creating a scaleable and user friendly website,
      my goal is to malke a site that is  very flesxible and fast website with amazing interface,i love the challenges 
      that comes with it,it makes you more patient and a smart mind
     </p>
    <div className='flex justify-between'>
    {/* <img className=' max-w-1xl' src={img}/> */}
    </div>
   <div className='flex space-x-4 justify-center'>
    <a href='#Services' className='bg-gradient-to-r from-blue-500 to-purple-600  text-white py-3 px-6 rounded font-medium 
    transition relative hover:translate-y-0.5 overflow-hidden hover:shadow-[0_0_15px-blue-400'>view services</a>

<a href='#Contact' className=' border hover:bg-gradient-to-r from-blue-500 to-purple-600  text-white py-3 px-6 rounded font-medium 
    transition relative hover:translate-y-0.5 overflow-hidden hover:shadow-[0_0_15px-blue-400'>Contact me</a>
    
   </div>

     </div>
    
    </section>
  )
}

export default Home
