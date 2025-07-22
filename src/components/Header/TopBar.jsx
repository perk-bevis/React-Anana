import React from 'react'
import Trackorder from '../../assets/icons/trackorder.svg'
import LocationShop from '../../assets/icons/LocationShop.svg'
import Loves from '../../assets/icons/Love.svg'
import LoginIcon from '../../assets/icons/LoginIcon.svg'
import ShoppingCart from '../../assets/icons/ShoppingCart.svg'
import { Link, NavLink } from 'react-router-dom'

const TopBar = () => {
    return (
        <div className="w-full h-7 bg-black mb-2.5">
            <div className="flex justify-end pr-[60px]">
                <nav>
                    <ul className="flex space-x-4">
                        {/* <li className="flex items-center gap-1 text-white">
                            <img src={Trackorder} alt="Track Order" />
                            <span>Tra cứu đơn hàng</span>
                        </li>
                        <li className="flex items-center gap-1 text-white">
                            <img src={LocationShop} alt="Store Locator" />
                            <span>Tìm cửa hàng</span>
                        </li>
                        <li className="flex items-center gap-1 text-white">
                            <img src={Loves} alt="Favorites" />
                            <span>Yêu thích</span>
                        </li>
                        <li className="flex items-center gap-1 text-white">
                            <img src={LoginIcon} alt="Login" />
                            <span>Đăng nhập</span>
                        </li>
                        <li className="flex items-center gap-1 text-white">
                            <img src={ShoppingCart} alt="Cart" />
                            <span>Giỏ hàng</span>
                        </li> */}
                        {[
                            {
                                to: "/track-order",
                                label: "Tra cứu đơn hàng",
                                icon: Trackorder
                            },
                            {
                                to: "/store-location",
                                label: "Tìm cửa hàng",
                                icon: LocationShop
                            },
                            {
                                to: "/love-product",
                                label: "Yêu thích",
                                icon: Loves
                            },
                            {
                                to: "/signin",
                                label: "Đăng nhập",
                                icon: LoginIcon
                            },
                            {
                                to: "/cart-shopping",
                                label: "Giỏ hàng",
                                icon: ShoppingCart
                            },
                        ].map(({ to, label,icon  }, i) => {
                            return (
                                <li key={i}>
                                    <NavLink
                                        to={to}
                                        className="flex items-center gap-1 text-white"
                                    >
                                        <img src={icon} alt={label} className="w-4 h-4" />
                                        {label}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default TopBar
