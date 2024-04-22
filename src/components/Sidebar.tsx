'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const pathname = usePathname()

    return (
        <div className='sticky left-0 top-0 flex flex-col justify-between h-screen w-fit bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
            <div className='flex flex-col gap-6'>
                {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
                    return (
                        <Link key={link.label} href={link.route} className={cn('flex gap-4 items-center justify-start p-4 rounded-lg', { 'bg-blue-1': isActive })}>
                            <Image
                                src={link.imgURL}
                                alt={link.label}
                                height={24}
                                width={24}
                            />
                            <p className='text-lg font-semibold max-lg:hidden'>
                                {link.label}
                            </p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar