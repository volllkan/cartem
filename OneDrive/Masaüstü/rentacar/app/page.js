import CarCard from "@/components/CarCard";
import Image from "next/image";



const cars  =[
  {
    id: 1,
    name: "Fiat Egea",
    price: "1000 TL",
    image: "/assets/fiat-egea.jpg",  // Görsel yolu
    fuelType: "Benzin",              // Yakıt türü
    transmission: "Otomatik",        // Vites türü
    type: "Sedan",                   // Araç tipi
    year: 2022                       // Araç yılı
  },
  {
    id: 2,
    name: "Volkswagen Passat",
    price: "1200 TL",
    image: "/assets/volkswagen-passat.jpg",
    fuelType: "Dizel",
    transmission: "Manuel",
    type: "Sedan",
    year: 2020
  },
  {
    id: 3,
    name: "Renault Clio",
    price: "900 TL",
    image: "/assets/renault-clio.jpg",
    fuelType: "LPG",
    transmission: "Yarı Otomatik",
    type: "Hatchback",
    year: "2021",
  }
]


export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-center"> Arabalar</h2>
      <div className="flex flex-wrap justify-center space-x-20"> 
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ) )}
      </div>

    </div>
  );
}
