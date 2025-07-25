import React from 'react';
// Giả sử các đường dẫn import này là chính xác trong project của bạn
import StoreImage from '../../assets/images/shopAnana.svg'; // Thêm import cho ảnh Store
import BoCongThuongLogo from '../../assets/icons/MinistryofIndustryandTrade.png';
import AnanasLogo from '../../assets/icons/Logo_Ananas_Footer.svg';
import DmcaLogo from '../../assets/icons/dmca_protected_sml_120n.png';

// Import icon từ react-icons
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#505050] text-gray-50 px-[5%] py-10">
      <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-left">
        <img src={StoreImage} alt="Ananas Store" className="mx-auto lg:mx-0 mb-5" />
        <a href="#" className="inline-block bg-[#f15e2c] text-white py-3 px-6 font-bold text-sm rounded-sm transition-colors duration-300 hover:bg-[#d95322]">TÌM CỬA HÀNG</a>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">

        <div className="w-full lg:w-auto text-center lg:text-left">
          <h4 className="text-sm mb-5 font-bold text-white uppercase">Sản phẩm</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Giày Nam</a></li>
            <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Giày Nữ</a></li>
            <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Thời trang & Phụ kiện</a></li>
            <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Sale-off</a></li>
          </ul>
        </div>

        <div className="w-full lg:w-auto text-center lg:text-left">
          <h4 className="text-sm mb-5 font-bold text-white uppercase">Về công ty</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Dứa tuyển dụng</a></li>
            <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Liên hệ nhượng quyền</a></li>
            <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Về Ananas</a></li>
          </ul>
        </div>

        <div className="w-full lg:w-auto text-center lg:text-left">
          <h4 className="text-sm mb-5 font-bold text-white uppercase">Hỗ trợ</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">FAQs</a></li>
            <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Bảo mật thông tin</a></li>
            <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Chính sách chung</a></li>
            <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Tra cứu đơn hàng</a></li>
          </ul>
        </div>

        <div className="w-full lg:w-auto text-center lg:text-left">
          <h4 className="text-sm mb-5 font-bold text-white uppercase">Liên hệ</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Email góp ý</a></li>
            <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Hotline</a></li>
            <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">1900 0014</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 border-t border-gray-600 pt-8">
        <div className="text-center lg:text-left">
          <h4 className="text-sm mb-4 font-bold text-white uppercase">Ananas Social</h4>
          <div className="flex justify-center lg:justify-start space-x-4">

            <a href="#" className="text-white hover:text-[#f15e2c] text-xl transition-colors"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-[#f15e2c] text-xl transition-colors"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-[#f15e2c] text-xl transition-colors"><FaYoutube /></a>
          </div>
        </div>

        <div className="flex flex-col items-center w-full lg:w-auto">
          <h4 className="text-sm mb-4 font-bold text-white uppercase">Đăng ký nhận mail</h4>
          <form className="flex items-center bg-white max-w-xs w-full">
            <input type="email" placeholder="" className="border-none p-2.5 w-full text-gray-900 text-sm focus:outline-none flex-grow" />
            <button type="submit" className="bg-gray-800 border-none text-white py-2.5 px-4 cursor-pointer text-base">
              <FiArrowRight />
            </button>
          </form>
        </div>

        <div className="text-center lg:text-right">
          <img src={AnanasLogo} alt="Ananas Logo" className="max-w-[180px]" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 border-t border-gray-600 pt-5 mt-8">
        <div className="flex items-center space-x-4">
          <a href="#">
            <img src={BoCongThuongLogo} alt="Đã Thông Báo Bộ Công Thương" className="h-10" />
          </a>
          <a href="#">
            <img src={DmcaLogo} alt="DMCA Protected" className="h-[25px]" />
          </a>
        </div>
        <div className="copyright">
          <p className="m-0 text-xs text-gray-400">Copyright © 2025 Ananas. All rights reserved.</p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
