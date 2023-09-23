import React from 'react'
import Person from './images/Person.png'

const About = () => {
  return (
    <div className='bg-offwhite m-auto pt-32 px-4 w-full font-poppins' name='about'>
        <div className='w-[1240px] m-auto grid grid-cols-2 tablet:grid-cols-1 tablet:w-full'>
            <img className='tablet:p-0 tablet:w-[90vw]' src={Person} alt="person" />
            <div className='flex flex-col justify-center items-center p-12 tablet:p-0'>
                <h1 className='text-5xl'>About</h1>
                <span className='block w-[40px] h-[3px] my-4 mx-auto bg-primary'></span>
                <p className='text-3xl italic font-semibold'>I am Dixon Willow, a mentor in lots of educational institute</p>
                <p className='my-8'>As the founder and visionary behind our course selling app, my mission is to empower individuals worldwide with the transformative power of knowledge. With a passion for lifelong learning and a commitment to making education accessible to all, I embarked on this journey to create a platform that connects learners and educators seamlessly. Our app is more than just a marketplace; it's a gateway to unlocking your potential. I believe that education is the key to personal and professional growth, and through our platform, we strive to provide a diverse range of courses that cater to your interests and aspirations. Join us in your quest for knowledge and let's embark on this learning journey together.</p>
                <button className='py-[16px] px-[24px] text-lg font-medium text-white bg-primary rounded cursor-pointer mx-4 mt-4 w-[300px] hover:bg-primary-dark hover:scale-105 tablet:mb-4'>FIND OUT MORE</button>
            </div>
        </div>
    </div>
  )
}

export default About