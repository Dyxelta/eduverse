import React from 'react'

const Home = () => {
  return (
    <div className="relative bg-black/[0.6] text-white h-screen w-full before:content-[''] before:bg-[url('/src/components/images/Home-bg.jpg')] before:bg-no-repeat before:bg-center before:bg-cover before:bg-fixed before:h-full before:w-full before:absolute before:top-0 before:left-0 before:z-[-1] font-poppins" name='home' id='home'>
        <div className='flex flex-col justify-center max-w-[1100px] h-full m-auto p-4 '>
          <p className='text-7xl font-bold tablet:text-4xl'>Unlock your potential</p>
          <p className='text-4xl tablet:text-2xl mt-4'>One course at a time</p>
          <button href='/' className='py-[16px] px-[24px] text-lg font-medium text-white bg-primary rounded cursor-pointer mt-4 w-[300px] hover:bg-primary-dark hover:scale-105'>GET YOUR COURSE</button>
        </div>
    </div>
  )
}

export default Home