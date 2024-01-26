import React from 'react'
import logo from '../assets/images/headerimg/97c43f8974e6c876.svg'
import loginicon from '../assets/images/headerimg/login.svg'
import {  FaUser } from "react-icons/fa";
 const Header = () => {
  return (
    <nav className='bg-transparent px-10 h-20 flex items-center'>
    <div className=' flex w-1/2'>
      <img
              className="w-[134px] h-6" 
              src={logo}
            />
           
    </div>
    <div className='flex w-1/2 justify-end  py-4 '>
  <a className='bg-white rounded-full px-4 py-3 text-base text-black flex flex-row items-center mx-4'>
<span className='mr-1 hidden md:block'><FaUser  size={'20px'} /></span>
  Log in
  </a>
  <a className='bg-black rounded-full px-4 py-3 text-base text-white flex flex-row items-center '>
Sign up
  </a>
    </div>
    </nav>
  )
}
export default Header;
