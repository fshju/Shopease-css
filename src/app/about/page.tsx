import Image from "next/image";
import styles from './About.module.css';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className={`${styles.hero}`}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>About ShopEase</h1>
          <p className={styles.heroDescription}>
            Your trusted destination for premium products and seamless shopping experiences.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className={styles.whoWeAre}>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className={styles.whoWeAreText}>
            At ShopEase, we believe in making online shopping easy,
            accessible, and enjoyable for everyone. Founded with a mission to
            provide high-quality products at unbeatable prices, we have grown
            into a trusted name in e-commerce.
          </p>
          <p className={styles.whoWeAreText}>
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
            className={styles.whoWeAreImage}
          />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className={styles.mission}>
        <div className="max-w-7xl mx-auto px-4">
          <div className={styles.missionText}>
            <h2 className={styles.missionTextTitle}>Our Mission</h2>
            <p className={styles.missionTextDescription}>
              To redefine the online shopping experience by offering
              unparalleled product quality, innovative solutions, and
              exceptional customer care.
            </p>
          </div>
          <div className={styles.missionCards}>
            <div className={styles.missionCard}>
              <Image
                src="/watches.jpg"
                alt="High-Quality Products"
                layout="responsive"
                width={400}
                height={300}
                style={{ objectFit: 'cover' }} 
                className={styles.missionCardImage}
              />
              <h3 className={styles.missionCardTitle}>High-Quality Products</h3>
              <p className={styles.missionCardText}>
                We handpick every product to ensure it meets the highest
                standards of quality and durability.
              </p>
            </div>
            <div className={styles.missionCard}>
              <Image
                src="/beauty.PNG"
                alt="Customer-Centric Approach"
                layout="responsive"
                width={400}
                height={300}
                style={{ objectFit: 'cover' }} 
                className={styles.missionCardImage}
              />
              <h3 className={styles.missionCardTitle}>Customer-Centric Approach</h3>
              <p className={styles.missionCardText}>
                Our customers are at the heart of everything we do. Your
                satisfaction is our top priority.
              </p>
            </div>
            <div className={styles.missionCard}>
              <Image
                src="/shop video game img.jpg"
                alt="Innovative Solutions"
                layout="responsive"
                width={400}
                height={300}
                style={{ objectFit: 'cover' }} 
                className={styles.missionCardImage}
              />
              <h3 className={styles.missionCardTitle}>Innovative Solutions</h3>
              <p className={styles.missionCardText}>
                We constantly innovate to provide you with a seamless and
                enjoyable shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Journey Section */}
      <section className={styles.joinJourney}>
        <div className="max-w-7xl mx-auto px-4">
          <div className={styles.joinJourneyCard}>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className={styles.joinJourneyTitle}>Join Our Journey</h2>
              <p className={styles.joinJourneyText}>
                Be part of our mission to revolutionize the e-commerce world.
                Shop with us and experience the difference.
              </p>
              <a
                href="/contact"
                className={styles.joinJourneyButton}
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
