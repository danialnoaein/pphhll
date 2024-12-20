"use client";

import Footer from "@/views/components/footer/Footer";
import Nav from "@/views/components/nav/Nav";
import Cards from "./Cards";
import Hero from "./Hero";
import IntroSection from "./IntroSection";
import MoveToTopInFooter from "./MoveToTopInFooter";
import TextSection from "./TextSection";
import Calculator from "./Calculator";
import FeaturesSection from "./FeaturesSection";

const Home = () => {
  return (
    <div className='bg-[#FAFBFF]'>
      <Nav />
      <Hero />
      <Cards />
      <br />
      <br />
      <TextSection
        header={
          <div>
            چرا لیزینگ <span className='font-bold text-primary-500'>پاداش</span>{" "}
            بهترین گزینه است؟
          </div>
        }
        description={
          "گروه خدمات بازار سرمایه پاداش در چهار محور اصلی کارگزاری، سبدگردانی، مشاور سرمایه گذاری و لیزینگ با مدیریت دارایی تخصصی خدمات ارائه می دهد."
        }
      />

      <FeaturesSection />

      <Calculator />

      <IntroSection
        reverseOrder={false}
        image={"/images/section-1.png"}
      />
      <IntroSection
        reverseOrder={true}
        image={"/images/section-2.png"}
      />

      <MoveToTopInFooter />
      <Footer />
    </div>
  );
};

export default Home;
