import React from 'react'
import Logo from './images/Logo.png'

const Footer = () => {
  return (
    <div className='w-full bg-black-bg text-secondary'>
        <div className='max-w-[1240px] m-auto text-center flex flex-col items-center justify-evenly'>
            <img className='w-[200px] h-auto pt-8' src={Logo} alt="Logo" />
            <div className='text-center py-8 '>
                <p>2023 Eduverse, Inc. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer