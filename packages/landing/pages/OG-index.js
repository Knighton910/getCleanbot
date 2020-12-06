import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/src/theme/appclassic';
import { ResetCSS } from 'common/src/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/AppClassic/Navbar';
import Banner from '../containers/AppClassic/Banner';
import Customer from '../containers/AppClassic/Customer';
import KeyFeatures from '../containers/AppClassic/KeyFeatures';
import AppSlider from '../containers/AppClassic/AppSlider';
import Features from '../containers/AppClassic/Features';
import DesignedAndBuilt from '../containers/AppClassic/DesignedAndBuilt';
import FeatureTab from '../containers/AppClassic/FeatureTab';
import PricingPolicy from '../containers/AppClassic/PricingPolicy';
import Testimonial from '../containers/AppClassic/Testimonial';
import Faq from '../containers/AppClassic/Faq';
import JoinTrail from '../containers/AppClassic/JoinTrail';
import Footer from '../containers/AppClassic/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/AppClassic/appClassic.style';

export default function() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>App classic | A next js landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#2563FF" />
          <meta
            name="keywords"
            content="React, React js, Next, Next js, Super fast next js landing, Modren landing, Next js landing"
          />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <KeyFeatures />
            <AppSlider />
            <Features />
            <DesignedAndBuilt />
            <FeatureTab />
            <PricingPolicy />
            <Testimonial />
            <Faq />
            <JoinTrail />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
}


// import React, { Fragment } from 'react';
// import Head from 'next/head';
// import Sticky from 'react-stickynode';
// import { ThemeProvider } from 'styled-components';
// import { agencyTheme } from 'common/src/theme/agency';
// import { ResetCSS } from 'common/src/assets/css/style';
// import { GlobalStyle, AgencyWrapper } from '../containers/Agency/agency.style';
// import Navbar from '../containers/Agency/Navbar';
// import BannerSection from '../containers/Agency/BannerSection';
// import FeatureSection from '../containers/Agency/FeatureSection';
// import AboutUsSection from '../containers/Agency/AboutUsSection';
// import WorkHistory from '../containers/Agency/WorkHistory';
// import BlogSection from '../containers/Agency/BlogSection';
// import TestimonialSection from '../containers/Agency/TestimonialSection';
// import TeamSection from '../containers/Agency/TeamSection';
// import VideoSection from '../containers/Agency/VideoSection';
// import NewsletterSection from '../containers/Agency/NewsletterSection';
// import QualitySection from '../containers/Agency/QualitySection';
// import Footer from '../containers/Agency/Footer';
// import { DrawerProvider } from 'common/src/contexts/DrawerContext';
// import FaqSection from '../containers/Agency/FaqSection';
//
// export default () => {
//   return (
//     <ThemeProvider theme={agencyTheme}>
//       <Fragment>
//         {/* Start agency head section */}
//         <Head>
//           <title>Agency | A react next landing page</title>
//           <meta name="theme-color" content="#10ac84" />
//           <meta name="Description" content="React next landing page" />
//           {/* Load google fonts */}
//           <link
//             href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
//             rel="stylesheet"
//           />
//         </Head>
//         <ResetCSS />
//         <GlobalStyle />
//         {/* End of agency head section */}
//         {/* Start agency wrapper section */}
//         <AgencyWrapper>
//           <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
//             <DrawerProvider>
//               <Navbar />
//             </DrawerProvider>
//           </Sticky>
//           <BannerSection />
//           <FeatureSection />
//           <AboutUsSection />
//           <WorkHistory />
//           <BlogSection />
//           <QualitySection />
//           <VideoSection />
//           <TestimonialSection />
//           <TeamSection />
//           <FaqSection />
//           <NewsletterSection />
//           <Footer />
//         </AgencyWrapper>
//         {/* End of agency wrapper section */}
//       </Fragment>
//     </ThemeProvider>
//   );
// };
