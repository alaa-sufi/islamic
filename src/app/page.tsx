"use client";
// mui
import { Box, Button, Container, List, ListItem, ListItemButton, Typography, ListItemText, useTheme, Grid } from '@mui/material';
// react and next
import Image from 'next/image';
// images
import { bismAllahAlrahmanAlrahim, section1Bg, vrse, bgShapes, section2Img1,section2Img2} from "../assets/images";
// style
import '../style/main.css';

export default function Home() {
  const theme = useTheme();

  const navLinks: { title: string, link: string }[] = [
    { title: 'الرئيسية', link: 'section1' },
    {
      title: 'حول الاسلام', link: 'section2'
    },
    {
      title: 'اسماء الله الحسنى', link: 'section3'
    },
    {
      title: ' أركان الاسلام', link: 'section4'
    },
    {
      title: 'تواصل معنا', link: 'section5'
    },
  ]
  return (
    <>
      {/* // start first section */}
      {/* <Box sx={{ background: 'black' }}>
        <Container>
          <>
            <Box component="div" sx={{ zIndex: 3, position: 'relative' }}>
              <>
                <List
                  aria-label="nav links"
                  sx={{ display: 'flex', color: 'white' }}
                >
                  {navLinks.map((navLink, i) => {
                    return (
                      <ListItem key={i} sx={{ fontSize: '1.5rem' }}>
                        <ListItemButton>
                          <ListItemText children={navLink.title} disableTypography />
                        </ListItemButton>
                      </ListItem>
                    )
                  })}
                </List>
                <Box component="div" sx={{ display: 'flex', alignItems: "center", flexDirection: 'column', gap: '1rem' }}>
                  <Image src={bismAllahAlrahmanAlrahim} alt="bism allah alrahman alrahim" />
                  <Image src={vrse} alt="vrse" />
                </Box>
              </>
            </Box>
            <Box sx={{ background: 'linear-gradient(to right bottom, #00659d, #0079a4 , #008cab, #008cab,#008cab,#0093a9,#2c3b3b)', opacity: '0.5', position: 'absolute', top: 0, right: 0, width: '100vw', minHeight: '100vh', height: '100%', zIndex: 2 }}></Box>
            <Image src={section1Bg} alt="quran img" className='section1-bg' />
          </>
        </Container>
      </Box> */}
      {/* // end first section */}
      <Box className='bg-white-shapes' sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
        <Box sx={{ background: theme.palette.primary.main, height: '100%', width: '30%', position: 'absolute' }} >
        </Box>
        <Container sx={{ position: 'relative', zIndex: '2' }}>
          <Typography variant="h2" component="h3" sx={{ textAlign: 'center' }}>
            التاريخ الإسلامي
          </Typography>
          <Grid container spacing={2} alignItems='stretch'  >
            <Grid item xs={4}>
              <Image src={section2Img1} alt="mosque" className='section2-img1' />
              <Image src={section2Img2} alt="girl with quran" className='section2-img2' />


            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" component="h3" color={"primary.main"}>
                أهلا بكم في عالم المعرفة الإسلامية
              </Typography>
              <Typography variant="body2" component="h3" >
                هدا النص هو مثال لنص يمكن أن يستبدل مي نقس المساحة، لقد تم توليد هذا
                العربي، حيث بمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة
                التي يولدها التطبيق
                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربي زيادة عددا هدا النص هو مثال لنص يمكن أن يستبدل مي نقس المساحة، لقد تم توليد هذا
                العربي، حيث بمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة
                التي يولدها التطبيق
                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربي زيادة عددا . .
              </Typography>
              <Button variant="contained" color="primary">
                اقرأ المزيد
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* // start second section
    // end second section
    // start third section
    // end third section
    // start forth section
    // end forth section
    // start fifth section
    // end fifth section */}
    </>

  )
}
export const metadata = {
  title: 'App directory',
}
