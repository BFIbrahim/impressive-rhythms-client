import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper md:h-96 bg-gray-200">
                <SwiperSlide>
                    <div className='md:flex justify-around items-center'>
                        <div>
                            <p className='px-10 md:px-24 lg:px-24 mt-8 text-center md:text-start lg:text-start'>
                                <p className='font-bold text-2xl md:text-4xl lg:text-4xl text-black'>Step into <span className='text-pink-500'>Impressive Rhythms</span></p>
                                <small className=''>Explore a world of dapper choices that redefine boys' fashion. Our curated collection at Impressive Rhythms brings you trendsetting ensembles that elevate his style effortlessly.</small>
                            </p>
                        </div>
                        <div>
                            <img className='w-[100%]' src="https://i.ibb.co/HNpCgVS/Untitled-1.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:flex justify-around items-center'>
                        <div>
                            <p className='px-10 md:px-24 lg:px-24 mt-8 text-center md:text-start lg:text-start'>
                                <p className='font-bold text-2xl md:text-4xl lg:text-4xl text-black'>Unveiling Elegance and Style at <span className='text-pink-500'>Impressive Rhythms</span></p>
                                <small className=''>Witness the harmonious fusion of elegance and style with our boys' fashion symphony. Immerse him in the finest attire that speaks volumes about his unique charm, exclusively at Impressive Rhythms.</small>
                            </p>
                        </div>
                        <div>
                            <img className='w-[100%]' src="https://i.ibb.co/sjmM5fH/2.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:flex justify-around items-center'>
                        <div>
                            <p className='px-10 md:px-24 lg:px-24 mt-8 text-center md:text-start lg:text-start'>
                                <p className='font-bold text-2xl md:text-4xl lg:text-4xl text-black'>Discover Chic & Cool Trends at <span className=' text-pink-500'>Impressive Rhythms</span></p>
                                <small className=''>It's time to set a new tempo for his wardrobe. Dive into a world of chic and cool trends that resonate with his dynamic personality. Rediscover style with our exclusive collection, available only at Impressive Rhythms.</small>
                            </p>
                        </div>
                        <div>
                            <img className='w-[100%]' src="https://i.ibb.co/RcdPkK4/3.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;