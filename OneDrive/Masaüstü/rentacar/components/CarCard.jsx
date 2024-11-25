import Image from "next/image";

const CarCard = ({ car }) => {
  return (
    <div className="flex flex-wrap justify-center space-x-4">
      <div className="max-w-sm bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl">
        <Image
          src={car.image}
          alt={car.name}
          width={400}
          height={300}
          className="object-cover w-full h-64"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">{car.name}</h3>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Araç Yılı: </span>
            {car.year}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Yakıt Türü: </span>
            {car.fuelType}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Vites Türü: </span>
            {car.transmission}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Araç Tipi: </span>
            {car.type}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-gray-800 text-xl font-bold">{car.price} / gün</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Hemen Kirala
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarCard;
