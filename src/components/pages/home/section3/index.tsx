// react and next
import Image from "next/image";
import Link from "next/link";
// react and next
import { Box, Button, Container, Grid, Typography } from "@mui/material"
// type
import TProps from "./type";
// images
import { section3Img } from "@/assets/images";

export default function HomePageSection3({ }: TProps) {
    return (
        <Box sx={{ backgroundColor: '#E7F0F9', minHeight: '100vh', paddingY: '2rem', zIndex: 3, position: 'relative' }} id='section2' className='section3-bg'>
            <Container sx={{ position: 'relative', zIndex: '2' }}>
                <Typography variant="h2" component="h3" sx={{ textAlign: 'center', marginBottom: '3rem' }}>
                    أركان الاسلام
                </Typography>
                <Grid container spacing={2} alignItems='stretch' direction={'row-reverse'}>
                    <Grid md={6}>
                        <Box>
                            <Typography variant="h3" color='primary' component="h3" sx={{ marginBottom: '2rem' }}>
                                دعونا نتعرف على أركان الإسلام
                            </Typography>
                            <Typography variant="h5">
                                هدا النص هو مثال لنص يمكن أن يستبدل مي نقس المساحة، لقد تم توليد هذا
                                العربي، حيث بمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة
                                التي يولدها التطبيق
                                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربي زيادة عددا هدا النص هو مثال لنص يمكن أن يستبدل مي نقس المساحة، لقد تم توليد هذا
                                العربي، حيث بمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة
                                التي يولدها التطبيق
                                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربي زيادة عددا . .
                            </Typography>
                            <Button variant="contained" color="primary" href='./pillars-of-islam' component={Link} sx={{ margin: '2rem auto' }}>
                                اقرأ المزيد
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}