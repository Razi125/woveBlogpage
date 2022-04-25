import React from 'react'

const Header = () => {
  return (
    <>
      <div className='mx-auto container px-6 hidden md:block'>
        <div className='flex justify-between items-center '>
          <div className='mt-16 '>
            <img  src='/images/wove-logo.svg' alt='' />
          </div>
          <div className='flex space-x-[36px] mt-16'>
            <p className='max-w-[49px] text-[#FFFFFF] text-base leading-4 not-italic font-normal avenir'>
              Pricing
            </p>
            <p className='max-w-[49px] text-[#FFFFFF] text-base leading-4 not-italic font-extrabold avenir'>
              Blog
            </p>
          </div>
        </div>
        <div>
        </div>
      </div>

      <div className='mx-auto container px-6 block md:hidden'>
        <div className='flex justify-between items-center '>
          <div className='mt-16 mb-[56px]'>
            <img src='/images/wove-logo.svg' alt='' />
          </div>
          <div className='md:block'>
            <div className='flex justify-center items-center'>
              <div className='hamburgar inline-block p-4 cursor-pointer lg:hidden'>
                <div className='line h-0.5 w-6 my-1 bg-white'></div>
                <div className='line h-0.5 w-6 my-1 bg-white'></div>
                <div className='line h-0.5 w-6 my-1 bg-white'></div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>

    </>
  )
}

export default Header
