import React, { useState } from 'react'
import '../App.css'
import {Link} from "react-router-dom";
import logo from '../Assets/Logo.svg'

const Header = () => {
   const [open, setOpen] = useState(false);
   const menus = [
      { name: "HOME", desti : '/' },
      { name: "ABOUT", desti : '/about' },
      { name: "SKILLS", desti : '/skills'},
      { name: "PROJECTS", desti : '/projects'},
      { name: "CONTACT", desti : '/contact'},
   ]
   return (
      <nav className='bg-[#121212] sticky top-[-1px] z-[100]'>
         <div className='flex justify-between  md:px-16 sm:px-10 px-5 py-4'>
            <Link to='/'><img src={logo} alt="" className="w-12 md:w-14" /></Link>
            {/* <div onClick={() => setOpen(!open)} className='text-4xl md:text-5xl text-white cursor-pointer md:hidden z-20'>
               <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div> */}
            <ul className={`md:static fixed top-0 bg-[rgba(255,255,255,0.08)] md:bg-transparent backdrop-blur-lg md:backdrop-blur-none text-center duration-300 ease-linear md:pt-0 pt-28 md:h-auto md:w-auto w-full h-screen ${!open ? 'right-[-100%] ' : 'right-0'}`}>
               {
                  menus.map((menu, index) => (
                     <li key={index} className="md:inline-block md:ml-10 ml-5 md:my-0 my-10 duration-300">
                        <Link to={menu.desti} className="text-white font-manrope cursor-pointer md:text-sm text-2xl inline-block py-3">
                           <span className="font-bold text-[#3953E9]">0{index}&nbsp;</span>{menu.name}</Link>
                     </li>
                  ))
               }
            </ul>
         </div>
      </nav>
   )
}

export default Header