"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CiltIcon from "@/public/images/icons/cilt.svg";
import NumberIcon from "@/public/images/icons/number.svg";
import CalenderIcon from "@/public/images/icons/calendar.svg";
import RightIcon from "@/public/images/icons/right.svg";

const slides = [
  {
    id: 1,
    image: "/images/slide-1.png",
    title: "Profuture Teknoloji Dergisi",
    subtitle: "Son Sayı Yayında",
    description:
      "Protufure teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin.",
    cilt: "4",
    sayi: "2",
    tarih: "Haziran 2025",
  },
  {
    id: 2,
    image: "/images/slide-1.png",
    title: "Profuture Teknoloji Dergisi",
    subtitle: "Son Sayı Yayında",
    description:
      "Protufure teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin.",
    cilt: "3",
    sayi: "1",
    tarih: "Mayıs 2025",
  },
];

function MainSlider() {
  return (
    <div className="relative w-full h-150 mt-28">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        speed={3000}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
              {/* If overlay needed */}
              {/* <div className="absolute inset-0 bg-black/30" /> */}
            </div>
            <div className="container mx-auto absolute right-0 left-0 top-0 bottom-0 flex items-center px-5 md:px-0 ">
              <div className="relative md:w-100 z-10 flex flex-col justify-center h-full text-white">
                <div>
                  <h2 className="text-brand-light-blue!">{slide.title}</h2>
                  <h1 className="text-brand-light-blue! mb-4">
                    {slide.subtitle}
                  </h1>
                </div>
                <div>
                  <p className="my-2">{slide.description}</p>
                </div>
                <div className="flex gap-6 w-full mt-4 mb-5">
                  <div>
                    <CiltIcon className="inline-block mr-2 text-white w-4 h-4" />
                    Cilt: <strong>{slide.cilt}</strong>
                  </div>
                  <div>
                    <NumberIcon className="inline-block mr-2 text-white w-4 h-4" />
                    Sayı: <strong>{slide.sayi}</strong>
                  </div>
                  <div>
                    <CalenderIcon className="inline-block mr-2 text-white w-4 h-4" />
                    <strong>{slide.tarih}</strong>
                  </div>
                </div>
                <div>
                  <Link
                    href="#"
                    className="inline-flex bg-brand-blue px-6 h-13.75 mt-4 rounded-full items-center group transition-all duration-200 hover:bg-brand-midnight"
                  >
                    Dergiyi Görüntüle
                    <span className="relative left-0 ml-4 group-hover:left-2 transition-all duration-200">
                      <RightIcon className="inline-block text-white w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute right-2 md:right-10 top-[70%] md:top-1/2 z-1 md:w-150 md:h-150 w-60 h-60 aspect-square pointer-events-none">
        <Image
          src="/images/dergison-1.png"
          alt="overlay"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default MainSlider;
