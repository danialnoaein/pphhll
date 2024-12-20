import Image from "next/image";
import { IconPencil } from "@tabler/icons-react";

const IntroSection = ({ reverseOrder }: { reverseOrder: boolean }) => {
  return (
    <div
      className={`container relative mx-auto my-4 bg-[#FAFBFF] bg-none duration-1000 transition-all bg-no-repeat`}
    >
      <div className={`grid grid-cols-5 items-center`}>
        <div
          className={`md:col-span-3 col-span-5 flex items-center justify-center  ${
            reverseOrder ? "md:order-last" : ""
          }
        `}
        >
          <div className="m-4 bg-no-repeat bg-cover bg-[url('/images/intro-section-image-bg-mobile.png')] md:bg-none">
            <Image
              src={"/images/section-1-sabad-gardan.png"}
              alt={"section"}
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className='md:col-span-2 col-span-5 mx-8 pb-16'>
          <div className='mb-6 text-4xl'>شرکت سبدگردان پاداش</div>
          <div className='text-justify'>
            کارگزاری پاداش از جمله کارگزاری‌هایی است که فرآیند ثبت نام و احراز
            هویت را به صورت غیرحضوری انجام می‌دهد. افتتاح حساب شما در کارگزاری
            پاداش کمتر از 5 دقیقه زمان نیاز دارد. شرکت کارگزاری پاداش با مدیریت
            حرفه ای و بهره گیری از نیروهای متخصص و باتجربه سعی در ارائه خدمات
            سرمایه گذاری در بازار سرمایه اعم از بورس اوراق بهادار، بورس کالا،
            انرژی و ابزار مشتقه، د
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
