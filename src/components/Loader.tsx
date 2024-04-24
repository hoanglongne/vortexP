import React from 'react'
import Image from 'next/image'

const Loader = () => {
    return (
        <div className='flex-center h-scren w-full'>
            <Image src="/icons/loading-circle/svg" height={50} width={50} alt="loader" />
        </div>
    )
}

export default Loader