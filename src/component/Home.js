import React from 'react'
import home from '../images/c2.jpg'
import Navbar from './Navbar'
function Home() {
  return (
<div className='text-black text-center'>
                  
                
<div className='relative'>
<img src={home} className="w-full bg-cover bg-contain h-screen bg-no-repeat " />
<div className='bg-violet-300 opacity-20 h-full absolute inset-0 '>
                                  </div>
</div>
  <div className='p-8 h-full absolute inset-0 '>
    <Navbar/>
    
<div className=' max-w-3xl my-28 m-auto'>
    <h1 className='text-5xl font-bold my-10'>
    انتهاك حق الأمومة في منظمات المجتمع المدني السوري... نساء يخفين حملهن
    </h1>
    <p  className='text-lg font-bold text-black'>
    تحقيق سارة جمال
    </p>
    </div>
  </div>
</div>
  )
}

export default Home