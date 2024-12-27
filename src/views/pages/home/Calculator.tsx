import { useState } from "react";

const Calculator = () => {
  const [amount, setAmount] = useState<number>(0);
  const [installments, setInstallments] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(35);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleCalculate = () => {
    const principal = amount - downPayment;
    const rate = interestRate / 100 / 12;
    const months = installments;

    if (rate === 0) {
      setMonthlyPayment(principal / months);
    } else {
      setMonthlyPayment((principal * rate) / (1 - Math.pow(1 + rate, -months)));
    }
  };

  return (
    <div className='container mx-auto my-20'>
      <div className='text-center text-4xl mb-10'>محاسبه گر اقساط</div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='p-6'>
          <div>
            <div className='font-bold mb-1'>مبلغ تخمینی</div>
            <div className='relative'>
              <input
                onChange={(e) => setAmount(Number(e.target.value))}
                type='text'
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
                onChange={(e) => setInstallments(Number(e.target.value))}
                type='text'
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
                onChange={(e) => setDownPayment(Number(e.target.value))}
                type='text'
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
                  type='text'
                  value={35}
                  disabled
                  className='block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50'
                  placeholder='درصد سود  تخمینی '
                  required
                />
                <div className='absolute end-2 bottom-2 font-medium rounded-lg text-sm px-4 py-2'>
                  %
                </div>
              </div>
            </div>
            <div
              className='bg-primary-500 text-white text-center p-4 rounded-lg h-[54px] font-bold'
              onClick={() => handleCalculate()}
            >
              محاسبه
            </div>
          </div>
        </div>
        <div className='bg-primary-500 p-6 text-white rounded-xl flex flex-col'>
          <div className='text-center'>پرداختی ماهانه</div>
          <div className='text-center text-4xl font-bold my-6'>
            {`${addCommas(Math.round(monthlyPayment))} تومان`}
          </div>
          <div className='flex justify-between border-b p-2'>
            <div>مدت بازپرداخت:</div>
            <div className='font-bold'>{installments} ماه</div>
          </div>

          <div className='flex justify-between p-2'>
            <div>مجموع بازپرداخت اقساط:</div>
            <div className='font-bold'>
              {addCommas(installments * Math.round(monthlyPayment))}
            </div>
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

const addCommas = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
