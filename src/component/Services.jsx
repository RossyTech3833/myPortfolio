import React from 'react'

function Services() {
  return (
    <section id='Services'  className='min-h-screen flex justify-center items-center py-20'>
     <div className='max-w-5xl mx-auto px-4'>
        <h2 className='text-3xl md:7xl font-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text 
        text-transparent text-center'>
            featured project
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='text-gray-300'>
            <h3>personal portfolio :</h3>
            <p>very good to navigate and has a beautiful interface,
                
                so fast to load and was deployed to my github account,using :</p>

                <div className='flex'>
                    {["React","tailwindcss","javascript","github"].map((tech,key)=>(
                        <h4 key={key}
                        className='bg-blue-500/10 text-blue-300 rounded-full py-1 px-3
                        bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text 
        text-transparent'>{tech}</h4>
                    ))}
                </div>
                <div>
                    <a href="#" >view project
                    &#8594;
                    </a>
                </div>
        </div>

        <div className='text-gray-300'>
            <h3>travelling tour :</h3>
            <p className=''>very good to navigate and has a beautiful interface,
                
                so fast to load and was deployed to my github account,using :</p>

                <div className='flex'>
                    {["React","tailwindcss","javascript","github"].map((tech,key)=>(
                        <h4 key={key}
                        className='bg-blue-500/10 text-blue-300 rounded-full py-1 px-3
                        bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text 
        text-transparent'>{tech}</h4>
                    ))}
                </div>
                <div>
                    <a href="#" >view project
                    &#8594;
                    </a>
                </div>
        </div>

        <div className='text-gray-300'>
            <h3>Blogging site :</h3>
            <p>very good to navigate and has a beautiful interface,
                
                so fast to load and was deployed to my github account,using :</p>

                <div className='flex'>
                    {["React","tailwindcss","javascript","github"].map((tech,key)=>(
                        <h4 key={key}
                        className='bg-blue-500/10 text-blue-300 rounded-full py-1 px-3
                        bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text 
        text-transparent'>{tech}</h4>
                    ))}
                </div>
                <div>
                    <a href="#" >view project
                    &#8594;
                    </a>
                </div>
        </div>

        <div className='text-gray-300'>
            <h3>E-commerce :</h3>
            <p>very good to navigate and has a beautiful interface,
                
                so fast to load and was deployed to my github account,using :</p>

                <div className='flex'>
                    {["React","tailwindcss","javascript","github"].map((tech,key)=>(
                        <h4 key={key}
                        className='bg-blue-500/10 text-blue-300 rounded-full py-1 px-3
                        bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text 
        text-transparent'>{tech}</h4>
                    ))}
                </div>
                <div>
                    <a href="#" >view project
                    &#8594;
                    </a>
                </div>
        </div>
        </div>
     </div>
    </section>
  )
}

export default Services