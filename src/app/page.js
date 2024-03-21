import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className='py-20 flex flex-col items-center max-w-3xl'>
        <div className='flex  flex-col sm:flex-row '>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Your best market to invest and make{' '}
            <span className='text-blue-600'>Money</span>while asleep.
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Welcome to Helping-Hands Investment. Where every member is verified
            and ready to help each other by combining our resources to create a
            larger capital for a larger interest for all members.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href='/' className={buttonVariants()}>
              Register
            </Link>
            <Button variant='ghost'>Login &rarr;</Button>
          </div>
        </div>
        <div className='flex-1'>
          <p>login or Register</p>
          <form>
            Email: <input type='email' />
            Password: <input type='email' />
            Confirm Password: <input type='email' />
          </form>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
