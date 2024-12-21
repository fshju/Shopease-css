import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const categories = [
    { name: "Electronics", image: "/electronic.jpg" },
    { name: "Fashion", image: "/fashion.jpg" },
    { name: "Home", image: "/home.png" },
    { name: "Sports", image: "/sport.jpg" },
  ];

  const featuredProducts = [
    { id: 1, name: "Product 1", price: "$20", image: "/product1.jpg" },
    { id: 2, name: "Product 2", price: "$35", image: "/product2.jpg" },
    { id: 3, name: "Product 3", price: "$50", image: "/product3.jpg" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-indigo-500 to-purple-600 pt-24">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to ShopEase
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover amazing products at unbeatable prices
            </p>
            <Link href="/products">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative h-60 w-full">
                {" "}
                {/* Fixed height */}
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative h-40 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  style={{ objectFit: 'cover' }} 
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
