import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'

function RootLayout({ children }: { children: ReactNode }) {
    return (
        <main className='relative'>
            <Navbar />

            <section className='flex'>
                <Sidebar />

                <div className='flex flex-col flex-1 px-6 pb-6 pt-28 min-h-screen max-md:pb-14 sm:px-14'>
                    <div className='w-full'>
                        {children}
                    </div>
                </div>
            </section>


        </main>
    )
}

export default RootLayout