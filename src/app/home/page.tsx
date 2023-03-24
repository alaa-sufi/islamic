"use client";
// sections
import HomePageSection1 from '@/components/pages/home/section1';
import HomePageSection2 from '@/components/pages/home/section2';
import HomePageSection3 from '@/components/pages/home/section3';
import HomePageSection4 from '@/components/pages/home/section4';
import HomePageSection5 from '@/components/pages/home/section5';


export default function Home() {



  return (
    <>
      <HomePageSection1 />
      {/* <HomePageSection2 /> */}
      <HomePageSection3 />
      <HomePageSection4 />
      <HomePageSection5 />
    </>

  )
}
export const metadata = {
  title: 'App directory',
}
