import { ChevronRight } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import React from 'react'
import { FiArrowRight } from 'react-icons/fi';

const Footerresponsive = () => {
  return (
    <div className='block md:hidden'>
      <div className='font-bold '>
        <ul className='h-[calc(100vh - 20vw)]'>
          <li className='p-7 flex justify-between relative before:absolute before:bottom-0 before:left-0 before:border-dashed before:border-1 before:w-full'>SẢN PHẨM
            <ChevronRight />
          </li>
          <li className='p-7 flex justify-between relative before:absolute before:bottom-0 before:left-0 before:border-dashed before:border-1 before:w-full'>VỀ CÔNG TY
            <ChevronRight />
          </li>
          <li className='p-7 flex justify-between relative before:absolute before:bottom-0 before:left-0 before:border-dashed before:border-1 before:w-full'>HỖ TRỢ
            <ChevronRight />
          </li>
          <li className='p-7 flex justify-between relative before:absolute before:bottom-0 before:left-0 before:border-dashed before:border-1 before:w-full'>LIÊN HỆ
            <ChevronRight />
          </li>
        </ul>
      </div>
      <div className='p-7'>
        <h4 className="text-sm mb-4 font-bold text-white uppercase ">Ananas Social</h4>
        <div className="flex space-x-4">

          <a href="#" className="text-white hover:text-[#f15e2c] text-xl transition-colors"><FaFacebookF /></a>
          <a href="#" className="text-white hover:text-[#f15e2c] text-xl transition-colors"><FaInstagram /></a>
          <a href="#" className="text-white hover:text-[#f15e2c] text-xl transition-colors"><FaYoutube /></a>
        </div>
      </div>
      <div className='px-7'>
        <h4 className="text-sm mb-2 font-bold text-white w-full md:w-[50%] uppercase">Đăng ký nhận mail</h4>
        <form className="flex items-center bg-white max-w-xs w-full md:w-[50%]">
          <input type="email" placeholder="" className="border-none p-2.5 w-full text-gray-900 text-sm focus:outline-none flex-grow" />
          <button type="submit" className="bg-gray-800 border-none text-white py-2.5 px-4 cursor-pointer text-base">
            <FiArrowRight />
          </button>
        </form>
        <a href="#" className="inline-block w-full text-center bg-[#f15e2c] text-white py-3 px-6 font-bold text-sm rounded-sm transition-colors duration-300 hover:bg-[#d95322]">TÌM CỬA HÀNG</a>
      </div>
    </div>
  )
}

export default Footerresponsive
