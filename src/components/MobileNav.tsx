'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'



const MobileNav = () => {
    const pathname = usePathname()
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image src="/icons/hamburger.svg" width={36} height={36} alt="mobile-nav" className='cursor-pointer sm:hidden' />
                </SheetTrigger>
                <SheetContent side="left" className='border-none bg-dark-1'>
                    <Link href="/" className='flex items-center gap-1'>
                        <Image src='/icons/logo.svg' width={32} height={32} alt='logo' className='max-sm:size-10' />
                        <p className='text-[26px] text-white font-extrabold'>VortexP</p>
                    </Link>

                    <div className='flex flex-col h-[calc(100vh-72px)] justify-between overflow-y-auto'>
                        <SheetClose asChild>
                            <section className='flex flex-col h-full gap-6 pt-16 text-white'>
                                {sidebarLinks.map((link) => {
                                    const isActive = pathname === link.route
                                    return (
                                        <SheetClose asChild key={link.route}>
                                            <Link key={link.label} href={link.route} className={cn('flex gap-4 items-center w-full max-w-60 p-4 rounded-lg', { 'bg-blue-1': isActive })}>
                                                <Image
                                                    src={link.imgURL}
                                                    alt={link.label}
                                                    height={20}
                                                    width={20}
                                                />
                                                <p className='font-semibold'>
                                                    {link.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav