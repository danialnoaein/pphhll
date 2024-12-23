const Calculator = () => {
  return (
    <div className='container mx-auto my-20'>
      <div className='text-center text-4xl mb-10'>محاسبه گر اقساط</div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='p-6'>
          <div>
            <div className='font-bold mb-1'>مبلغ تخمینی</div>
            <div className='relative'>
              <input
                type='search'
                id='search'
                className='block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50'
                placeholder='مبلغ'
                required
              />
              <div className='absolute end-2 bottom-2 font-medium rounded-lg text-sm px-4 py-2'>
                تومان
              </div>
            </div>
          </div>

          <div>
            <div className='font-bold mb-1 mt-4'>تعداد اقساط</div>
            <div className='relative'>
              <input
                type='search'
                id='search'
                className='block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50'
                placeholder='تعداد'
                required
              />
              <div className='absolute end-2 bottom-2 font-medium rounded-lg text-sm px-4 py-2'>
                ماهه
              </div>
            </div>
          </div>

          <div>
            <div className='font-bold mb-1 mt-4'>مبلغ پیش پرداخت</div>
            <div className='relative'>
              <input
                type='search'
                id='search'
                className='block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50'
                placeholder='مبلغ پیش پرداخت'
                required
              />
              <div className='absolute end-2 bottom-2 font-medium rounded-lg text-sm px-4 py-2'>
                تومان
              </div>
            </div>
          </div>

          <div className='mt-4 grid grid-cols-2 gap-4 items-end'>
            <div>
              <div className='font-bold mb-1'>درصد سود تخمینی </div>
              <div className='relative'>
                <input
                  type='search'
                  id='search'
                  className='block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50'
                  placeholder='درصد سود  تخمینی '
                  required
                />
              </div>
            </div>
            <div className='bg-primary-500 text-white text-center p-4 rounded-lg h-[54px] font-bold'>
              محاسبه
            </div>
          </div>
        </div>
        <div className='bg-primary-500 p-6 text-white rounded-xl flex flex-col'>
          <div className='text-center'>پرداختی ماهانه</div>
          <div className='text-center text-4xl font-bold my-6'>
            ۱۰ میلیون تومان
          </div>
          <div className='flex justify-between border-b p-2'>
            <div>مدت بازپرداخت:</div>
            <div className='font-bold'>۲۱ ماه</div>
          </div>

          <div className='flex justify-between p-2'>
            <div>مجموع بازپرداخت اقساط:</div>
            <div className='font-bold'>۲۱,۱۰۰,۰۰۰ </div>
          </div>

          <div className='flex-1'></div>
          <div className='text-center border-2 rounded py-[4px] my-2'>
            ثبت درخواست وام
          </div>
          <div className='text-center mt-1'>مشاهده جزییات دریافت وام</div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
