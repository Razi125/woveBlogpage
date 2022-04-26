import React from 'react'
import Card from './Card/Card'
import Footer from './Footer'
import Header from './Header'
import Details from './woveNews/Details/Details'
import WoveNews from './woveNews/WoveNews'
 
const Layout = () => {
    return (
        <div className='bg-[#000000] min-h-screen'>
            <Header />
            {/* <WoveNews/>
            <Card/> */}
            <Details/>
            <Footer/>
        </div>
        
    )
}

export default Layout
