import React from 'react'

function Home() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);
    return (
        <section className='flex size-full flex-col text-white gap-10'>
            <h1 className='text-3xl font-bold'>
                Home
            </h1>

            <div className='h-[300px] w-full bg-cover bg-hero rounded-[20px]'>
                <div className='h-full flex flex-col justify-between max-md:px-5 max-md:py-8 lg: py-11'>
                    <p className='glassmorphism max-w-[270px] py-2 rounded text-center text-base font-normal'>
                        Upcoming meeting at 12:30PM
                    </p>

                    <div className='flex flex-col gap-2'>
                        <h1 className='text-4xl font-extrabold lg:text-7xl'>{time}</h1>
                        <p className='font-medium text-lg text-sky-1 lg:text-2xl'>{date}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home