"use client"; // this is a client component 👈🏽
import { Button, CardHeader, Avatar, IconButton } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] })

export default function Page() {
    const { t, lang } = useTranslation('home')
    return (
        <div>
            <h1>{t('example')}</h1>
            <Button variant="contained">Hello World</Button>
            <Link href="/?lang=en" as="/en">
                English
            </Link>
            <Link href="/?lang=en" as="/ar">
                Arabic
            </Link>
        </div>
    )
}
export const metadata = {
    title: 'App directory',
}
