import React from 'react'
import { Fugaz_One } from "next/font/google";
import Button from './Button';
import Calendar from './Calendar';
import Link from 'next/link';
import CallToAction from './CallToAction';
const fugaz = Fugaz_One({ subsets: ["latin"],weight:['400'] });

const Hero = () => {
  return (
    <div className='py-4 md:py-10 flex flex-col gap-8 sm:gap-10 '>

    <h1 className={'text-5xl sm:text-text-6xl md:text-7xl text-center ' + fugaz.className}>
      <span className='textGradient'>EmoJournal </span>
      helps you track your <span className='textGradient'>daily</span> mood!</h1>

      <p className='text-lg sm:text-xl md:text-2xl w-full mx-auto max-w-[700px]
      text-center'>Create your mood record and <span className='font-semibold italic text-2xl text-pink-500'>
        Improve your Mental Health</span></p>

        <CallToAction/>

        <Calendar demo />

    </div>
  )
}

export default Hero