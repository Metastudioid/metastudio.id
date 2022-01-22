import { useState } from "react"
import { useTheme } from "./ThemeContext"
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, GlobeAltIcon, CubeTransparentIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import ToggleThemeButton from "./ToggleThemeButton"
import ToggleLanguageButton from "./ToggleLanguageButton"
import Link from 'next/link'

const basePath = '/metastudio.id'

const solutions = [
  {
    name: 'NFT Web Development',
    description: 'Develop landing page and minting page for your NFT project',
    href: '/#web',
    icon: GlobeAltIcon,
  },
  {
    name: 'NFT Art Maker',
    description: 'Generate thousands of unique NFT artworks based on provided layers',
    href: '/#art',
    icon: CubeTransparentIcon,
  }
]

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const darkTheme = useTheme()

  return (
    <>
      <nav>
        <div className='flex py-4 px-4 md:py-10'>
          <div className='mr-auto'>
            <Link href="/">
              <a>
                <img width="180" src={`${basePath}/images/metastudio-logo-${darkTheme.dark ? 'white' : 'small'}.png`} />
              </a>
            </Link>
          </div>
          <ul className='hidden md:flex text-sm items-center md:text-base text-black dark:text-white'>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? '' : 'text-opacity-90'}
                 group py-2 inline-flex mr-2 items-center hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span>Layanan Kami</span>
                    <ChevronDownIcon
                      className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 opacity-50 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-sm">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-gray-100 dark:bg-gray-900 p-7 lg:grid-cols-1">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}>
                              <a
                                className="group flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-slate-200 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              >
                                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                                  <item.icon aria-hidden="true" className="text-gray-500 dark:text-gray-600 group-hover:text-fuchsia-500 opacity-90" />
                                </div>
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                                    {item.name}
                                  </p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <li className='mx-6'>
              <Link href="/whyus">
                <a>Kenapa Harus Kami</a>
              </Link>
            </li>
            <li className='mx-6'>
              <Link href="/faq">
                <a>Pertanyaan Yang Sering Diajukan</a>
              </Link>
            </li>
            <li className='ml-6 mr-4'>
              <button className='drop-shadow-md hover:drop-shadow bg-gradient-to-r from-fuchsia-600 via-purple-600 to-sky-600 text-white font-bold px-3 py-3 rounded-full'>
                Apply Launch
              </button>
            </li>
            <li>
              <ToggleThemeButton />
            </li>
            <li>
              <ToggleLanguageButton />
            </li>
          </ul>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {
                !showMobileMenu ?
                  <svg className=" w-6 h-6 text-gray-500 dark:text-gray-300"
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
                    className="block h-6 w-6 text-gray-500 dark:text-gray-300"
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
            <div className="md:hidden mobile-menu pt-3 pb-6 text-black dark:text-white">
              <ul className="text-center">
                <li className="active"><a href="" className="block text-sm px-2 py-4 font-semibold">Home</a></li>
                <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-gray-200 transition duration-300">Web Development</a></li>
                <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-gray-200 transition duration-300">NFT Art</a></li>
                <li><a href="#whyus" className="block text-sm px-2 py-4 hover:bg-gray-200 transition duration-300">Why Us</a></li>
                <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-gray-200 transition duration-300">Contact Us</a></li>
              </ul>
            </div>
          )}
        </Transition>
      </nav>
    </>
  )
}