import React from 'react'
import Dark from '../theme/Dark'
export default function Layout({ children }) {
    return (
        <>
            {/* <Header /> */}
            <Dark>

                {/* <Data /> */}
                {children}
            </Dark>

        </>
    )
}
