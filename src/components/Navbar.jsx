import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import NavItems from './NavItems'

const Navbar = () => {
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
      <header className='relative bg-white'>
        <MaxWidthWrapper>
          <div className='border-b border-gray-200'>
            <div className='flex h-16 items-center justify-between'>
              {/* TODO: Mobile nav */}

              <div className=' flex lg:ml-0'>
                <Link href='/' className='flex flex-row'>
                  {/* <Image
                    alt='logo'
                    src='/images/hh1.png'
                    width={40}
                    height={40}
                    className='hidden sm:block rounded-full'
                  /> */}
                  <Image
                    alt='logo'
                    src='/images/hh2.png'
                    width={70}
                    height={30}
                    className='pl-2'
                  />
                </Link>
              </div>

              <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar
