import About from '@/components/About/About'
import AppStoreBanner from '@/components/AppStoreBanner/AppStoreBanner'
import Banner2 from '@/components/Banner2/Banner2'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import Services from '@/components/Services/Services'
import YogaTypes from '@/components/YogaTypes'
import { getAbout, getHomeSetting } from '@/sanity/queries'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function Home() {
  const settings = (await getHomeSetting("where-wellness-meets-style")) || notFound();
  const about = (await getAbout("about-us")) || notFound();
  

  return (
    <>
      <Navbar setting={settings} />
      <Hero setting={settings} />
      <About about={about} />
      <Banner2 about={about} />
      <YogaTypes />
      <Contact />
      <Services />
      <AppStoreBanner />
      <Footer setting={settings} />
    </>
  )
}
