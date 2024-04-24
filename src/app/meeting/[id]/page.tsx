"use client"

import MeetingRoom from '@/components/MeetingRoom'
import MeetingSetup from '@/components/MeetingSetup'
import { useUser } from '@clerk/nextjs'
import { StreamTheme, StreamCall } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'

function Meeting({ params }: { params: { id: string } }) {
    const { user, isLoaded } = useUser()
    const [isSetupComplete, setIsSetupComplete] = useState(false)

    return (
        <div className='h-screen w-full'>
            <StreamCall>
                <StreamTheme>
                    {!isSetupComplete ?
                        (<MeetingSetup />) : (<MeetingRoom />)}
                </StreamTheme>
            </StreamCall>
        </div>
    )
}

export default Meeting