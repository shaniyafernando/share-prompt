import {ClerkProvider} from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import '../globals.css'

export const metadata = {
    title: 'threads',
    description: 'A nextjs 14 meta threads application'

}

const inter = Inter({subsets:['latin']})

export default function RouteLayout(
    {children}: {children : React.ReactNode}
){
    return (
        <ClerkProvider publishableKey="pk_test_YXNzdXJlZC1zbmFpbC0wLmNsZXJrLmFjY291bnRzLmRldiQ">
            <html lang='en'>
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}