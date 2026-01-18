"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import PdfIcon from "@/public/images/icons/pdf.svg";
import CiltIcon from "@/public/images/icons/cilt.svg";
import NumberIcon from "@/public/images/icons/number.svg";
import CalenderIcon from "@/public/images/icons/calendar.svg";
import EyeIcon from "@/public/images/icons/eye.svg";
import DownloadIcon from "@/public/images/icons/download.svg";
import RightIcon from "@/public/images/icons/right.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "./ui/button";
const issuesList = [
  {
    id: 1,
    title: "Teknoloji ve Dijital Dergisi",
    image: "/images/issue-1.png",
    cilt: "4",
    sayi: "2",
    tarih: "Haziran 2025",
    fileType: "pdf",
    issueType: "Dergi",
    isNew: true,
  },
  {
    id: 2,
    title: "Teknoloji ve Dijital Dergisi",
    image: "/images/issue-1.png",
    cilt: "3",
    sayi: "1",
    tarih: "Mayıs 2025",
    fileType: "pdf",
    issueType: "Dergi",
    isNew: true,
  },
  {
    id: 3,
    title: "Teknoloji ve Dijital Dergisi",
    image: "/images/issue-1.png",
    cilt: "2",
    sayi: "4",
    tarih: "Nisan 2025",
    fileType: "pdf",
    issueType: "Dergi",
    isNew: true,
  },
  {
    id: 4,
    title: "Teknoloji ve Dijital Dergisi",
    image: "/images/issue-1.png",
    cilt: "1",
    sayi: "3",
    tarih: "Mart 2025",
    fileType: "pdf",
    issueType: "Dergi",
    isNew: true,
  },
];

function Issues() {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="mt-10 mb-30 relative container mx-auto px-5 md:px-0">
      <div className="flex mb-5">
        <div>
          <h5>Sayılar</h5>
          <h2>Dergiler</h2>
        </div>
        <div id="swiper-navigation" className="flex gap-2 mt-auto ml-5">
          <div
            ref={(node) => setPrevEl(node)}
            className={`cursor-pointer ${
              isBeginning ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Button className="rounded-2xl pointer-events-none bg-brand-white h-10 w-10">
              <RightIcon className="inline-block w-3! h-3! text-brand-blue rotate-180" />
            </Button>
          </div>
          <div
            ref={(node) => setNextEl(node)}
            className={`cursor-pointer ${
              isEnd ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Button className="rounded-2xl pointer-events-none bg-brand-white h-10 w-10">
              <RightIcon className="inline-block  w-3! h-3! text-brand-blue" />
            </Button>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ prevEl, nextEl }}
        onSlideChange={handleSlideChange}
        onSwiper={handleSlideChange}
        speed={3000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
        }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full h-full"
      >
        {issuesList.map((issue) => (
          <SwiperSlide key={issue.id} className="relative w-full h-full">
            <div className="flex border border-brand-stroke-2 rounded-lg p-5">
              <div className="w-1/3 relative">
                <Image
                  src={issue.image}
                  alt={issue.title}
                  fill
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="w-2/3 flex items-center ">
                <div className="relative z-10 flex flex-col justify-center h-full ">
                  <div>
                    <div>
                      <PdfIcon className="inline-block w-4 h-5 text-brand-gray mr-2" />
                    </div>
                    {issue.isNew && (
                      <div className="absolute px-3 py-1 rounded-full text-xs right-0 top-0 bg-brand-cyan text-white">
                        YENİ
                      </div>
                    )}
                    <div className="p-2 text-xs bg-brand-white rounded-lg inline-block">
                      {issue.issueType}
                    </div>
                    <h2 className="text-brand-dark-blue! mt-2 mb-4">
                      {issue.title}
                    </h2>
                  </div>

                  <div className="flex justify-between w-full align-center">
                    <div className="w-1/2">
                      <CiltIcon className="inline-block mr-2 text-brand-black w-4 h-4" />
                      Cilt: <strong>{issue.cilt}</strong>
                    </div>
                    <div className="w-1/2">
                      <NumberIcon className="inline-block mr-2 text-brand-black w-4 h-4" />
                      Sayı:
                      <strong>{issue.sayi} </strong>
                    </div>
                  </div>
                  <div className="flex align-center mt-2">
                    <CalenderIcon className="inline-block mr-2 text-brand-black w-4 h-4" />
                    <strong> {issue.tarih}</strong>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Link
                      href="#"
                      className="inline-flex items-center group justify-center  text-white bg-brand-blue  w-12 h-12 mt-4 rounded-full hover:bg-brand-midnight  hover:text-white transition-all duration-200"
                    >
                      <EyeIcon className="inline-block w-4 h-4 text-white group-hover:text-white transition-all duration-200" />
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center border border-brand-stroke text-white bg-white w-12 h-12 mt-4 rounded-full hover:bg-brand-midnight hover:border-brand-midnight hover:text-white transition-all duration-200 group"
                    >
                      <DownloadIcon className="inline-block w-4 h-4 text-brand-black group-hover:text-white transition-all duration-200" />
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center border border-brand-stroke text-white bg-white w-12 h-12 mt-4 rounded-full hover:bg-brand-midnight hover:border-brand-midnight hover:text-white transition-all duration-200 group"
                    >
                      <RightIcon className="inline-block w-4 h-4 text-brand-black group-hover:text-white transition-all duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Issues;
