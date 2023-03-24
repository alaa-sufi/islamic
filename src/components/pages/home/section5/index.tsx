// react and next
import Image from "next/image";
// react and next
import { Box, Button, Container, Grid, Typography } from "@mui/material"
// type
import TProps from "./type";
// images
import { section3Img } from "@/assets/images";

export default function HomePageSection5({ }: TProps) {
    return (
        <Box className='bg-white-shapes' sx={{ backgroundColor: 'white', minHeight: '100vh', zIndex: 3, position: 'relative' }} id='section5'>
            <Container sx={{ position: 'relative', zIndex: '2' }}>
                <>
                    <Typography variant="h2" component="h3" sx={{ textAlign: 'center' }}>
                        تواصل معنا
                    </Typography>
                   
                </>
            </Container>
        </Box>
    )
}