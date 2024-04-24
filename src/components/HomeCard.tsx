import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface HomeCardProps {
    title: string
    description: string
    img: string
    handleClick: () => void
    className: string
}

const HomeCard = ({ title, description, img, handleClick, className }: HomeCardProps) => {
    return (
        <div>
            <div className={cn('px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer', className)} onClick={handleClick}>
                <div className="glassmorphism flex-center size-12 rounded-[10px]">
                    <Image src={img} height={20} width={20} alt="add-meetings" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">{title}</h3>

                    <p className="text-lg font-normal">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeCard