import React from 'react'
import Contact from '../components/Contact'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Services from '../components/Services'

const LandingPage = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen text-white relative overflow-hidden">
    <Hero />
    <Features />
    <Services />
    <Contact />
  </div>
  )
}

export default LandingPage