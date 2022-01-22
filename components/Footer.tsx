import { useTheme } from "./ThemeContext"
import ToggleThemeButton from "./ToggleThemeButton"

const basePath = '/metastudio.id'

export default function Footer() {
  const darkTheme = useTheme()

  return (
    <>
      <footer className='bg-gradient-art'>
        <div className='bg-white/90 dark:bg-black/90'>
          <div className='text-gray-700 dark:text-gray-200 text-base md:text-lg md:container md:mx-auto'>
            <div className='md:flex md:pt-11 md:justify-between md:mb-16'>
              <div className='pt-14 pb-5 md:pb-0 px-7 text-center md:text-left md:px-0'>
                <img className='mx-auto mb-3 grayscale hover:grayscale-0 md:mx-0 w-6/12 md:w-4/12 md:mb-4' src={`${basePath}/images/metastudio-logo-${darkTheme.dark ? 'white' : 'small'}.png`} />
                <p className='md:ml-2'>
                  Metastudio is your full-service NFT&apos;s development partner.<br className='hidden md:block' /> We&apos;re here to help you sell your arts.
                </p>
                <p className='mt-10 opacity-40 md:ml-2 md:mt-16 md:text-base font-medium'>Powered By</p>
                <div className='flex items-center mt-2 md:max-w-lg'>
                  <div className='px-1 grayscale hover:grayscale-0'>
                    <img className='w-full md:w-10/12' src={`${basePath}/images/logo-solana.png`} />
                  </div>
                  <div className='px-1 grayscale hover:grayscale-0'>
                    <img className='w-full md:w-10/12' src={`${basePath}/images/logo-metaplex.png`} />
                  </div>
                  <div className='px-1 grayscale hover:grayscale-0'>
                    <img className='w-full md:w-10/12' src={`${basePath}/images/logo-phantom.png`} />
                  </div>
                  <div className='px-1 grayscale hover:grayscale-0'>
                    <img className='w-full md:w-10/12' src={`${basePath}/images/logo-solflare.jpg`} />
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
              <hr />
              <div className="flex py-5 pb-6 md:py-9">
                <div>
                  <p className='text-center opacity-70 text-xs md:text-left md:text-base'>Copyrights &copy; 2022 Metastudio. All rights reserved.</p>
                </div>
                <div className="ml-auto">
                  <ToggleThemeButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}