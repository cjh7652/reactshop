import React,{useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../components/SectionTitle";
import "swiper/css";
import 'swiper/css/navigation';
import data from '../data/data';
import {  Navigation } from 'swiper/modules';

const Main = () => {
	let [shopping] =useState(data) 
    return (
        <main>
			<section className="mainSlide">
				<h2 className="ir_so">메인 슬라이드</h2>
				<Swiper navigation={true} modules={[Navigation]} className="mainSwiper">
					<SwiperSlide><img src={process.env.PUBLIC_URL + "/img/img01.jpg" } alt="" /></SwiperSlide>
					<SwiperSlide><img src={process.env.PUBLIC_URL + "/img/img02.jpg" } alt="" /></SwiperSlide>
					<SwiperSlide><img src={process.env.PUBLIC_URL + "/img/img03.jpg" } alt="" /></SwiperSlide>
					<SwiperSlide><img src={process.env.PUBLIC_URL + "/img/img04.jpg" } alt="" /></SwiperSlide>
				</Swiper>
			</section>
			<SectionTitle></SectionTitle>
			<section className="summe">
				<h2>지금여름🌿</h2>
				<h3>설레는 여름</h3>

				<div className="summerLists">
					<ul>
						<li>
							<img src={process.env.PUBLIC_URL + shopping[0].img} alt="" />
							<div className="textbox">
								<div className="priceWrap">
									<span className="sale">{shopping[0].sale}</span>
									<span className="price">{shopping[0].price}</span>
									<span className="discount">{shopping[0].discount}</span>
								</div>
								<div className="title">{shopping[0].title}</div>
								<div className="descript">{shopping[0].descript}</div>
								<div className="company">{shopping[0].company}</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</main>
    );
};

export default Main;