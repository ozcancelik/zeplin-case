import React from "react";
import Image from "next/image";
import PdfIcon from "@/public/images/icons/pdf.svg";
import PageIcon from "@/public/images/icons/sayfa.svg";
import AuthorIcon from "@/public/images/icons/author.svg";
import EmailIcon from "@/public/images/icons/email.svg";
import DownloadIcon from "@/public/images/icons/download.svg";
import EyeIcon from "@/public/images/icons/eye.svg";
import RightIcon from "@/public/images/icons/right.svg";
import { Button } from "./ui/button";
import Link from "next/link";

export default function LatestArticles() {
  const articles = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row gap-6">
      <div className="md:w-1/3 w-full relative rounded-2xl border-5 border-[#FFD9DA] p-4 h-full flex flex-col">
        <div className="relative">
          <Image
            src="/images/article-01.png"
            alt="Article"
            width={400}
            height={640}
            className="rounded-2xl w-full h-auto"
          />
          <div className="absolute -left-10 p-2 top-1/2  rounded-b-2xl -rotate-90 bg-brand-red text-white font-bold transform -translate-y-1/2">
            Son Sayı
          </div>
        </div>
        <div className="mt-8 flex gap-2 justify-center">
          <Button
            variant="outline"
            size="icon-lg"
            className="rounded-full group hover:bg-brand-midnight hover:text-white transition-all duration-200"
          >
            <DownloadIcon className="inline-block w-4 h-4 text-brand-blue group-hover:text-white transition-all duration-200" />
          </Button>
          <Button
            className="bg-brand-blue text-white rounded-full hover:bg-brand-midnight transition-all duration-200"
            size="lg"
          >
            <EyeIcon className="inline-block w-4 h-4 text-white mr-2" />
            Görüntüle
          </Button>
        </div>
      </div>
      <div className="md:w-2/3 w-full px-5 md:px-0">
        <div className="flex w-full">
          <div>
            <h5>Profuture Teknoloji Dergisi</h5>
            <h2 className="text-brand-red">Güncel Yazılar</h2>
          </div>
          <div className="ml-auto flex items-center">
            <Link
              href="#"
              className="border-brand-stroke border group rounded-full px-6 py-4 hover:bg-brand-midnight hover:text-white inline-flex items-center transition-all duration-200"
            >
              Tümünü Görüntüle
              <RightIcon className="inline-block relative left-0 text-black w-4 h-4 ml-6 group-hover:text-white transition-all duration-200 group-hover:left-2" />
            </Link>
          </div>
        </div>
        {articles.map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border shadow-md border-[#DFE3F1] w-full my-4 p-4 bg-white"
            id={`article-card-${index}`}
          >
            <div className="flex gap-2 mb-2 items-start">
              <div className="p-1 px-3 bg-brand-blue rounded-lg text-xs text-white">
                İklim
              </div>
              <div className="p-1 px-3 bg-brand-white rounded-lg text-xs text-[#112053]">
                Araştırma Makalesi
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row">
              <div className="md:w-2/3 w-full">
                <div className="flex items-center gap-4">
                  <PdfIcon className="inline-block w-4 h-4 text-brand-gray" />
                  <h6 className="text-brand-black font-bold">
                    Türkiye&apos;nin Teknoloji Politikaları ve Döngüsel Ekonomi
                  </h6>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2 mt-2">
                  <div>
                    <PageIcon className="inline-block w-6 h-6 text-brand-black mr-2 bg-[#F0F0F3] rounded-full p-1" />
                    <span className="text-sm">Sayfa: 12-28</span>
                  </div>
                  <div>
                    <AuthorIcon className="inline-block w-6 h-6 text-brand-black mr-2 bg-[#F0F0F3] rounded-full p-1" />
                    <span className="text-sm">
                      Elif Başkaya Acar, Emre Taran, Halil Başar
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 w-full flex gap-2 pr-2 mt-4 md:mt-0">
                <Button
                  variant="outline"
                  size="icon-lg"
                  className="bg-white border border-brand-stroke rounded-full  md:ml-auto group hover:bg-brand-midnight hover:text-white transition-all duration-200"
                >
                  <EmailIcon className="inline-block w-4 h-4 text-brand-blue group-hover:text-white transition-all duration-200" />
                </Button>
                <Button
                  variant="outline"
                  size="icon-lg"
                  className="bg-white border border-brand-stroke rounded-full hover:bg-brand-midnight hover:text-white transition-all duration-200 group"
                >
                  <DownloadIcon className="inline-block w-4 h-4 text-brand-blue group-hover:text-white transition-all duration-200" />
                </Button>
                <Button
                  className="bg-brand-blue text-white rounded-full px-4  hover:bg-brand-midnight transition-all duration-200"
                  size="lg"
                >
                  <EyeIcon className="inline-block w-4 h-4 text-white" />
                  Görüntüle
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
