import Link from "next/link";
import styles from "./Footer.module.css";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/iceem-tn/" },
  { label: "Facebook", href: "https://www.facebook.com/iceem.tn" },
  { label: "YouTube", href: "https://www.youtube.com/@iceem" }
];

export function Footer() {
  return (
    <footer className={styles.wrapper} id="about">
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>Iceem.tn</span>
          <p>
            Iceem integrates renewable energy, automation, and smart monitoring to
            accelerate the energy transition for Tunisian industries and public
            infrastructures.
          </p>
        </div>
        <div className={styles.details}>
          <div>
            <span className={styles.heading}>Contact</span>
            <ul className={styles.list}>
              <li>
                <Link href="mailto:contact@iceem.tn" className={styles.link}>
                  contact@iceem.tn
                </Link>
              </li>
              <li>
                <Link href="tel:+21671342567" className={styles.link}>
                  +216 71 342 567
                </Link>
              </li>
              <li>Centre Urbain Nord, Tunis, Tunisia</li>
            </ul>
          </div>
          <div>
            <span className={styles.heading}>Follow us</span>
            <ul className={styles.list}>
              {socials.map((social) => (
                <li key={social.label}>
                  <Link href={social.href} className={styles.link}>
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Iceem.tn. All rights reserved.</p>
      </div>
    </footer>
  );
}
