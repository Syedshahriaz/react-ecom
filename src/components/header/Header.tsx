import React from 'react';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import logo from '../../images/next.svg';

const Header = () => {
  return (
    <div className='w-full h-20 bg-primary text-white sticky top-0 z-50 flex items-center'>
        <div className='h-full w-full mx-auto inline-flex items-center justify-between gap-1 px-4 flex-1'>
            <a href="/">
                <Image className="w-28" src={logo} alt="logo" />
            </a>
        </div>
        <div className='search-box gap-1 px-4 flex-1'>
            <input className='w-full h-[36px] rounded p-3' type="text" placeholder="search..." />
        </div>
        <div className='flex gap-1 px-4 w-[200px] justify-end'>
            <div className='text-[24px] px-2'>
                <a href="/">
                    <AiOutlineHeart />
                </a>
            </div>
            <div className='text-[24px] px-2'>
                <a href="/cart">
                    <FiShoppingCart />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header