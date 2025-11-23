import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.textCol}>
          <span className={styles.pill}>Integrated Energy & Automation</span>
          <h1 className={styles.title}>
            Powering Tunisia&apos;s Smart Infrastructure With Reliable Energy
            Solutions
          </h1>
          <p className={styles.description}>
            Iceem combines solar, electrical engineering, and automation to help
            industries, commercial facilities, and public institutions reduce
            consumption, embrace sustainability, and gain uninterrupted power.
          </p>
          <div className={styles.actions}>
            <Link href="#contact" className={styles.primaryCta}>
              Get a Quote
            </Link>
            <Link href="#solutions" className={styles.secondaryCta}>
              Explore Solutions
            </Link>
          </div>
          <dl className={styles.highlights}>
            <div>
              <dt>15+ years</dt>
              <dd>Industry expertise across energy and automation projects.</dd>
            </div>
            <div>
              <dt>98% uptime</dt>
              <dd>Average performance across mission-critical deployments.</dd>
            </div>
            <div>
              <dt>Certified team</dt>
              <dd>Cross-functional engineers delivering turnkey execution.</dd>
            </div>
          </dl>
        </div>
        <div className={styles.mediaCol}>
          <div className={styles.mediaCard} aria-hidden="true">
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 90vw"
            />
            <div className={styles.mediaOverlay}>
              <span>Turnkey Solar Plants</span>
              <span>Industrial Automation</span>
              <span>Energy Efficiency Audits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
