import React from 'react'
function Title({title,img}) {
  return (
    <div>
                <div className='relative my-9'>
                  
                  <div className='relative h-64'>
                                <img src={img} className='w-full bg-cover h-full bg-no-repeat  bg-contain'/>
                                <div className='bg-violet-900 opacity-20 h-full absolute inset-0'>
                                  </div>
                  </div>
                               
                <h2 className='text-xl font-bold absolute inset-0 top-1/2 mx-32 text-black'> {title}</h2>
                </div>
    </div>
  )
}

export default Title