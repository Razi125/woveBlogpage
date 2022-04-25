import React from 'react'

const Card = () => {

    const data = [
        {
            url: '/images/pic1.svg',
            ava: '/images/profile1.svg',
            P1: 'Lincoln Westervelt',
            P2: 'Writer & Speaker',
            title: '06 Ways To Increase Website Traffic',
            date: 'October 1, 2020',
        },
        {
            url: '/images/pic2.svg',
            ava: '/images/profile2.svg',
            P1: 'Hanna George',
            P2: 'Writer & Speaker',
            title: '06 Ways To Increase Website Traffic',
            date: 'October 1, 2020',
        },
        {
            url: '/images/pic3.svg',
            ava: '/images/profile3.svg',
            P1: 'Tatiana Donin',
            P2: 'Writer & Speaker',
            title: '06 Ways To Increase Website Traffic',
            date: 'October 1, 2020',
        },
        {
            url: '/images/pic4.svg',
            ava: '/images/profile4.svg',
            P1: 'Jaylon Botosh',
            P2: 'Writer & Speaker',
            title: '06 Ways To Increase Website Traffic',
            date: 'October 1, 2020',
        },
        {
            url: '/images/pic5.svg',
            ava: '/images/profile5.svg',
            P1: 'Phillip Kenter',
            P2: 'Writer & Speaker',
            title: '06 Ways To Increase Website Traffic',
            date: 'October 1, 2020',
        },
        {
            url: '/images/pic6.svg',
            ava: '/images/profile6.svg',
            P1: 'Adison Donin',
            P2: 'Writer & Speaker',
            title: '06 Ways To Increase Website Traffic',
            date: 'October 1, 2020',
        },
    ]

    return (
        <>
            <div className='mx-auto container px-6 mb-8'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 md:gap-6 lg:pl-[7.5rem]'>
                    {
                        data?.map((item, index) => (

                            <div key={index} className='bg-[#171717] rounded-2xl max-w-[403.33px] h-[529px] mb-8 '>
                                <div className=' flex justify-center items-center pt-4 pb-4'>
                                    <img className='w-[371.33px] h-[280px] rounded-lg' src={item.url} alt='' />
                                </div>
                                {/** Avatar */}
                                <div className='flex pl-8 pb-4'>
                                    <div>
                                        <img src={item.ava} alt='' />
                                    </div>
                                    <div className='pl-3'>
                                        <h1 className='max-w-[287.33px] text-[#F5F5F5] text-sm leading-[150%] font-semibold not-italic  montserrat'>
                                            {item.P1}
                                        </h1>
                                        <p className='max-w-[287.33px] text-[#A3A3A3] text-xs leading-[150%] font-normal not-italic avenir'>
                                            {item.P2}
                                        </p>
                                    </div>
                                </div>
                                <div className='pl-8 pb-6'>
                                    <h1 className='max-w-[339.33px] text-[#FFFFFF] text-2xl leading-[150%] font-bold not-italic montserrat'>{item.title}</h1>
                                </div>
                                <div className='pl-8'>
                                    <p className='max-w-[287.33px] text-[#D4D4D4] text-sm leading-[150%] font-medium not-italic montserrat'>{item.date}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            {/** Pagination component */}
            <div className='mx-auto container hidden md:block'>
                <div class="flex items-center justify-center">
                    <div className=" w-full  flex justify-center items-center space-x-7 ">
                        <div className="flex  items-center pt-3 text-gray-600 dark:text-gray-200  cursor-pointer">
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.33398 1.66675L1.00065 5.00008L4.33398 8.33341" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-[#525252] leading-[120%] text-sm font-medium not-italic pl-3">Previous</p>
                        </div>
                        <div className="sm:flex justify-center items-center pt-3 hidden space-x-4">
                            <p className="flex justify-center items-center max-w-[36px] bg-[#262626] rounded-xl text-sm font-medium leading-none cursor-pointer hover:bg-[#0685F1] dark:text-white border border-none p-[11px]">1</p>
                            <p className="flex justify-center items-center max-w-[36px] bg-[#262626] rounded-xl text-sm font-medium leading-none cursor-pointer hover:bg-[#0685F1] dark:text-white border border-none p-[11px]">2</p>
                            <p className="flex justify-center items-center max-w-[36px] bg-[#262626] rounded-xl text-sm font-medium leading-none cursor-pointer hover:bg-[#0685F1] dark:text-white border border-none p-[11px]">3</p>
                            <p className="flex justify-center items-center max-w-[36px] bg-[#262626] rounded-xl text-sm font-medium leading-none cursor-pointer hover:bg-[#0685F1] dark:text-white border border-none p-[11px]">4</p>
                            <p className="flex justify-center items-center max-w-[36px] bg-[#262626] rounded-xl text-sm font-medium leading-none cursor-pointer hover:bg-[#0685F1] dark:text-white border border-none p-[11px]">...</p>
                            <p className="flex justify-center items-center max-w-[36px] bg-[#262626] rounded-xl text-sm font-medium leading-none cursor-pointer hover:bg-[#0685F1] dark:text-white border border-none p-[11px]">12</p>
                        </div>
                        <div className="flex items-center pt-3 text-gray-600 dark:text-gray-200  hover:text-indigo-700 cursor-pointer">
                            <p className="text-[#FFFFFF] leading-[120%] text-sm font-medium not-italic pr-3">Next</p>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.66602 1.66675L4.99935 5.00008L1.66602 8.33341" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Card
