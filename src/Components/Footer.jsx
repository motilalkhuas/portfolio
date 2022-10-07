import React from 'react'
import instagram from '../Assets/Instagram.png';
import facebook from '../Assets/Facebook.png';
import linkedin from '../Assets/LinkedIn.png';
import twitter from '../Assets/Twitter.png';
import discord from '../Assets/Discord.png';


const Footer = () => {
  const SocialIcons = [
    { image: instagram },
    { image: facebook },
    { image: linkedin },
    { image: twitter },
    { image: discord },
 ]
  return (
    <footer className='bg-[rgba(255,255,255,0.08)] lg:mt-20 mt-10 box-border'>
      <div className='flex justify-between lg:flex-row flex-col items-center text-white sm:text-[1.25rem] text-[1.125rem] md:px-16 sm:px-10 px-5 py-5 mx-auto max-w-[1400px]'>
        <div className="font-roboto text-center">
          Developed by <span className='text-[#3953E9]'>Motilal Khuas</span>
        </div>
        <div className="font-roboto text-center lg:pt-0 pt-1">
          Copyright C 2022 MK
        </div>
        <div className='flex gap-2 lg:mx-0 mx-auto lg:pt-0 pt-3'>
          {
            SocialIcons.map((icon,index) =>(
             <img key={index} src={icon.image} alt="" className='h-7'/>
            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer