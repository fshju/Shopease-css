export default function Contact() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12 pt-24 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send us a message
            </h2>
            <p className="text-gray-600 mb-6">
              Have any questions? We did love to hear from you. Fill out the form
              below, and we will get back to you as soon as possible.
            </p>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:ring focus:ring-indigo-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:ring focus:ring-indigo-200"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:ring focus:ring-indigo-200"
                  rows={5}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Contact Details
            </h2>
            <p className="text-gray-600 mb-4">
              Feel free to reach out to us through any of the following
              channels.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <span className="bg-indigo-600 text-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16.72 12.57a4.5 4.5 0 01-6.36 0L3.05 8.04a2.252 2.252 0 00-3.04.8v6.32a2.25 2.25 0 001.75 2.15l4.53 1.23a9.74 9.74 0 009.2-2.46l5.65 5.66a2.25 2.25 0 003.18 0 2.25 2.25 0 000-3.18l-5.65-5.66a9.74 9.74 0 00-2.46-9.2l-1.23-4.53A2.25 2.25 0 0014.4 0H8.08a2.252 2.252 0 00-2.03 2.78l1.23 4.53a9.74 9.74 0 002.46 9.2l5.66-5.65a2.25 2.25 0 013.18 0 2.25 2.25 0 010 3.18l-5.66 5.65a9.74 9.74 0 009.2-2.46l4.53-1.23a2.252 2.252 0 002.78-2.03v-6.32a2.25 2.25 0 00-.8-3.04l-4.53 1.23a9.74 9.74 0 00-9.2 2.46l-5.65-5.66a2.25 2.25 0 00-3.18 0 2.25 2.25 0 000 3.18l5.65 5.66a9.74 9.74 0 009.2-2.46z"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 font-medium">
                  Phone: +1 (123) 456-7890
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="bg-indigo-600 text-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8h2a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2v-6a2 2 0 012-2zM21 8h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2v-6a2 2 0 00-2-2z"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 font-medium">
                  Email: support@shopease.com
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="bg-indigo-600 text-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 22.428c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zM12 14v-2m0 0V8m0 4h-4m4 0h4"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 font-medium">
                  Address: 123 ShopEase Ave, Cityville, USA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
