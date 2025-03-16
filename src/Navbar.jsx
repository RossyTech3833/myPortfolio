import React, { useEffect } from 'react'

function Navbar({menuOpen,setMenuopen}) {
 
  useEffect(()=>{
    document.body.style.overflow ? "hidden" : ""
  },[menuOpen])


  return (
    <div className='fixed top-0 w-full z-40 bg-black-400 backdrop-blur-lg border-white/10'>
        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex justify-between items-center h-16'>
                <a href='#Home' className='font-mono font-bold text-xl text-white'>Rossy<span className='text-blue-500'>
                    Tech</span>
                </a>
           {/* this is for the hamburger menu */}
                <div className='w-8 h-6 relative cursor-pointer z-40 md:hidden' 
                onClick={()=> setMenuopen((prev)=> !prev)}>
                 &#9776;
                </div>

              {/* this is for the destop menu */}
                <div className='hidden md:flex items-center space-x-8'>
            <a href='#Home' className='text-gray-300 hover:text-blue-300 transition-colors'>Home</a>
            <a href='#About' className='text-gray-300 hover:text-blue-300  transition-colors'>About</a>
            <a href='#Contact' className='text-gray-300 hover:text-blue-300  transition-colors'>Contact</a>
            <a href='#Services' className='text-gray-300 hover:text-blue-300  transition-colors'>Services</a>


                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar