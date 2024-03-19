import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          Your best market place for high-quality{' '}
          <span className='text-blue-600'>staffing</span>.
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          Welcome to Nursing Empire. Every staff on our selection is verified by
          our team to ensure our highest quality standards.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <Link href='/products' className={buttonVariants()}>
            Learn More
          </Link>
          <Button variant='ghost'>Our quality promise &rarr;</Button>
        </div>
      </div>

      {/* TODO List products */}
    </MaxWidthWrapper>
  )
}
