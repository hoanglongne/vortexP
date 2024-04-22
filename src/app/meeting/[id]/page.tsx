import React from 'react'

function Meeting({ params }: { params: { id: string } }) {
    return (
        <div>
            Meeting room number: #{params.id}
        </div>
    )
}

export default Meeting