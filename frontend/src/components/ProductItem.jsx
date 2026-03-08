import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, image, images, name, price }) => {
  const { currency, navigate } = useContext(ShopContext);
  const imageList = Array.isArray(images)
    ? images
    : Array.isArray(image)
      ? image
      : image
        ? [image]
        : [];
  const displayImage = imageList[0] || '';

  return (
    <div onClick={() => navigate(`/product/${id}`)} className="cursor-pointer">
      <div className="overflow-hidden bg-slate-200">
        {displayImage ? (
          <img className="transition hover:scale-110 w-full h-64 object-cover" src={displayImage} alt={name} />
        ) : (
          <div className="w-full h-64 bg-slate-200" aria-hidden="true" />
        )}
      </div>
      <p className="pt-3 pb-1 text-sm text-gray-700">{name}</p>
      <p className="text-sm font-medium text-gray-700">
        {currency}
        {price}
      </p>
    </div>
  );
};

export default ProductItem;