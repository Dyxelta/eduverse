import React from 'react'

const Demo = () => {
  return (
    <div className='my-20 mx-auto p-4 w-full font-poppins' name='demo'>
        <div className='max-width-[1240px] m-auto grid grid-cols-2 tablet:max-w-full tablet:grid-cols-1 tablet:gap-[30px]'>
            <div className='p-4 flex flex-col'>
                <p className='text-2xl italic'>30+ Types of Course</p>
                <p className='text-5xl font-semibold my-2 mx-0'>One Vision</p>
                <p className='text-xl mb-4'>to make learning accessible, engaging, and transformative. We aim to empower individuals globally by offering top-quality courses that fuel personal and professional growth. Our goal is to unite lifelong learners and experts, fostering a culture of curiosity, progress, and success.</p>
                <button className='py-[16px] px-[24px] text-lg font-medium text-white bg-primary rounded cursor-pointer w-full hover:bg-primary-dark hover:scale-105'>GET FREE TRIAL OF OUR COURSE</button>
            </div>
            <div className='m-auto '>
                <iframe className='tablet:w-full tablet:h-auto' width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=fX871haUSrIhX6Po" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default Demo