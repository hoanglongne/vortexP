"use client"

import { useState } from "react"
import HomeCard from "./HomeCard"
import { useRouter } from "next/navigation"
import MeetingModal from "./MeetingModal"
import { useUser } from "@clerk/nextjs"
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useToast } from "@/components/ui/use-toast"

const MeetingTypeList = () => {
    const { toast } = useToast()
    const router = useRouter()
    const [meetingState, setMeetingState] = useState<'isJoiningMeeting' | 'isScheduledMeeting' | 'isInstantMeeting' | undefined>()
    const [values, setValues] = useState({
        datetime: new Date(),
        description: '',
        link: ''
    })
    const [callDetails, setCallDetails] = useState<Call>()


    const user = useUser()
    const client = useStreamVideoClient()

    const createMeeting = async () => {
        if (!client || !user) return;

        try {
            if (!values.datetime) {
                toast({ title: 'Please select date and time' })
                return;
            }

            const id = crypto.randomUUID();
            const call = client.call('default', id)

            if (!call) throw new Error('Failed to create call');

            const startsAt = values.datetime.toISOString() || new Date(Date.now()).toISOString();
            const desc = values.description || 'Instant meeting';

            await call.getOrCreate({
                data: {
                    starts_at: startsAt,
                    custom: {
                        desc
                    }
                }
            })

            setCallDetails(call)

            if (!values.description) {
                router.push(`/meeting/${call.id}`)
            }

            toast({ title: 'Meeting created successfully', })
        } catch (error) {
            console.log(error)
            toast({
                title: 'Fail to create meeting',
            })
        }
    }

    return (
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
            <HomeCard
                title="New Meeting"
                description="Start an instant meeting"
                img="/icons/add-meeting.svg"
                handleClick={() => setMeetingState('isInstantMeeting')}
                className='bg-orange-1'
            />
            <HomeCard
                title="Schedule meeting"
                description="Plan your meeting"
                img="/icons/schedule.svg"
                handleClick={() => setMeetingState('isScheduledMeeting')}
                className='bg-blue-1'
            />
            <HomeCard
                title="View Recordings"
                description="Check out your recordings"
                img="/icons/recordings.svg"
                handleClick={() => router.push('/recordings')}
                className='bg-purple-1'
            />
            <HomeCard
                title="Join Meeting"
                description="via invitation link"
                img="/icons/join-meeting.svg"
                handleClick={() => setMeetingState('isJoiningMeeting')}
                className='bg-yellow-1'
            />

            <MeetingModal
                isOpen={meetingState === 'isInstantMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Start an Instant Meeting"
                className="text-center"
                buttonText="Start Meeting"
                handleClick={() => createMeeting()}
            />
        </section>
    )
}

export default MeetingTypeList