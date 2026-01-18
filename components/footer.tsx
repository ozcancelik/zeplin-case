import React from "react";
import MessageIcon from "@/public/images/icons/message.svg";
import EmailIcon from "@/public/images/icons/email.svg";
import IdCardIcon from "@/public/images/icons/id-card.svg";
import LocationIcon from "@/public/images/icons/location.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-[#161F3C] text-white flex flex-col items-center justify-center mt-10">
      <div className="container mx-auto">
        <div className="mx-auto flex flex-col md:flex-row gap-3 justify-between pt-15 pb-10 px-5 md:px-0">
          <div className="flex gap-4">
            <div>
              <div className="w-12 h-12 flex justify-center items-center border border-brand-stroke rounded-full">
                <IdCardIcon className="text-white w-6 h-6" />
              </div>
            </div>
            <div>
              <div className="font-light">Dergi Editörü</div>
              <div className="font-bold text-lg">
                Prof. Dr. Elif Başkaya Acar
              </div>
              <Link
                href="mailto:elif@gmail.com"
                className="flex items-center gap-1"
              >
                <span>
                  <EmailIcon className="text-brand-red w-4 h-4" />
                </span>
                <span>elif@gmail.com</span>
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <div className="w-12 h-12 flex justify-center items-center border rounded-full border-brand-stroke">
                <MessageIcon className="text-white w-6 h-6" />
              </div>
            </div>
            <div>
              <div className="font-light">Mail Adresi</div>
              <div className="font-bold text-lg">profuture@gmail.com</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <div className="w-12 h-12 flex justify-center items-center border rounded-full border-brand-stroke">
                <LocationIcon className="text-white w-6 h-6" />
              </div>
            </div>
            <div>
              <div>Profuture Teknoloji Yayınevi</div>
              <div>
                Ahmet Kemal Mahallesi 1245. Cadde No: 10 <br /> Çankaya/Ankara
              </div>
            </div>
          </div>
        </div>
        <hr className="my-2 border-brand-stroke border-0.5" />
        <div className="md:p-10 px-5 pb-5 md:pb-10">
          <p className="italic text-center">
            Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak
            gösterilmeden kullanılamaz. Site içerisinde sunulan bilgiler
            yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin
            kullanımından doğabilecek her türlü sorumluluk kullanıcıya aittir.
            Siteye erişim sağlayan kullanıcılar, bu şartları okumuş, anlamış ve
            kabul etmiş sayılır.
          </p>
        </div>
      </div>
      <div className="copyright w-full bg-brand-red py-3 text-center">
        Profuture Teknoloji - Tüm Hakları Saklıdır. © 2025
      </div>
    </footer>
  );
}

export default Footer;
