"use client"

// import Image from 'next/image'
// import { Inter } from 'next/font/google'

import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Featdown from '@/components/Featdown'
import Listprop from '@/components/Listprop'
// import Tabs from '@/components/Tabs'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <HeroSection />
    <Features />
    {/* <Tabs /> */}
    <Listprop />
    <Featdown />
    
    </>
  )
}
