import React from "react";
import Link from "next/link";
import Image from "next/image";
import RightIcon from "@/public/images/icons/right.svg";
import PromotionIcon from "@/public/images/icons/promotion.svg";

export default function SubmitArticle() {
  return (
    <div
      className="relative flex items-center md:h-100 container mx-auto rounded-2xl  justify-center mb-33 background-contain md:background-cover"
      style={{
        background: "url('/images/submit-article-bg.png')",
      }}
    >
      <div className="md:absolute h-full left-0 top-0 w-md">
        <Image
          src="/images/submit-article-left.png"
          alt="overlay"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="md:pr-100 md:pl-100 text-center">
        <div>
          <PromotionIcon className="inline-block w-12 h-12 mb-4 text-brand-red -rotate-25" />
        </div>
        <h5>Makale Çağrısı</h5>
        <h2 className="mb-4">Türkiye Ulusal Dijital Veri ve Altyapıları</h2>
        <p className="mb-4">
          Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve
          özel sektörde teknoloji altyapıları, yapay zekâ uygulamaları, büyük
          veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm
          odaklı özgün, güncel ve disiplinlerarası akademik çalışmalar
          değerlendirilecektir.
        </p>
        <Link
          href="#"
          className="inline-block group bg-brand-red text-white py-4 px-6 rounded-full mt-4 hover:bg-[#9D0006] transition-all duration-200"
        >
          Makale Gönder
          <span className="ml-6">
            <RightIcon className="relative inline-block text-white w-4 h-4 left-0 group-hover:left-2 transition-all duration-200" />
          </span>
        </Link>
      </div>
      <div className="md:absolute right-14 w-80 h-120 bottom-0">
        <Image
          src="/images/submit-article-right.png"
          alt="overlay"
          fill
          className="object-contain "
        />
      </div>
    </div>
  );
}
