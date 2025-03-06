import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/sections/header'
import Footer from '../components/sections/footer'
import BackToTop from '../components/ui/backToTop'
import Preloader from '../components/ui/preloader'


const RootLayout = () => {
    return (
        <>
            <Preloader />
           
            <Header />
            <Outlet />
            <Footer />
            <BackToTop />
        </>
    )
}

export default RootLayout