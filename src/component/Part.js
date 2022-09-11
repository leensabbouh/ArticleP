import React from 'react'

function Part({title,chart,text}) {
  return ( <div className='my-9 text-center  px-10'>
  {title}
                <div className='grid md:grid-cols-2 items-start sm:grid-cols-1'>
                 {chart}                   
                 {text} 
                </div>
  </div>
    
  )
}

export default Part