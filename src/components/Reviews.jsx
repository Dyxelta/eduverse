import React from 'react'
import User1 from './images/User1.jpg'
import User2 from './images/User2.jpg'
import User3 from './images/User3.jpg'

const Reviews = () => {
  return (
    <div className='w-full font-poppins' name='reviews'>
        <div className='w-[1240px] my-16 mx-auto py-16 px-auto tablet:w-full'>
            <h1 className='text-5xl text-center'>Reviews</h1>
            <span className='block w-[40px] h-[3px] my-4 mx-auto bg-primary'></span>
            <div className='grid grid-cols-3 gap-[20px] my-16 mx-auto tablet:grid-cols-1'>
                <div className='border-solid border border-graywhite rounded-[8px] shadow-xl p-4 tablet:max-w-full tablet:m-4'>
                    <img className='rounded-full -mt-8 w-[100px] h-auto' src={User1} alt="user1" />
                    <p className='text-lg m-[12px]'>This app changed my life. I found the perfect course to enhance my skills, and the user-friendly platform made learning a breeze. Now, I'm confident in my abilities and even started my own business. Thank you!</p>
                    <p className='text-lg m-[12px]'><span className='text-primary text-lg font-bold'>Sarah Emily</span></p>
                    <p className='text-lg m-[12px]'>Office Employee</p>
                </div>
                <div className='border-solid border border-graywhite rounded-[8px] shadow-xl p-4 tablet:max-w-full tablet:m-4'>
                    <img className='rounded-full -mt-8 w-[100px] h-auto' src={User2} alt="user1" />
                    <p className='text-lg m-[12px]'>I've been a loyal user for over a year, and it continues to exceed my expectations. Top-notch courses, expert instructors, engaging learning – it's a career investment I highly recommend.</p>
                    <p className='text-lg m-[12px]'><span className='text-primary text-lg font-bold'>John Doe</span></p>
                    <p className='text-lg m-[12px]'>University Student</p>
                </div>
                <div className='border-solid border border-graywhite rounded-[8px] shadow-xl p-4 tablet:max-w-full tablet:m-4'>
                    <img className='rounded-full -mt-8 w-[100px] h-auto' src={User3} alt="user1" />
                    <p className='text-lg m-[12px]'>This app is a game-changer. Affordable, flexible, and packed with valuable courses. I landed a new job thanks to the skills I acquired here. Grateful for this platform!</p>
                    <p className='text-lg m-[12px]'><span className='text-primary text-lg font-bold'>Kevin Levin</span></p>
                    <p className='text-lg m-[12px]'>Fresh Graduate</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews