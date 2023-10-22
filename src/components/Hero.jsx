import { hero_img, partners, text_bg } from "../assets";

function Hero() {
  return (  
  <>
    <section className="container mt-10 px-3 mx-auto flex md:flex-row flex-col text-white">
      <div className="flex-1">
        <div className="mt-[10px] md:mt-52 md:max-w-[509px]">
          <h1 className="font-primary font-bold leading-normal text-white text-[38px] md:text-[56px] z-10">
            Your Path to Financial <span className="relative">
              <span className="relative">Success</span>
              {/* image under the text "sucess" */}
              <img src={text_bg} className="absolute w-[55%] top-[32px] lg:top-[45px] left-16 lg:left-24" alt="vector" />
            </span>
          </h1>
          <p className="font-primary font-normal leading-[24px] text-[16px] text-[#EDEBEB] mt-[20px]">Take charge of your money, track expenses effortlessly, and reach your financial goals. Start budgeting smarter today.</p>
          <div className="flex flex-nowrap gap-8 md:gap-10 mt-12 items-center">
            <button className="flex-shrink-0 w-[160px] h-[48px] rounded-lg bg-primary text-white font-primary font-normal">Download Now</button>
            <button className="flex-shrink-0 w-[160px] h-[48px] rounded-lg bg-none text-white font-primary font-normal flex items-center"> <i className="fa-solid fa-play mr-4 text-[28px]"></i> Watch Demo</button>
          </div>

          <p className="mt-16 font-primary font-normal leading-normal text-[16px] text-[#EDEBEB]">Trusted by leading companies</p>
          <div className="mt-5">
            <img src={partners} alt="partners" />
          </div>
        </div>
      </div>

      <div className="flex-1 z-0">
        <div>
          <img src={hero_img} className="w-[100%] md:w-[95%] h-[100%]" alt="hero_image" />
        </div>
      </div>
    </section>
    <div className="bg-[#D3FFDB] w-full h-[30px]" />
  </>
  )
}

export default Hero
