import React from 'react'

const WoveNews = () => {
  return (
    <div className='mx-auto container px-6 '>
      <div className='flex justify-start items-center lg:pl-[7.5rem]'>
        <div className='relative'>
          <img className='lg:w-[70%] lg:-mt-12  w-full' src='/images/bgImg.svg' alt='' />
        </div>
        <div className='absolute flex flex-col lg:-mt-16 '>
          <div className='w-full'>

            <h1 className='max-w-[514px] text-[#FFFFFF] text-4xl md:text-5xl leading-[135%] font-bold not-italic -tracking-[0.01em] montserrat pb-6'>Some <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#0585F2] to-[#A1FCE8]'>Light Reading</span>  from our Blog </h1>
          </div>

          <p className='lg:max-w-[843px] md:max-w-[606px] max-w-[343px] md:text-[#D4D4D4] text-[#A3A3A3] text-sm md:text-lg leading-[150%] font-normal not-italic avenir pb-12 md:pb-0'>Whether remote, in-office, or hybrid, modern teams rely on SaaS tools to get work done. Wove glues all of these tools together to become your center of gravity. The apps you already use, accessible and visible in one place. Host meetings, track progress, and organize your tools in Wove.</p>
        </div>
      </div>

    </div>
  )
}

export default WoveNews
