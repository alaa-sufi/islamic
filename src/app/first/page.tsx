"use client"; // this is a client component 👈🏽
import { Button, CardHeader, Avatar, IconButton } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link';
// 
// const inter = Inter({ subsets: ['latin'] })

export default function Page() {
    const { t, lang } = useTranslation('home')
    return (
        <div>
            <h1>{t('first')}</h1>
            <p>arlo10</p>
            <Button variant="contained">Hello World</Button>
        </div>
    )
}
export const metadata = {
    title: 'App directory',
}
