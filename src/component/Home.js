import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './styles.css';
import { NavLink } from 'react-router-dom';
// import images from './images/img1.jpg'
import { Autoplay, Pagination, Navigation,Grid, Mousewheel, Keyboard  } from 'swiper/modules';
const Home = () => {
    return (
        <div div className='App'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper1"
            >
                <SwiperSlide><img src="./images/img1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/img2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/img3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/img4.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/img5.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/img6.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/img7.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/img8.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/img9.jpg" alt="" /></SwiperSlide>
            </Swiper>

           <p id='our_products'>Our Products</p>
            <Swiper
                slidesPerView={3}
                grid={{
                    rows: 2,
                }}
                mousewheel={true}
                keyboard={true}
                // cssMode={true}
                spaceBetween={20}
                centeredSlides={true}
                navigation={true}
                pagination={{clickable: true}}
                modules={[Grid, Pagination,Navigation,Mousewheel, Keyboard]}
                id="mySwiper2"
            >
                <SwiperSlide className='MyProducts'>
                    <NavLink to="/fruit">
                       <img src="http://media-cdn.list.ly/production/198635/headline.jpeg?ver=7800593705" id="fruit" alt="" />
                    </NavLink>
                </SwiperSlide>

                <SwiperSlide className='MyProducts'>
                <NavLink to="/vegitable">
                       <img src="http://content.kens5.com/photo/2017/10/22/vegetables_1508727313637_11456014_ver1.0.jpg" id=''  alt="" />
                    </NavLink>
                </SwiperSlide>

                <SwiperSlide className='MyProducts'>
                <NavLink to="/spices">
                       <img src="https://naturalon.com/wp-content/uploads/2015/12/bigstock-Herbs-And-Spices-84414386.jpg" id=''  alt="" />
                    </NavLink>
                </SwiperSlide>

                <SwiperSlide className='MyProducts'>
                 <NavLink to="/pluses">
                       <img src="https://www.simandharenterprise.com/wp-content/uploads/2018/06/pulses-3.png" id=''  alt="" />
                    </NavLink>
                </SwiperSlide>

                 <SwiperSlide className='MyProducts'>
                 <NavLink to="/cookies">
                       <img src="https://handletheheat.com/wp-content/uploads/2018/02/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9.jpg" id=''  alt="" />
                    </NavLink>
                </SwiperSlide>

                 <SwiperSlide className='MyProducts'>
                 <NavLink to="/oil">
                       <img src="https://imgusr.tradekey.com/p-138363-20060310082852/canola-cooking-oil.jpg" id=''  alt="" />
                    </NavLink>
                </SwiperSlide>

                <SwiperSlide className='MyProducts'>
                 <NavLink to="/oil">
                       <img src="https://imgusr.tradekey.com/p-138363-20060310082852/canola-cooking-oil.jpg" id=''  alt="" />
                    </NavLink>
                </SwiperSlide>

                <SwiperSlide className='MyProducts'>
                 <NavLink to="/oil">
                       <img src="https://imgusr.tradekey.com/p-138363-20060310082852/canola-cooking-oil.jpg" id=''  alt="" />
                    </NavLink>
                </SwiperSlide>

                <SwiperSlide className='MyProducts'>
                 <NavLink to="/oil">
                       <img src="https://imgusr.tradekey.com/p-138363-20060310082852/canola-cooking-oil.jpg" id=''  alt="" />
                    </NavLink>
                </SwiperSlide>

                <SwiperSlide className='MyProducts'>
                 <NavLink to="/oil">
                       <img src="https://imgusr.tradekey.com/p-138363-20060310082852/canola-cooking-oil.jpg" id=''  alt="" />
                    </NavLink>
                </SwiperSlide>

                <SwiperSlide className='MyProducts'>
                 <NavLink to="/oil">
                       <img src="https://imgusr.tradekey.com/p-138363-20060310082852/canola-cooking-oil.jpg" id=''  alt="" />
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide className='MyProducts'>
                 <NavLink to="/oil">
                       <img src="https://imgusr.tradekey.com/p-138363-20060310082852/canola-cooking-oil.jpg" id=''  alt="" />
                    </NavLink>
                </SwiperSlide>

                {/* <SwiperSlide className='MyProducts'>Slide 6</SwiperSlide>
                <SwiperSlide className='MyProducts'>Slide 7</SwiperSlide>
                <SwiperSlide className='MyProducts'>Slide 8</SwiperSlide>
                <SwiperSlide className='MyProducts'>Slide 9</SwiperSlide> */}
            </Swiper>
        </div>
    )
}
export default Home;