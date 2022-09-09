import React from 'react'
import Text from './Text'
import bg from '../images/bc.jpg'
import N from './N'

function Part7() {
  return (
    <div className='my-9 text-center p-10'>
                <h2 className='text-xl font-bold  my-8'>عنوان فرعي</h2>
                <div className='grid md:grid-cols-3 items-center sm:grid-cols-1'>
                <N/>  
                <div className='relative  col-span-2'>
                <img src={bg} className="w-full bg-cover h-screen bg-no-repeat" />
                <div className='absolute  inset-0'>            
                <Text/> 
                </div>  </div>              
                
                </div>
         </div>
  )
}

export default Part7