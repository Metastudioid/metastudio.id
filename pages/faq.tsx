import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import { useTheme } from '../components/ThemeContext'
import Navbar from '../components/Navbar'

const basePath = '/metastudio.id'

const Faq: NextPage = () => {
  const darkTheme = useTheme()

  return (
    <>
      <div className={`${darkTheme.dark ? 'dark' : 'light'}`}>
        <div className='font-hindSiliguri bg-white dark:bg-black mt-0'>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href={`${basePath}/favicon.ico`} />
          </Head>

          <div className='container mx-auto max-w-8xl'>
            <Navbar/>
          </div>

          <div className='pt-20 text-center md:container md:mx-auto text-black dark:text-white'>
            <h3 className='text-3xl px-6 font-medium leading-snug md:text-6xl md:leading-tight'>
              Pertanyaan Yang Sering Diajukan
            </h3>
            <p className='px-10 text-base my-4 pb-9 font-medium opacity-60 md:pb-0 md:text-2xl md:max-w-5xl md:mx-auto md:mt-7 md:leading-snug'>
              Your don&apos;t need to touch the code. Let Metastudio do it for you. The Trusted partner in high volume, best-in class NFT development on the Solana Blockchain.
            </p>
            <img className='w-4/5 mx-auto mt-8 md:mt-28 drop-shadow-2xl' src={`${basePath}/images/banner2.png`} />
          </div>

          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Faq
