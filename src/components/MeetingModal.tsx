import React from 'react'
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'


interface MeetingModalProps {
    isOpen: boolean
    onClose: () => void
    handleClick?: () => void
    title: string
    img?: string
    buttonText?: string
    className?: string
    children?: React.ReactNode
    buttonIcon?: string
}

const MeetingModal = ({ isOpen, onClose, handleClick, title, img, buttonText, className, children, buttonIcon }: MeetingModalProps) => {
    return (
        <div>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className='flex flex-col gap-6 w-full max-w-[520px] px-6 py-9 border-none bg-dark-1 text-white'>
                    <div className='flex flex-col gap-6'>
                        {img && (
                            <div>
                                <Image src={img} height={72} width={72} alt="add-meetings" />
                            </div>
                        )}
                        <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>
                            {title}
                        </h1>
                        {children}
                        <Button className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0" onClick={handleClick}>
                            {buttonIcon && (
                                <Image src={buttonIcon} height={13} width={13} alt="button icon" />
                            )} &nbsp;
                            {buttonText || 'Schedule Meeting'}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default MeetingModal