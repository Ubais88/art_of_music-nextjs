import FeaturedCourses from '@/components/FeaturedCourses'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <HeroSection/>
      <FeaturedCourses/>
    </main>
  )
}

export default page 