import Contact from "@/app/contact/page";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div>
      <header className="bg-gray-100 text-gray-700 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-6 px-10">
          <div className="text-3xl font-semibold tracking-wide text-[#b12829] uppercase">
            Cartem
          </div>
          <nav className="flex space-x-10">
            <a
              href="/contact"
              className="text-lg font-medium hover:text-gray-500 transition duration-300"
            >
              İletişim
            </a>
            <a
              href="#"
              className="text-lg font-medium hover:text-gray-500 transition duration-300"
            >
              Ofisler
            </a>
            <a
              href="#"
              className="text-lg font-medium hover:text-gray-500 transition duration-300"
            >
              Hizmetler
            </a>
          </nav>
        </div>
      </header>

      {/* Carousel Section */}
      <div id="carouselExampleIndicators" className="relative w-full overflow-hidden">
        <div className="carousel-inner relative w-full overflow-hidden h-[400px]">
          {/* Carousel Items */}
          <div className="carousel-item active block w-full h-full">
            <Image src="/assets/renault-clio.jpg" alt="First Slide" layout="fill" objectFit="cover" />
          </div>
          <div className="carousel-item block w-full h-full">
            <Image src="/assets/renault-clio.jpg" alt="Second Slide" layout="fill" objectFit="cover" />
          </div>
          <div className="carousel-item block w-full h-full">
            <Image src="/assets/fiat-egea.jpg" alt="Third Slide" layout="fill" objectFit="cover" />
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center p-4 bg-opacity-50 text-black hover:bg-opacity-75 transition"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon bg-dark opacity-75" aria-hidden="true"></span>
          <span className="sr-only">Önceki</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center p-4 bg-opacity-50 text-black hover:bg-opacity-75 transition"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon bg-dark opacity-75" aria-hidden="true"></span>
          <span className="sr-only">Sonraki</span>
        </button>
      </div>
    </div>
  );
}
