// mui
import { Box, Container, List, ListItem, ListItemText, ListItemButton } from "@mui/material"
// react and next
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// images
import { bismAllahAlrahmanAlrahim, section1Bg, vrse } from "@/assets/images";
// type
import TProps from "./type";
import Link from "next/link";

export default function HomePageSection1({ }: TProps) {
    const router = useRouter()

    // const search = searchParams.get('search');
    useEffect(() => {
        if (window.location.hash) {
            scrollTo(window.location.hash.split('#')[1])
        }
    }, [router])

    const navLinks: { title: string, link: string }[] = [
        { title: 'الرئيسية', link: '/#section1' },
        {
            title: 'حول الاسلام', link: '/#section2'
        },
        {
            title: ' أركان الاسلام', link: '/pillars-of-islam'
        },
        {
            title: 'اسماء الله الحسنى', link: '/god-names'
        },
        {
            title: 'تواصل معنا', link: '/#section5'
        },
    ];
    const scrollTo = (hash: string) => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Box sx={{ background: 'black', minHeight: '100vh' }}>
            <Container>
                <>

                    <Box component="div" sx={{ zIndex: 3, position: 'relative' }}>
                        <List
                            aria-label="nav links"
                            sx={{ display: 'flex', color: 'white' }}
                        >
                            {navLinks.map((navLink, i) => {
                                return (
                                    <ListItem key={i} sx={{ fontSize: '1.5rem' }}>
                                        <ListItemButton
                                            href={{
                                                pathname: navLink.link,
                                            }}
                                            component={Link}
                                            // onClick={() => scrollTo(navLink.link)}

                                        >
                                            <ListItemText children={navLink.title} disableTypography />
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                        <Box component="div" sx={{ display: 'flex', alignItems: "center", flexDirection: 'column', marginTop: '2rem', gap: '1rem', '& img': { maxWidth: '100%', height: 'max-content' } }}>
                            <Image src={bismAllahAlrahmanAlrahim} alt="bism allah alrahman alrahim" />
                            <Image src={vrse} alt="vrse" className="" />
                        </Box>
                    </Box>
                    <Box sx={{ background: '#136483', opacity: '0.13', position: 'absolute', top: 0, right: 0, width: '100vw', minHeight: '100vh', height: '100%', zIndex: 2 }}></Box>
                    <Box sx={{
                        "& img": {
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            left: 0,
                            objectFit: 'cover',
                            width: '100%',
                            minHeight: '100vh',
                            height: '100%',
                        }
                    }}>
                        <Image src={section1Bg} alt="quran img" className='section1-bg' />
                    </Box>
                </>
            </Container>
        </Box>
    )
}