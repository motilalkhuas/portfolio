import React from 'react'
import '../App.css'
import instagram from '../Assets/Instagram.png';
import facebook from '../Assets/Facebook.png';
import linkedin from '../Assets/LinkedIn.png';
import twitter from '../Assets/Twitter.png';
import discord from '../Assets/Discord.png';
import home_image from '../Assets/Home Image.png'
import wavingHand from '../Assets/wavingHand.svg'
import arrow from '../Assets/Arrow.svg'
import Typewriter from 'typewriter-effect'
import profile from "../Assets/profile.png"


const Home = () => {
    const Icons = [
        { image: instagram },
        { image: facebook },
        { image: linkedin },
        { image: twitter },
        { image: discord },
    ]
    return (
        <>
            <section className='grid lg:grid-cols-3 mx-auto max-w-[1300px]'>

                <div className='lg:col-span-2 col-span-3 text-white lg:pl-16 md:pl-28 sm:pl-10 pl-5 sm:pr-0 pr-5 lg:pt-32 sm:pt-10 pt-5'>
                    <div className="flex">
                        <img src={wavingHand} alt="" className='wavingHand h-8 md:h-10' />
                        <p className='font-manrope font-bold text-[#FE6C3E] md:text-5xl sm:text-4xl text-3xl pt-1 px-2'>HEY</p>
                    </div>
                    <div className='font-manrope font-bold md:text-7xl sm:text-6xl text-5xl mt-3'>
                        I'm Motilal Khuas.
                    </div>
                    <div className='flex font-manrope md:text-4xl sm:text-3xl text-2xl mt-3'>
                        <p className='pr-2'>A</p>
                        <dev className='text-[#3953E9] font-bold'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Problem Solver.")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Block Chain Developer.")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Web Developer.")
                                        .start();
                                }}
                            />
                        </dev>
                    </div>
                    <div className='flex gap-2 pt-2'>
                        {
                            Icons.map((icon, index) => (
                                <a href='/' className='cursor-pointer' key={index}><img src={icon.image} alt="" className='h-9 sm:h-10' /></a>
                            ))
                        }
                    </div>
                    <div className='font-manrope md:mt-8 mt-6 md:text-[1.5rem] text-[1.25rem] md:block flex flex-row gap-x-1'>
                        <button className='bg-[#3953E9] border-[3px] border-[#3953E9] hover:bg-[#121212] hover:text-white duration-500 font-bold text-[#121212] hover:shadow-[#3953E9] hover:shadow-md xs:px-8 xs:w-auto w-1/2 py-1 mr-3'>Resume</button>
                        <button className='border-[3px] border-[#3953E9] hover:bg-[#3953E9] hover:text-[#121212] font-bold hover:shadow-[#3953E9] hover:shadow-md duration-500 xs:px-8 xs:w-auto w-1/2 py-1'>Hire Me</button>
                    </div>
                    <div className='grid justify-items-center mt-10'>
                        <img src={arrow} alt='' className='animate-bounce-right -z-20 md:h-13 h-10' />
                    </div>
                </div>
                <img src={home_image} alt="" className='lg:col-span-1 col-span-3 w-3/4 sm:w-96 lg:w-full mx-auto my-auto pt-10' />
            </section>
            <section className='grid lg:grid-cols-3 grid-cols-1 max-w-[1400px] md:px-16 sm:px-10 px-5 lg:mt-36 mt-16 mx-auto'>
                <div className='lg:col-span-2 sm:text-[1.5rem] text-[1.25rem] text-white'>
                    <h1 className='font-manrope font-bold md:text-6xl sm:text-5xl text-4xl'>Let Me <span className='text-[#FE6C3E]'>introduce </span>myself.</h1><br />
                    <p className='font-manrope text-justify'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p><br />
                    <p className='font-manrope text-justify'>I am fluent in classics like C, Java, Python and Javascript.</p><br />
                    <p className='font-manrope text-justify'>My field of Interest's are building new Web Technologies & Products and also in areas related to Block Chain and Machine Learning.</p><br />
                    <p className='font-manrope text-justify'>Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks like React.js, Angular.js etc..</p>
                </div>

                <div className='lg:col-span-1 col-span-3 grid lg:justify-items-end justify-items-center lg:pt-16 pt-10 pl-14'>
                    <img src={profile} alt="" className='h-56' />
                </div>
            </section>
        </>
    )
}

export default Home