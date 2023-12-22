import { useState } from "react";
import CropModal from "./CropModal";
import "../../src/index.css";

const Card = ({ crop_name, thumbnails }) => {
  const [selectedCropImage, setSelectedCropImage] = useState(null);

  const openModal = (image) => {
    setSelectedCropImage(image);
  };

  const closeModal = () => {
    setSelectedCropImage(null);
  };
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 m-4">
      <div className="bg-white crop-card rounded-md overflow-hidden">
        <img
          src={thumbnails[0].image}
          alt={thumbnails[0].detail}
          className="w-full h-64 object-contain"
          onClick={() => openModal(thumbnails[0].image)}
        />
        <div className="p-4">
          <h1 className="text-center text-lg font-bold mb-2">{crop_name}</h1>
          <p className="text-center text-gray-600">5 Stars</p>
          <p className="text-center text-gray-600">1000 ratings</p>
          <p className="text-center text-gray-600">Special Offer</p>
        </div>
      </div>
      <CropModal
        isOpen={selectedCropImage !== null}
        onClose={closeModal}
        cropImage={selectedCropImage}
      />
    </div>
  );
};

export default Card;
