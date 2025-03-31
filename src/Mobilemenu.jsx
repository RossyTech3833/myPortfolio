import React from 'react'

function Mobilemenu({menuOpen, setMenuopen}) {
  return (
  <div className={`fixed top-0 left-0 w-full text-white bg-black-300 z-40 flex flex-col items-center justify-center
  transition-all duration-300 ease-in-out
 ${
    menuOpen
    ? "h-screen opacity-100 pointer-events-auto"  : "h-0 opacity-0 pointer-events-none"
 }
  `}>

<button onClick={()=> setMenuopen(false)} 
className="absolute top-2 right-8 text-white text-3xl focus:outline-none
cursor-pointer flex-col justify-center"  
  aria-label ="close-menu"
  >
    &times;
</button>
       <a href='#Home' 
       onClick={()=>setMenuopen(false)}
       className={`text-2xl  font-semibold text-white my-4 transform transition-transform duration-300
       ${menuOpen
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4"}
       `}>Home</a>

            <a href='#About'
            onClick={()=>setMenuopen(false)}
             className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
             ${menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"}
             `}>About</a>

            <a href='#Contact'
            onClick={()=>setMenuopen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen
             ? "opacity-100 translate-y-0"
             : "opacity-0 translate-y-4"}
            `}>Contact</a>

            <a href='#Services'
            onClick={()=>setMenuopen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen
             ? "opacity-100 translate-y-0"
             : "opacity-0 translate-y-4"}
            `}>Services</a>

  </div>
  )
}

export default Mobilemenu