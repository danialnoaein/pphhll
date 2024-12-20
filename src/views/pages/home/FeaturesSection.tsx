import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 first:rounded-0 first:rounded-l-lg last:rounded-r-lg '>
        <div className='rounded-2xl bg-white border over overflow-hidden	'>
          <Image
            src={"/images/feature-1.png"}
            alt={"section"}
            width={512}
            height={512}
          />
          <div className='p-4 pt-0'>
            <div className='mb-2 text-xl font-bold'>
              نیم نگاهی به آینده بورس ایران
            </div>
            <div>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون است.
            </div>
          </div>
        </div>

        <div className='rounded-2xl bg-white border over overflow-hidden	'>
          <Image
            src={"/images/feature-1.png"}
            alt={"section"}
            width={512}
            height={512}
          />
          <div className='p-4 pt-0'>
            <div className='mb-2 text-xl font-bold'>
              نیم نگاهی به آینده بورس ایران
            </div>
            <div>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون است.
            </div>
          </div>
        </div>

        <div className='rounded-2xl bg-white border over overflow-hidden	'>
          <Image
            src={"/images/feature-1.png"}
            alt={"section"}
            width={512}
            height={512}
          />
          <div className='p-4 pt-0'>
            <div className='mb-2 text-xl font-bold'>
              نیم نگاهی به آینده بورس ایران
            </div>
            <div>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون است.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
