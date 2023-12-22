const CropModal = ({ isOpen, onClose, cropImage }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-8 w-[70%] h-[70%] overflow-auto">
        <img
          src={cropImage}
          alt="CropImage"
          className="w-full h-full object-contain"
        />
        <button
          className="absolute top-[8rem] right-[18rem] p-2 bg-gray-800 text-white rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CropModal;
