import Link from "next/link";
import styles from "./CallToAction.module.css";

export function CallToAction() {
  return (
    <section id="contact" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <h2>Ready to design your resilient energy infrastructure?</h2>
          <p>
            Our engineers will review your objectives, audit your current setup,
            and deliver a tailored roadmap within five business days.
          </p>
        </div>
        <Link href="mailto:contact@iceem.tn" className={styles.button}>
          Contact Us
        </Link>
      </div>
    </section>
  );
}
