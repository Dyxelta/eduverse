import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from './images/Logo.png'
import { Link } from 'react-scroll'

const navbar = () => {

    const[open, setOpen] = useState(false)

    const handler = () => setOpen(!open)

    const closeOverlay = () => setOpen(false)

    const[header, setHeader] = useState(false)

    const scrollNav = () => {
        window.scrollY >= 100 ? setHeader(true) : setHeader(false)
    }

    window.addEventListener("scroll", scrollNav)

  return (
    <div className={`fixed top-0 left-0 h-[90px] w-full z-[1] transition-all ease-in duration-300 overflow-hidden ${header ? 'bg-black/[0.7]' : ''} tablet:max-w-full tablet:bg-black/[0.9] font-poppins`}>

        <nav className='flex justify-between items-center max-w-[1240px] h-full m-auto px-4 tablet:max-w-full'>
            <a href="/">
                <img className='w-[150px] h-auto tablet:w-[100px]' src={Logo} alt="logo"/>
            </a>

            <div className='hidden tablet:block' onClick={handler}>
                {open ? (<FaTimes size={30} style={{color:'#FFFFFF'}}/>) : (<FaBars size={30} style={{color:'#FFFFFF'}}/>)}
            </div>

            <ul className={`flex text-xl tablet:fixed ${open ? 'tablet:left-0' : 'tablet:left-[100%]'} tablet:top-[90px] tablet:flex-col tablet:bg-black/[0.9] tablet:w-full tablet:h-[90vh] tablet:z-[999] tablet:text-center tablet:transition-all tablet:duration-300`}>
                <li className='p-4 font-medium tablet:my-[1.5rem] hover:scale-110'>
                    <Link className='hover:pb-[12px] hover:border-b-[3px] hover:border-solid hover:border-accent text-offwhite hover:cursor-pointer' to='home' onClick={closeOverlay} smooth={true} duration={300}>Home</Link>
                </li>
                <li className='p-4 font-medium tablet:my-[1.5rem] hover:scale-110'>
                    <Link className='hover:pb-[12px] hover:border-b-[3px] hover:border-solid hover:border-accent text-offwhite hover:cursor-pointer' to='about' onClick={closeOverlay} smooth={true} duration={300}>About</Link>
                </li>
                <li className='p-4 font-medium tablet:my-[1.5rem] hover:scale-110'>
                    <Link className='hover:pb-[12px] hover:border-b-[3px] hover:border-solid hover:border-accent text-offwhite hover:cursor-pointer' to='reviews' onClick={closeOverlay} smooth={true} duration={300}>Reviews</Link>
                </li>
                <li className='p-4 font-medium tablet:my-[1.5rem] hover:scale-110'>
                    <Link className='hover:pb-[12px] hover:border-b-[3px] hover:border-solid hover:border-accent text-offwhite hover:cursor-pointer' to='demo' onClick={closeOverlay} smooth={true} duration={300}>Demo</Link>
                </li>
            </ul>
        </nav>

    </div>
  )
}

export default navbar