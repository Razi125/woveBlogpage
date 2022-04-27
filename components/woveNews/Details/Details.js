import React from 'react'

const Details = () => {

    const Artical = 
        ` <div class='tab'>
          <p>Home</p>
          <img src='/images/Vector.svg' alt=''/>
          <p>Blog</p>
          <img src='/images/Vector.svg' alt=''/>
          <p>06 Ways To Increase Website Traffic</p>
          </div>
          <div>
          <h5>October 1, 2020</h5>
          </div>
         <h1>06 Ways To Increase<span> Website Traffic <span></h1>

         {/** Avatar */}
         <div class='avatar'>
                                    <div>
                                        <img src='/images/profile1.svg' alt='' />
                                    </div>
                                    <div>
                                        <h1>
                                        Lincoln Westervelt
                                        </h1>
                                        <p>
                                        Writer & Speaker
                                        </p>
                                    </div>
                                </div>
       
        {/** Full Containt */}
         <div class='content'>
         {/** ParaGraph*/}
         <div>
         <img src='/images/picone.png' alt=''/>               
         </div>

         {/**Title */}
         <div>
            <h1>Improving HR Productivity</h1>
         </div>

         {/** para*/}
         

         </div>
        
                                

      </div>
        `

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
       
    ]
    const images = [
        {
            id: 1,
            url:'/images/fac.svg'
        },
        {
            id: 2,
            url:'/images/twitte.svg'
        },
        {
            id: 3,
            url:'/images/mail.svg'
        },
        {
            id: 4,
            url:'/images/mail2.svg'
        },
        {
            id: 5,
            url:'/images/whats.svg'
        },
    ]

  return ( 
    <>
    {/**Websit Traffic Div */}
    <div className='mx-auto container px-80 mt-[180px]'>

        <div className='flex flex-col justify-start items-start '>
         {/** BackgroundImage with text */}
         <div className='flex flex-col justify-start items-start '>
        <div className=' flex flex-col '>
          <div className='article'
          dangerouslySetInnerHTML={{__html: Artical}}
          >
          </div>
        </div>
      </div>

      {/** ParhaGraph Detail */}
      <div className='flex flex-col'>
       
       {/** ParaGhraph*/}
        <div>
            <p className='max-w-[883px] text-[#D4D4D4] text-lg leading-[160%] font-normal not-italic -tracking-[0.01em] avenir'>While the HRIS features benefit the organization in many ways, one of the most important of all HRIS benefits relates to the ability of the so”ware program to improve the productivity of human resources employees. These HR systems are highly detailed, and they are designed to enhance and speed up the efforts of HR employees in a number of ways. For example, they can assist with recruitment by simplifying the process of collecting resumes, reviewing candidate information and more.While the HRIS features benefit the organization in many ways, one of the most important of all HRIS benefits relates to the ability of the so”ware program to improve the productivity of human resources employees. These HR systems are highly detailed, and they are designed to enhance and speed up the efforts of HR employees in a number of ways. For example, they can assist with recruitment by simplifying the process of collecting resumes, reviewing candidate information and more.</p>
            <br/>
            <br/>
            <p className='max-w-[883px] text-[#D4D4D4] text-lg leading-[160%] font-normal not-italic -tracking-[0.01em] avenir pb-12'>While the HRIS features benefit the organization in many ways, one of the most important of all HRIS benefits relates to the ability of the so”ware program to improve the productivity of human resources employees. These HR systems are highly detailed, and they are designed to enhance and speed up the efforts of HR employees in a number of ways. For example, they can assist with recruitment by simplifying the process of collecting resumes, reviewing candidate information and more.While the HRIS features benefit the organization in many ways, one of the most important of all HRIS benefits relates to the ability of the so”ware program to improve the productivity of human resources employees. These HR systems are highly detailed, and they are designed to enhance and speed up the efforts of HR employees in a number of ways. For example, they can assist with recruitment by simplifying the process of collecting resumes, reviewing candidate information and more.</p>
        </div>

        {/** Addtional Reading */}

        <div className='bg-[#171717] border-dashed border-2 border-[#0585F2] mb-[60px]'>
            <div>
                <h1 className='max-w-[835px] text-[#FFFFFF] text-xl leading-[150%] font-semibold not-italic -tracking-[0.02em] montserrat pl-6 pt-6 pb-4'>Additional Reading:</h1>
            </div>
            <div>
                <p className='max-w-[835px] text-[#D4D4D4] text-base leading-[150%] font-normal not-italic  avenir pl-6 pb-6'>For more details on lead generation, read our detailed guide on <span className='text-[#0585F2] cursor-pointer'>lead generation</span>, where we dicuss the entire lead gen topic, including outbound strategies and how to qualify leads for nurturing.</p>
            </div>
        </div>

        {/** para */}
        <div>
            <p className='max-w-[883px] text-[#D4D4D4] text-lg leading-[160%] font-normal not-italic -tracking-[0.01em] avenir'>Many HR tasks are highly regulated, and because of this, even a minor error on the part of a human resources employee could result in considerable legal issues and even financial loss for the company. For example, when resumes are not reviewed in a fair and just manner during the hiring process, a lawsuit may ensue. A HRIS can provide guidance to avoid these types of issues before they escalate.</p>
            <br/>
            <br/>
            <p className='max-w-[883px] text-[#D4D4D4] text-lg leading-[160%] font-normal not-italic -tracking-[0.01em] avenir '>When considering HRIS benefits for your organization, the ability to reduce issues and other related errors associated with human oversight or other factors can be considerable. Furthermore, additional HRIS benefits relate to compliance issues. Some so”ware programs are designed to review compliance with specific rules and regulations—this makes it easier to ensure that your company is in compliance with these laws and regulations. Ultimately, this can improve company reputation and help to avoid penalties.</p>
        </div>
        {/**Title */}
        <div>
            <h1 className='max-w-[883px] text-[#FFFFFF] text-2xl leading-[150%] font-semibold not-italic -tracking-[0.02em] montserrat pt-4 pb-12'>Reducing Errors and Maintaining Compliance</h1>
        </div>
        
        {/**Image For prefernce Anaylices */}
        <div className='w-full cursor-pointer'>
         <img className='w-[883px] h-[460px] rounded-lg ' src='/images/pictwo.png' alt=''/>               
        </div>

        {/**Title */}
        <div>
            <h1 className='max-w-[883px] text-[#FFFFFF] text-2xl leading-[150%] font-semibold not-italic -tracking-[0.02em] montserrat pt-12 pb-4'>Performing Analyses</h1>
        </div>
        {/** para */}
        <div>
            <p className='max-w-[883px] text-[#D4D4D4] text-lg leading-[160%] font-normal not-italic -tracking-[0.01em] avenir'>Performing analyses and reviewing metrics related to various aspects of the organization can assist with better decision making and also help with spotting patterns. For example, the human resources department is responsible for analyzing hiring costs and calculating the turnover rate in different departments. The results of these calculations may be used to make important business decisions and to develop strategies for moving the organization along a successful path.</p>
            <br/>
            <p className='max-w-[883px] text-[#D4D4D4] text-lg leading-[160%] font-normal not-italic -tracking-[0.01em] avenir pb-5'>HRIS analytical tools give HR employees the ability to perform many pertinent calculations with speed. Employees can collect the data needed within a short period of time and then analyze all of the data in a concise and effective manner. Some software programs are designed to create professional reports on metrics and analysis that can help HR professionals to spot issues at a glance.</p>
            <br/>
            <p className='max-w-[883px] text-[#D4D4D4] text-lg leading-[160%] font-normal not-italic -tracking-[0.01em] avenir pb-5'>Companies can immediately enjoy many HRIS benefits once the human resources information system has been implemented. There are several different types of HRIS systems available for purchase, and each may offer different features and functions. Companies should carefully review the different systems, vendors, and features available in order to find the right program for their needs and budget.</p>
            <br/>
            <br/>
            <p className='max-w-[883px] border-l-2 border-l-[#A3A3A3]  text-[#D4D4D4] text-lg leading-[160%] font-normal not-italic -tracking-[0.01em] avenir pb-5 pl-6'>“We define human resource information systems (HRIS), how they work, and why they are used in different types of organizations and businesses.”</p>
        </div>
        {/** Social Media */}
        
         {/**Title */}
         <div>
            <h1 className='max-w-[883px] text-[#FFFFFF] text-2xl leading-[150%] font-semibold not-italic -tracking-[0.02em] montserrat pt-12 pb-4'>Expand your social media following effectively</h1>
        </div>
        {/** para */}
        <div>
            <p className='max-w-[883px] text-[#D4D4D4] text-lg leading-[160%] font-normal not-italic -tracking-[0.01em] avenir pb-12'>Expanding social media is just a requirement for everything in this day and age. It is because Social media is slowly becoming the new go-to for marketing. However, building a good social media following can be tricky but can serve you with extraordinary outcomes for your business. At this point, approximately 10-20% of a website’s traffic comes from the social media networks alone, translating it to around 300 to 500k page views per month.</p>
        </div>

        {/** Addtional Reading */}

        <div className='bg-[#171717] border-dashed border-2 border-[#0585F2] mb-[60px]'>
            <div>
                <h1 className='max-w-[835px] text-[#FFFFFF] text-xl leading-[150%] font-semibold not-italic -tracking-[0.02em] montserrat pl-6 pt-6 pb-4'>Additional Reading:</h1>
            </div>
            <div>
                <p className='max-w-[835px] text-[#D4D4D4] text-base leading-[150%] font-normal not-italic  avenir pl-6 pb-6'>For more details on lead generation, read our detailed guide on <span className='text-[#0585F2] cursor-pointer'>lead generation</span>, where we dicuss the entire lead gen topic, including outbound strategies and how to qualify leads for nurturing.</p>
            </div>
        </div>
        {/** Social Media */}
        <div className='bg-cover bg-center rounded-[6px] bg-bgunsplash bg-no-repeat w-full h-[17rem] mt-16 mb-28'>
            <div>
                <h1 className='max-w-[835px] text-[#FFFFFF] text-xl leading-[150%] font-semibold not-italic -tracking-[0.02em] montserrat pl-8 pt-12 pb-6'>Share this Article with your friends!</h1>
            </div>
            <div>
                <p className='max-w-[835px] text-[#D4D4D4] text-base leading-[150%] font-normal not-italic  avenir pl-8 pb-6'>For more details on lead generation, read our detailed guide on <span className='text-[#0585F2] cursor-pointer'>lead generation</span>, where we dicuss the entire lead gen topic, including outbound strategies and how to qualify leads for nurturing.</p>
            </div>
            <div className='flex pl-8 space-x-4 pb-12'>
                {
                    images?.map((item)=>(
                        <div key={item.id} className='bg-[#262626] rounded-full flex justify-center items-center cursor-pointer'>
                        <img className='p-[9.5px] ' src={item.url} alt=''/>
                        </div>
                    ))
                }
                
            </div>
        </div>

        {/** Relative Artical */}
        <div>
            <p className='max-w-[835px] text-[#D4D4D4] text-lg leading-[150%] font-medium not-italic  montserrat pb-3'>Interested in more articles</p>
        </div>
        <div>
            <h1 className='max-w-[835px] text-[#FFFFFF] text-[32px] leading-[135%] font-bold not-italic -tracking-[0.01em] montserrat pb-12'>Recommended <span className='text-[#0585F2] cursor-pointer'>Articles</span></h1>
        </div>
        {/** Card */}
                <div className='grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-12'>
                    {
                        data?.map((item, index) => (

                            <div key={index} className='bg-[#171717] rounded-2xl max-w-[403.33px] h-[529px] mb-8 '>
                                <div className=' flex justify-center items-center lg:pt-4 pb-4 cursor-pointer'>
                                    <img className='w-[311px] md:w-[304px]  lg:w-[371.33px] h-[280px] rounded-lg' src={item.url} alt='' />
                                </div>
                                {/** Avatar */}
                                <div className='flex pl-8 pb-4'>
                                    <div className='cursor-pointer'>
                                        <img src={item.ava} alt='' />
                                    </div>
                                    <div className='pl-3'>
                                        <h1 className='max-w-[287.33px] text-[#F5F5F5] text-sm leading-[150%] font-semibold not-italic  montserrat cursor-pointer'>
                                            {item.P1}
                                        </h1>
                                        <p className='max-w-[287.33px] text-[#A3A3A3] text-xs leading-[150%] font-normal not-italic avenir cursor-pointer'>
                                            {item.P2}
                                        </p>
                                    </div>
                                </div>
                                <div className='pl-8 pb-6 cursor-pointer'>
                                    <h1 className='max-w-[339.33px] text-[#FFFFFF] text-2xl leading-[150%] font-bold not-italic montserrat'>{item.title}</h1>
                                </div>
                                <div className='pl-8 cursor-pointer'>
                                    <p className='max-w-[287.33px] text-[#D4D4D4] text-sm leading-[150%] font-medium not-italic montserrat'>{item.date}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Details