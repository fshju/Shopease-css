"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css"; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {
      name: formData.name ? "" : "Name is required.",
      email: /\S+@\S+\.\S+/.test(formData.email)
        ? ""
        : "Please enter a valid email.",
      message: formData.message ? "" : "Message cannot be empty.",
    };

    setErrors(newErrors);

   
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log("Form submitted successfully:", formData);
    
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className={styles.contactContainer}>
      <section>
        <h1 className={styles.contactHeading}>Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className={styles.contactForm}>
            <h2>Send us a message</h2>
            <p>
              Have any questions? We did love to hear from you. Fill out the form
              below, and we will get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className={styles.formInput}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">{errors.name}</p>
                )}
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
                  className={styles.formInput}
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
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
                  className={styles.formInput}
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && (
                  <p className="text-red-600 text-sm">{errors.message}</p>
                )}
              </div>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className={styles.contactDetails}>
            <h2>Our Contact Details</h2>
            <p>
              Feel free to reach out to us through any of the following
              channels.
            </p>
            <ul className="space-y-4">
              <p>Phone: +1 (123) 456-7890 </p>
              <p>Email: support@shopease.com </p>
              <p>Address: 123 ShopEase Ave, Cityville, USA </p>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
