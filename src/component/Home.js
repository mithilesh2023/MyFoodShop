import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './styles.css';
// import images from './images/img1.jpg'
import { Autoplay, Pagination, Navigation,Grid } from 'swiper/modules';
const Home = () => {
    return (
        <>
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
                className="mySwiper"
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
            <Swiper
                slidesPerView={3}
                grid={{
                    rows: 2,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    )
}
export default Home;