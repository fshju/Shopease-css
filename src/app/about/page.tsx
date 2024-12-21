import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 pt-24">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            About ShopEase
          </h1>
          <p className="text-lg sm:text-xl text-center">
            Your trusted destination for premium products and seamless shopping
            experiences.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              At ShopEase, we believe in making online shopping easy,
              accessible, and enjoyable for everyone. Founded with a mission to
              provide high-quality products at unbeatable prices, we have grown
              into a trusted name in e-commerce.
            </p>
            <p className="text-gray-600">
              From premium electronics to stylish apparel, our extensive range
              of products caters to all your needs. Our commitment to
              exceptional customer service sets us apart, ensuring a seamless
              shopping journey from start to finish.
            </p>
          </div>
          <div>
            <Image
              src="/about-hero.png"
              alt="Our Team"
              layout="responsive"
              width={500}
              height={400}
              style={{ objectFit: 'cover' }} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              To redefine the online shopping experience by offering
              unparalleled product quality, innovative solutions, and
              exceptional customer care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/watches.jpg"
                alt="High-Quality Products"
                layout="responsive"
                width={400}
                height={300}
                style={{ objectFit: 'cover' }} 
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                High-Quality Products
              </h3>
              <p className="text-gray-600">
                We handpick every product to ensure it meets the highest
                standards of quality and durability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/beauty.PNG"
                alt="Customer-Centric Approach"
                layout="responsive"
                width={400}
                height={300}
                style={{ objectFit: 'cover' }} 
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Customer-Centric Approach
              </h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. Your
                satisfaction is our top priority.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/shop video game img.jpg"
                alt="Innovative Solutions"
                layout="responsive"
                width={400}
                height={300}
                style={{ objectFit: 'cover' }} 
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Innovative Solutions
              </h3>
              <p className="text-gray-600">
                We constantly innovate to provide you with a seamless and
                enjoyable shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Journey Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-indigo-600 text-white rounded-xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
              <p className="mb-8">
                Be part of our mission to revolutionize the e-commerce world.
                Shop with us and experience the difference.
              </p>
              <a
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
