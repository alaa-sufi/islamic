"use client"
import { useState, useLayoutEffect } from 'react'
import { createTheme, GlobalStyles, ThemeProvider, createMuiTheme } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
// style
import '../style/main.css';
import createCache from '@emotion/cache';
document.dir = 'rtl';
const cssVar = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const [theme, setTheme] = useState(
    createTheme({
      palette: {
        primary: {
          main: "#2489b0"
        }
      },
      direction: 'rtl',
      typography: {
        fontFamily: 'wasm, Raleway, Arial',
      }
    })
  );

  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
  });
  return (
    <html lang={lang}>
      <head />
      <body dir="rtl" lang='ar'>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <GlobalStyles styles={{ body: { direction:'rtl', textAlign:'right' } }} /> */}

            <div>
              {children}
            </div>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
