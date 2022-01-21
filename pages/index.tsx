import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Transition } from '@headlessui/react'

const basePath = '/metastudio.id'

const Home: NextPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <div className="font-hindSiliguri bg-white mt-1">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>

      <div className='min-h-screen container mx-auto max-w-8xl'>
        <nav>
          <div className='flex my-4 px-4 md:my-10'>
            <div className='mr-auto'>
              <img width="180" src={`${basePath}/images/metastudio-logo-small.png`}/>
            </div>
            <ul className='hidden md:flex text-sm items-center md:text-base'>
              <li className='mx-5'>Our Service</li>
              <li className='mx-5'>Why Us</li>
              <li className='mx-5'>Contact</li>
              <li className='mx-5'>
                <button className='drop-shadow-md hover:drop-shadow bg-gradient-to-r from-fuchsia-600 via-purple-600 to-sky-600 text-white font-bold px-3 py-3 rounded-full'>
                  Apply Launch
                </button> 
              </li>
            </ul>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {
                !showMobileMenu ?
                <svg className=" w-6 h-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg> :
                <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
              }
              </button>
            </div>
          </div>

          <Transition
            show={showMobileMenu}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
            <div className="md:hidden mobile-menu pt-3 pb-6">
              <ul className="text-center">
                <li className="active"><a href="" className="block text-sm px-2 py-4 font-semibold">Home</a></li>
                <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-gray-200 transition duration-300">Our Services</a></li>
                <li><a href="#whyus" className="block text-sm px-2 py-4 hover:bg-gray-200 transition duration-300">Why Us</a></li>
                <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-gray-200 transition duration-300">Contact Us</a></li>
              </ul>
            </div>
            )}
          </Transition>
        </nav>
        <div className='md:flex grid md:min-h-fit'>
          <div className='px-5 pt-3 order-2 md:order-1 text-center md:text-left md:pt-24'>
            <h2 className='text-4xl font-bold leading-snug md:text-7xl md:leading-tight md:max-w-xl md:mr-40'>
              Digital Art Is The Trend Today
            </h2>
            <h5 className='font-medium text-gray-900 text-lg mt-2 opacity-70 md:mt-5 md:text-3xl md:max-w-xl md:leading-tight md:my-4'>Metastudio is your full-service NFT&apos;s development partner. We&apos;re here to help you sell your Arts.</h5>
            <button className='mt-4 text-lg drop-shadow-2xl hover:drop-shadow-xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-sky-600 text-white font-bold px-5 py-4 rounded-full md:mt-6'>
              Launch Your Own NFT&apos;s Project
            </button> 
          </div>
          <div className='pt-5 order-1 md:order-2'>
            <img className='drop-shadow-2xl w-4/5 mx-auto md:w-11/12 md:mt-1' src={`${basePath}/images/banner1.png`}/>
          </div>
        </div>
      </div>

      <div className='pt-5 text-center md:container md:mx-auto'>
        <h3 className='text-3xl px-6 font-medium leading-snug md:text-6xl md:leading-tight'>
          NFT Minting Page and<br/> Landing Page Development
        </h3>
        <p className='px-10 text-base my-4 pb-9 text-gray-900 font-medium opacity-70 md:pb-0 md:text-2xl md:max-w-5xl md:mx-auto md:mt-7 md:leading-snug'>
          Your don&apos;t need to touch the code. Let Metastudio do it for you. The Trusted partner in high volume, best-in class NFT development on the Solana Blockchain.
        </p>
        <img className='w-4/5 mx-auto mt-8 md:mt-28 drop-shadow-2xl' src={`${basePath}/images/banner2.png`}/>
      </div>
      
      <div className='bg-gradient-art bg-cover text-center text-white py-20 md:text-left'>
        <div className='md:container md:mx-auto md:flex md:justify-between'>
          <div className='pt-2 md:py-40'>
            <h3 className='text-3xl px-6 font-medium leading-snug md:text-7xl md:leading-tight md:max-w-xl md:px-0'>
              Art Engine:<br/>
              NFT Artworks Creation
            </h3>
            <p className='px-10 text-base my-4 font-medium opacity-80 md:text-3xl md:px-0 md:max-w-xl md:leading-normal'>
              We&apos;re here to help you create thousand difference instance of artworks based on provided layers.
            </p>
          </div>
          <div className='pb-2 md:mt-40'>
            <img className='w-4/5 mx-auto mt-5 drop-shadow-2xl md:w-full' src={`${basePath}/images/banner3.png`}/>
          </div>
        </div>
      </div>


      <footer className='bg-gradient-art'>
        <div className='bg-white/90'>
          <div className='text-gray-700 text-base md:text-lg md:container md:mx-auto'>
            <div className='md:flex md:pt-11 md:justify-between md:mb-16'>
              <div className='pt-14 pb-5 md:pb-0 px-7 text-center md:text-left md:px-0'>
                <img className='mx-auto mb-3 grayscale hover:grayscale-0 md:mx-0 w-6/12 md:w-4/12 md:mb-4' src={`${basePath}/images/metastudio-logo-small.png`}/>
                <p className='md:ml-2'>
                  Metastudio is your full-service NFT&apos;s development partner.<br className='hidden md:block'/> We&apos;re here to help you sell your arts.
                </p>
                <p className='mt-10 opacity-40 md:ml-2 md:mt-16 md:text-base font-medium'>Powered By</p>
                <div className='flex items-center mt-2 md:max-w-lg'>
                  <div className='px-1 grayscale hover:grayscale-0'>
                    <img className='w-full md:w-10/12' src={`${basePath}/images/logo-solana.png`}/>
                  </div>
                  <div className='px-1 grayscale hover:grayscale-0'>
                    <img className='w-full md:w-10/12' src={`${basePath}/images/logo-metaplex.png`}/>
                  </div>
                  <div className='px-1 grayscale hover:grayscale-0'>
                    <img className='w-full md:w-10/12' src={`${basePath}/images/logo-phantom.png`}/>
                  </div>
                  <div className='px-1 grayscale hover:grayscale-0'>
                    <img className='w-full md:w-10/12' src={`${basePath}/images/logo-solflare.jpg`}/>
                  </div>
                </div>
              </div>
              <div className='text-left my-10 flex justify-around px-3'>
                <div className=''>
                  <h6 className='opacity-70 mb-2 mt-4 md:mb-6'>Metastudio</h6>
                  <ul>
                    <li className='md:mb-3'>
                      Home
                    </li>
                    <li className='md:mb-3'>
                      Press Kit
                    </li>
                    <li className='md:mb-3'>
                      Privacy Policy
                    </li>
                    <li className='md:mb-3'>
                      Terms
                    </li>
                    <li className='md:mb-3'>
                      Careers
                    </li>
                  </ul>
                </div>
                <div className='md:ml-48'>
                  <h6 className='opacity-70 mb-2 mt-4 md:mb-6'>Learn</h6>
                  <ul>
                    <li className='md:mb-3'>
                      Blockchain
                    </li>
                    <li className='md:mb-3'>
                      NFT
                    </li>
                  </ul>
                </div>
                <div className='md:ml-48 md:mr-14'>
                  <h6 className='opacity-70 mb-2 mt-4 md:mb-6'>Community</h6>
                  <ul>
                    <li className='md:mb-3'>
                      Twitter
                    </li>
                    <li className='md:mb-3'>
                      Instagram
                    </li>
                    <li className='md:mb-3'>
                      FAQ
                    </li>
                    <li className='md:mb-3'>
                      Blog
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='px-7 md:px-0'>
              <hr/>
              <p className='py-5 text-center opacity-70 text-xs pb-6 md:text-left md:py-9 md:text-base'>Copyrights &copy; 2022 Metastudio. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
