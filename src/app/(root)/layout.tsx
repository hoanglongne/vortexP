import React, { ReactNode } from 'react'
import StreamVideoProvider from '../../../providers/StreamProviderClient'

function RootLayout({ children }: { children: ReactNode }) {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    )
}

export default RootLayout