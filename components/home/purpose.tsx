import React from "react";
import Link from "next/link";
import RightIcon from "@/public/images/icons/right.svg";

function Purpose() {
  return (
    <div className="container mx-auto py-10 px-5 md:px-0">
      <div className="md:w-1/3 w-full">
        <h5>Dergi Amacı ve Kapsamı</h5>
        <h2>Profuture Teknoloji Dergisi</h2>
        <div className="mb-10 mt-2">
          <p style={{ textAlign: "justify" }}>
            Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan;
            teknoloji, inovasyon, dijital dönüşüm ve geleceğin üretim modelleri
            ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir
            araya getiren, uluslararası hakemli ve açık erişimli bir akademik
            yayındır.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex rounded-full border py-4 px-6 mt-3 w-37.5 group hover:bg-brand-midnight hover:text-white transition-all duration-200 items-center justify-center"
        >
          <span>Detay</span>
          <span className="ml-auto">
            <RightIcon className="relative inline-block text-black w-4 h-4 left-0 group-hover:text-white transition-all duration-200 group-hover:left-2" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Purpose;
