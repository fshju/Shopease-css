import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col items-center text-center">
      <div className="relative w-full h-40 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          style={{ objectFit: 'cover' }} 
          className="rounded-md"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold">{product.name}</h3>
      <p className="text-sm sm:text-base text-gray-600">
        {product.description}
      </p>
      <div className="flex justify-between items-center mt-4 w-full">
        <span className="text-lg font-bold text-indigo-600">
          ${product.price}
        </span>
        {product.oldPrice && (
          <span className="line-through text-gray-500">
            ${product.oldPrice}
          </span>
        )}
      </div>
      {product.discount && (
        <span className="text-green-600 font-bold">{product.discount}% OFF</span>
      )}
    </div>
  );
}
