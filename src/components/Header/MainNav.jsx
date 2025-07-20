import React from 'react'
import LogoHeader from '../../assets/icons/AnanaHeader.svg'
import { ChevronDown, Search } from 'lucide-react'
import iconYou from '../../assets/images/DiscoverYOU.svg'
import Dropmenman from '../../assets/images/Dropmenu_nam.jpg'
import Dropmen_meal from '../../assets/images/Desktop_Dropdown_Women_1-2.jpg'
import OutletSales from '../../assets/images/Dropmenu-Promotion.jpg'
import DropmenuAccessory from '../../assets/images/Dropmenu-ThoitrangPhukien.jpg'

const MainNav = () => {
  return (
    <div className='w-full h-28 flex items-center'>
      <div className='flex justify-between w-full mt-3 px-2.5'>
        <div className='mt-9 ml-[181px]'>
          <img src={LogoHeader} alt="" width={122} />
        </div>
        <div className='flex items-center justify-between px-5 pt-5 mt-[-10px]'>
          <div className='flex'>
            {/* li */}
            <div className='group flex items-center gap-1 px-5 relative before:content-[""] before:absolute before:top-0 before:right-0 before:w-0.5 before:h-full before:bg-[#ccc]'>
              <a href="" className='font-[Bebas_Neue ,sans-serif] font-bold'>SẢN PHẨM</a>
              <ChevronDown />
              <div className='fixed bg-gray-700 w-full h-[465px] top-[150px] left-0 right-0 z-50'>
                <div className='absolute top-[-20px] left-[40px] before:content-[""] before:absolute before:top-0 before:right-0 before:w-0.5 before:h-full before:bg-gray-700'></div>
                <div className='grid grid-cols-4 gap-12 p-4 px-80 pt-7'>
                  <div>
                    <img src={Dropmenman} alt="" />
                    <div className='text-white  text-center font-bold text-lg mt-4'>CHO NAM</div>
                  </div>
                  <div>
                    <img src={Dropmen_meal} alt="" />
                    <div className='text-white text-center font-bold text-lg mt-4'>CHO NỮ</div>
                  </div>
                  <div>
                    <img src={OutletSales} alt="" />
                    <div className='text-white text-center font-bold text-lg mt-4'>OUTLET SALE</div>
                  </div>
                  <div>
                    <img src={DropmenuAccessory} alt="" />
                    <div className='text-white text-center font-bold text-lg mt-4'>THỜI TRANG VÀ PHỤ KIỆN</div>
                  </div>
                </div>
                <div className='text-center pt-5'>
                  <p className='text-[#ccc]'>MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ <span className='text-white font-bold'>DỨA</span> !</p>
                </div>
              </div>
            </div>
            <div className='group flex items-center gap-1 px-5 relative before:content-[""] before:absolute before:top-0 before:right-0 before:w-0.5 before:h-full before:bg-[#ccc]'>
              <a href="" className='font-[Bebas_Neue ,sans-serif] font-bold'>NAM</a>
              <ChevronDown />
              <div className='fixed bg-gray-700 w-full h-[465px] top-[150px] left-0 right-0 z-50 '>
                {/* <div className='absolute top-[-20px] left-1/2 -translate-x-1/2 before:content-[""] before:absolute before:border-[10px] before:border-solid before:border-transparent before:border-b-gray-700'></div> */}
                <div className='grid grid-cols-4 gap-12 p-4 px-80 pt-7'>
                  <div>
                    <img src={Dropmenman} alt="" />
                    <div className='text-white  text-center font-bold text-lg mt-4'>CHO NAM</div>
                  </div>
                  <div>
                    <img src={Dropmen_meal} alt="" />
                    <div className='text-white text-center font-bold text-lg mt-4'>CHO NỮ</div>
                  </div>
                  <div>
                    <img src={OutletSales} alt="" />
                    <div className='text-white text-center font-bold text-lg mt-4'>OUTLET SALE</div>
                  </div>
                  <div>
                    <img src={DropmenuAccessory} alt="" />
                    <div className='text-white text-center font-bold text-lg mt-4'>THỜI TRANG VÀ PHỤ KIỆN</div>
                  </div>
                </div>
                <div className='text-center pt-5'>
                  <p className='text-[#ccc]'>MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ <span className='text-white font-bold'>DỨA</span> !</p>
                </div>
              </div>
            </div>
            <div className='group flex items-center gap-1 px-5 relative before:content-[""] before:absolute before:top-0 before:right-0 before:w-0.5 before:h-full before:bg-[#ccc]'>
              <a href="" className='font-[Bebas_Neue ,sans-serif] font-bold'>NỮ</a>
              <ChevronDown />
              <div className='fixed bg-gray-700 w-full h-[465px] top-[150px] left-0 right-0 z-50 '>
                <div className='grid grid-cols-4 gap-12 p-4 px-80 pt-7'>
                  <div>
                    <img src={Dropmenman} alt="" />
                    <div className='text-white  text-center font-bold text-lg mt-4'>CHO NAM</div>
                  </div>
                  <div>
                    <img src={Dropmen_meal} alt="" />
                    <div className='text-white text-center font-bold text-lg mt-4'>CHO NỮ</div>
                  </div>
                  <div>
                    <img src={OutletSales} alt="" />
                    <div className='text-white text-center font-bold text-lg mt-4'>OUTLET SALE</div>
                  </div>
                  <div>
                    <img src={DropmenuAccessory} alt="" />
                    <div className='text-white text-center font-bold text-lg mt-4'>THỜI TRANG VÀ PHỤ KIỆN</div>
                  </div>
                </div>
                <div className='text-center pt-5'>
                  <p className='text-[#ccc]'>MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ <span className='text-white font-bold'>DỨA</span> !</p>
                </div>
              </div>
            </div>
            <div className='flex items-center px-5 relative before:content-[""] before:absolute before:top-0 before:right-0 before:w-0.5 before:h-full before:bg-[#ccc]'>
              <a href="" className='font-[Bebas_Neue ,sans-serif] font-bold'>SALE OFF</a>
            </div>
          </div>
          <div className='ml-8'>
            <img src={iconYou} alt="" className='mt-[-25px]' />
          </div>
        </div>
        <div className='mt-[22px] mr-[53px] mb-[40px] ml-[22px] relative'>
          <input type="text" placeholder='tìm kiếm ' className='pt-[6px] pb-[6px] pl-[34px] pr-[12px] border border-gray-400 outline-none focus:border-[rgba(102,175,233,0.6)]' />
          <Search className='absolute top-2 left-2 w-5 h-6' />
        </div>
      </div>
    </div>
  )
}

export default MainNav
