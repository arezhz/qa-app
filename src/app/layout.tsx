import './globals.css'
import type {Metadata} from 'next'
import {Providers} from "@/components/chakra-ui/provider";
import Header from "@/components/header/header";

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <html lang="fa" dir="rtl">
        <body>
        <Providers>
            <Header/>
            {children}
        </Providers>
        </body>
        </html>
    )
}
