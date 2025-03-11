import React from 'react'
import PageHeading from '../components/sections/pageHeading'
import { ScrollRestoration } from 'react-router-dom'
import ContactForm from '../components/sections/contactForm'

const Contact = () => {
    return (
        <>
            <PageHeading
                heading={"Say Hello"}
                description={<>Feel free to reach out by filling out the form below!<br></br> I'm always eager to connect and explore new opportunities. <br></br>I'll do my best to respond within 24 hours.</>}
            />
            <ContactForm />
            <ScrollRestoration />
        </>
    )
}

export default Contact