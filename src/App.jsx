import './App.css'
import { Navbar, Hero, GetStarted, Features, Testimonials, DownloadAds, FAQ, CTA, Footer } from './components';
 import { hero_pattern, dowloadAds_pattern, dowloadAds_pattern_sm } from './assets';
 
function App() {
  // Define the radial gradient background style
   const radialGradientStyle = {
    background: `
      radial-gradient(50% 50% at 50% 50%, #385334 0%, #041402 100%)`,
    // Other styles for your component
  };

  const HeroBgPatternSectionStyle = () =>  (
    <>
      <div className="hidden md:block absolute top-0 right-0 bg-cover bg-no-repeat">
        <img src={hero_pattern} alt="" />
      </div>
      <div className="sm:block md:hidden absolute w-[75%] top-0 right-0 bg-cover bg-no-repeat">
          <img src={hero_pattern} alt="" />
      </div>
    </>
  );

  const DowloadAdsBgPatternSectionStyle = () =>  (
    <>
      <div className="hidden md:block absolute top-0 right-0 bg-cover bg-no-repeat h-[100%]">
        <img src={dowloadAds_pattern} className='h-[100%]' alt="" />
      </div>
      <div className="sm:block md:hidden absolute top-0 right-0 bg-cover bg-no-repeat">
          <img src={dowloadAds_pattern_sm} alt="" />
      </div>
    </>
  );

  return (
    <>
      <div className='w-full overflow-hidden mx-auto'>
          <div style={radialGradientStyle} className='relative'>
            <HeroBgPatternSectionStyle />
            <Navbar/>
            <Hero/>
          </div>
          <GetStarted/>
          <Features/>
          <Testimonials/>
          <div style={radialGradientStyle} className='relative'>
            <DowloadAdsBgPatternSectionStyle/>
            <DownloadAds/>
          </div>
          <FAQ/>
          <CTA/>
          <Footer/>
      </div>
    </>
  )
}

export default App
