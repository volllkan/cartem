const Footer = () => {
  return (
    <div>
      <footer className="bg-white text-gray-700 py-12 border-t-4 border-b-4 border-[#cf5252] shadow-inner">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          {/* Ofis Bilgileri */}
          <div className="p-8 rounded-lg shadow-md bg-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-[#b12829] mb-4">
              Ofis Bilgileri
            </h3>
            <p className="text-gray-600 text-sm">
              Merkez Ofis: Kartal, İstanbul
            </p>
            <p className="text-gray-600 text-sm">
              Ankara Ofis: Çankaya, Ankara
            </p>
            <p className="text-gray-600 text-sm">İzmir Ofis: Konak, İzmir</p>
          </div>

          {/* Konum Bilgileri */}
          <div className="p-8 rounded-lg shadow-md bg-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-[#b12829] mb-4">
              Konum Bilgileri
            </h3>
            <p className="text-gray-600 text-sm">
              Adres: 1234 Cadde, No: 56, Şehir, Türkiye
            </p>
            <div className="overflow-hidden rounded-lg shadow-sm mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* İletişim */}
          <div className="p-8 rounded-lg shadow-md bg-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-[#b12829] mb-4">
              İletişim
            </h3>
            <p className="text-gray-600 text-sm">Telefon: +90 212 555 55 55</p>
            <p className="text-gray-600 text-sm">Email: info@cartem.com</p>
            <p className="text-gray-600 text-sm">Destek Hattı: 444 0 123</p>
          </div>
        </div>

        {/* Alt İmza Kısmı */}
        <div className="text-center text-sm text-gray-500 mt-10 pt-6 border-t border-gray-300">
          <p>© 2024 Cartem. Tüm hakları saklıdır.</p>
          <p>
            Site tasarımı:{" "}
            <span className="font-semibold text-[#b12829]">Sizin Adınız</span>
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
