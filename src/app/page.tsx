"use client"; 
import { Button } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t, lang } = useTranslation('home')
  return (
    <div>
      <h1>{t('example')}</h1>
      <Button variant="contained">Hello World</Button>
    </div>
  )
}
export const metadata = {
  title: 'App directory',
}
