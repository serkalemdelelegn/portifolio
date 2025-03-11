import React from 'react'
import { ScrollRestoration } from 'react-router-dom'
import Portfolio from '../components/sections/portfolio'
import PageHeading from '../components/sections/pageHeading'
import CallToAction from '../components/sections/callToAction'

const Projects = () => {
  return (
    <>
        <PageHeading
          heading={"Projects"}
          description={<><strong>Welcome to my projects showcase!</strong> <br></br>As a passionate UI/UX Designer and Front-End Developer I bring ideas to life through clean user-friendly and responsive designs.<br></br> Below you'll find a collection of my works ranging from personal projects to client-based designs. Each project reflects my dedication to crafting seamless digital experiences with a focus on usability aesthetics and performance.</>}
        />
      <Portfolio />
      <CallToAction/>
      <ScrollRestoration/>
    </>
  )
}

export default Projects