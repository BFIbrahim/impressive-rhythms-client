import React from 'react';
import {FaFacebook, FaInstagram } from 'react-icons/fa';


const TopNav = () => {
    return (
        <div className='flex items-center justify-around bg-orange-300 p-2  font-semibold mb-5'>
            <div>
                <p>impressiverhythms@gmail.com</p>
            </div>
            <div>
                +8801956633205
            </div>
            <div className='flex gap-2'>
                <div><FaFacebook></FaFacebook></div>
                <div><FaInstagram></FaInstagram></div>
            </div>
        </div>
    );
};

export default TopNav;