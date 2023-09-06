import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartArrowDown, FaSearch } from 'react-icons/fa';

const Navigation = () => {
    return (
        <div className='flex items-center justify-between mb-8 px-4'>
            <div>
                <Link className='flex items-center'><img className='w-14' src="https://i.ibb.co/p47SjwV/20230723-081354.png" alt="" />
                    <p className='text-2xl font-bold'><span className='text-orange-300'>IR</span> Fashion</p>
                </Link>

            </div>

            <div className='flex'>
                <input type="text" placeholder="Search" className="input max-w-xs shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-e-none w-96" />
                <button className='btn bg-orange-300 rounded-s-none shadow-[0_3px_10px_rgb(0,0,0,0.2)]'><FaSearch></FaSearch></button>
            </div>

            <div className='flex items-center gap-5'>
                <FaCartArrowDown className='text-2xl'></FaCartArrowDown>
                <button className='btn bg-slate-200 hover:bg-orange-300'>Login</button>
                <button className='btn bg-orange-300 hover:bg-slate-200'>Sign up</button>
            </div>
        </div>
    );
};

export default Navigation;