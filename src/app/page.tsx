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
      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <div>
            <h1 className="heroTitle">Welcome to ShopEase</h1>
            <p className="heroSubtitle">
              Discover amazing products at unbeatable prices
            </p>
            <Link href="/products">
              <button className="heroButton">Shop Now</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="featuredProductsTitle">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="featuredProductCard">
              <div className="featuredProductImageContainer">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="featuredProductInfo">
                <h3 className="featuredProductName">{product.name}</h3>
                <p className="featuredProductPrice">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="categorySection">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="categorySectionTitle">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div key={category.name} className="categoryCard">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  style={{ objectFit: 'cover' }}
                />
                <div className="categoryImageOverlay">
                  <h3 className="categoryCardText">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
