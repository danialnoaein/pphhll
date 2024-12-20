import Image from "next/image";
import { IconPencil } from "@tabler/icons-react";

const IntroSection = ({
  reverseOrder,
  image,
}: {
  reverseOrder: boolean;
  image: string;
}) => {
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
              src={image}
              alt={"section"}
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className='md:col-span-2 col-span-5 mx-8 pb-16'>
          <div className='mb-6 text-4xl'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از
          </div>
          <div className='text-justify'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در زمینه
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
