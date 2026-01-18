"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@/public/images/icons/home.svg";
import MessageIcon from "@/public/images/icons/message.svg";
import KurulIcon from "@/public/images/icons/kurul.svg";
import AuthorIcon from "@/public/images/icons/author.svg";
import SearchIcon from "@/public/images/icons/search.svg";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="w-full flex flex-col-reverse lg:flex-row fixed lg:bg-white bg-brand-blue z-10 top-0">
      <div className="relative py-5 lg:-mt-4 z-1 overflow-hidden lg:pr-5 lg:w-100  bg-brand-blue lg:border-12 lg:border-b-0 lg:border-l-0 lg:border-white lg:rounded-tr-[90px] ">
        <Link href="/" className="outline-0 ">
          <Image
            src="/images/logo.png"
            alt="Profuture"
            width={250}
            height={90}
            className="lg:mx-auto ml-5 lg:ml-0"
          />
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden absolute top-10 right-4 z-20 flex flex-col gap-1.5 w-8 h-8 justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block h-0.5 bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-0.5 bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>
      <div className="hidden lg:flex sub-header bg-brand-midnight h-11 w-full lg:absolute z-0 lg:pl-82 ">
        <Link
          href="mailto:profuture@gmail.com"
          title=""
          className="flex gap-2 text-white items-center"
        >
          <MessageIcon className="w-6 h-6 text-white" />
          <span>profuture@gmail.com</span>
        </Link>
        <div className="ml-auto text-white flex gap-4 pr-15 items-center ">
          <span>
            ISSN: <strong>345-255</strong>
          </span>
          <span>
            Başlangıç <strong>2025</strong>
          </span>
          <span>
            Periyot: <strong>Yılda 2 Sayı</strong>
          </span>
        </div>
      </div>
      <div className="menu w-full items-center pt-11 hidden lg:flex">
        <Link href="/">
          <HomeIcon className="w-6 h-6 ml-4 text-brand-green" />
        </Link>
        <nav className="ml-auto">
          <ul className="flex 2xl:gap-6 xl:gap-2 lg:gap-2 p-4">
            <li></li>
            <li>
              <Link href="#">Amaç ve Kapsam</Link>
            </li>
            <li>
              <Link href="#">Etik İlkeler ve Yayın Politikası</Link>
            </li>
            <li>
              <Link href="#">Makale Çağrıları</Link>
            </li>
            <li>
              <Link href="#">Sayılar</Link>
            </li>
            <li>
              <Link href="#">İletişim</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center pr-10">
          <Link
            href="/editorial-board"
            className="flex items-center gap-2 mr-1 bg-brand-blue px-4 py-3 rounded-4xl text-white hover:bg-[#0A1742] transition-all duration-200"
          >
            <KurulIcon className="text-white w-4 h-4" />
            Dergi Kurulu
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 mr-1 bg-brand-green px-4 py-3 rounded-4xl text-white hover:bg-[#2B3016] transition-all duration-200"
          >
            <AuthorIcon className="text-white w-4 h-4" />
            Yazar Rehberi
          </Link>
          <div className="border rounded-full w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-brand-white transition-all duration-200">
            <SearchIcon className="text-brand-black w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-30 bg-white z-50 overflow-y-auto">
          <nav className="p-6">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <HomeIcon className="w-6 h-6 text-brand-green" />
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block text-lg py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Amaç ve Kapsam
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block text-lg py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Etik İlkeler ve Yayın Politikası
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block text-lg py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Makale Çağrıları
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block text-lg py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sayılar
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block text-lg py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  İletişim
                </Link>
              </li>
              <li className="pt-4 border-t">
                <Link
                  href="/editorial-board"
                  className="flex items-center gap-2 bg-brand-blue px-4 py-3 rounded-4xl text-white justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <KurulIcon className="text-white w-4 h-4" />
                  Dergi Kurulu
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 bg-brand-green px-4 py-3 rounded-4xl text-white justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <AuthorIcon className="text-white w-4 h-4" />
                  Yazar Rehberi
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
