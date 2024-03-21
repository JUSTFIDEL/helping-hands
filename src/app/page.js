import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'
import Link from 'next/link'

const perks = [
  {
    name: 'Light Portfolio',
    duration: '7 Days Package',
    Icon: ArrowDownToLine,
    description: 'Invest #5,000 - #50,000 and get 20% in 7day',
    link: '/register',
  },
  {
    name: 'Medium Portfolio',
    duration: '15 Days Package',
    Icon: CheckCircle,
    description: 'Invest #50,001 - #200,000 and get 30% in 15days',
    link: '/register',
  },
  {
    name: 'Large Portfolio',
    duration: '30 Days Package',
    Icon: Leaf,
    description: 'Invest #200,001 and above and get 45% in 30days',
    link: '/register',
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-10 sm:py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Your best market to invest and make{' '}
            <span className='text-blue-600'>MONEY</span> while asleep.
          </h1>
          <p className='mt-6 text-base max-w-prose text-muted-foreground'>
            Welcome to Helping-Hands Investment. Where every member is verified
            and ready to help each other by combining our resources to create a
            larger capital for a larger interest for all members.
          </p>
          <div className='mt-6'>
            <Link href='/register' className={buttonVariants()}>
              Register Now &rarr;
            </Link>
          </div>
        </div>

        {/* TODO List products */}
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-100'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <Link
                href={perk.link}
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
              >
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-bold text-gray-900'>
                    {perk.name}
                  </h3>
                  <span className='mt-2 text-sm font-bold text-blue-600'>
                    {perk.duration}
                  </span>
                  <p className='text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
