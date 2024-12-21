"use client"
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  category: string;
}

const allCategories = ["All", "Electronics", "Fashion", "Home", "Sports", "Health", "Safety", "Home decor"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(500);

  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      description: "Wireless Bluetooth headphones with noise cancellation",
      price: 199.99,
      oldPrice: 249.99,
      discount: 20,
      image: "/headphone.jpg",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Fitness tracker with heart rate monitor",
      price: 129.99,
      oldPrice: 159.99,
      discount: 18,
      image: "/swatch.jpg",
      category: "Electronics",
    },
    {
      id: 3,
      name: "Leather Jacket",
      description: "Stylish leather jacket for cold weather",
      price: 249.99,
      oldPrice: 299.99,
      discount: 17,
      image: "/leather.jpg",
      category: "Fashion",
    },
    {
      id: 4,
      name: "Yoga Mat",
      description: "Eco-friendly yoga mat for comfort and support",
      price: 49.99,
      oldPrice: 59.99,
      discount: 16,
      image: "/yogamat.jpg",
      category: "Sports",
    },
    {
      id: 5,
      name: "Cycling Gear",
      description: "Complete gear for cycling enthusiasts",
      price: 89.99,
      oldPrice: 99.99,
      discount: 15,
      image: "/cycle.jpg",
      category: "Sports",
    },
    {
      id: 6,
      name: "Glasses",
      description: "Stylish and protective glasses for health",
      price: 29.99,
      oldPrice: 39.99,
      discount: 18,
      image: "/glasses.jpg",
      category: "Health",
    },
    {
      id: 7,
      name: "Bike Helmet",
      description: "Safe helmet for comfort and support",
      price: 50,
      image: "/product3.jpg",
      category: "Safety",
    },
    {
      id: 8,
      name: "Chirmas Tree",
      description: "Beautiful decorative tree for home",
      price: 35,
      image: "/product2.jpg",
      category: "Home decor",
    },
    {
      id: 9,
      name: "Cricket Kit",
      description: "Complete cricket kit with safe helmet",
      price: 20,
      image: "/product1.jpg",
      category: "Safety",
    },

    {
      id: 10,
      name: "One Plus Charger",
      description: "Mobile charger",
      price: 30.99,
      oldPrice: 45.99,
      discount: 18,
      image: "/electronic4.jpg",
      category: "Home",
    },

    {
      id: 11,
      name: "Airpods pro",
      description: "Airpods base varient",
      price: 60.99,
      oldPrice: 65.99,
      discount: 15,
      image: "/electronic5.jpg",
      category: "Electronics",
    },

    {
      id: 12,
      name: "Massager",
      description: "Massager man and woman",
      price: 50.99,
      oldPrice: 60.99,
      discount: 5,
      image: "/electronic6.jpg",
      category: "Home",
    },

    {
      id: 13,
      name: "Vr Glasees",
      description: "Cinematic shots on Hdr vfx",
      price: 200.99,
      oldPrice: 160.99,
      discount: 18,
      image: "/electronic7.jpg",
      category: "Electronics",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.price <= priceRange
  );

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">All Products</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            {/* Category Filter */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700">Category</h3>
              <ul className="space-y-2">
                {allCategories.map((category) => (
                  <li
                    key={category}
                    className={`cursor-pointer ${
                      selectedCategory === category
                        ? "text-indigo-600 font-bold"
                        : "hover:text-indigo-600"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range Filter */}
            <div>
              <h3 className="font-semibold text-gray-700">Price Range</h3>
              <input
                type="range"
                min="0"
                max="500"
                step="1"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full"
                id="price-range"
              />
              <div className="flex justify-between text-sm mt-2">
                <span>$0</span>
                <span>${priceRange}</span>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

