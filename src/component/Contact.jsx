import React, { useState } from 'react'
import emailjs from 'emailjs-com'

function Contact() {

  const [formData,setformdata] =useState({
    name:"",
    email: "",
    message: ""
  })

const SERVICES_ID ="service_91lr15m"
const TEMPLATE_ID ="template_51kdwia"
const PUBLIC_KEY="4owqNLttb28fc59Vf"

const handleSubmit = (e) =>{
e.preventDefault()

emailjs.sendForm(SERVICES_ID,TEMPLATE_ID,e.target,PUBLIC_KEY).then((res)=>{
  alert("message sent")
  setformdata({name: "",email: "", message: ""})
}).catch(()=>alert("oops something went wrong,try again"))

}



  return (
    <section id='Contact' className='min-h-screen flex items-center justify-center py-20'>
     
     <div className='px-4 w-150'>
        <h2 className='text-3xl md:3xl font-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text 
        text-transparent'>Get in Touch</h2>
        <form className='space-y-6' onSubmit={handleSubmit}>
        <div className='relative'>
            <input type='text' id='name' name='name' placeholder='name' 
            onChange={(e)=>
            setformdata({...formData,name: e.target.value})}
            value ={formData.name}
            required
            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
            focus:border-blue-500'/>
        </div>

        <div className='relative'>
            <input type='email' id='email' name='email' placeholder='example@gmail.com'
            value ={formData.email}
             onChange={(e)=>
            setformdata({...formData,email: e.target.value})}
             required
            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
            focus:border-blue-500'/>
        </div>

        <div className='relative'>
            <textarea id='message' name='message' placeholder='type'
            value ={formData.message}
             onChange={(e)=>
            setformdata({...formData,message: e.target.value})}
             required
            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
            focus:border-blue-500'/>
        </div>

        <button type='submit' className='w-full rounded py-3 px-6 bg-blue-500 font-medium transition overflow-hidden
        hover:translate-y-0.5'>send message</button>
        </form>
     </div>
    </section>
  )
}

export default Contact