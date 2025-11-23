import Link from "next/link";
import styles from "./Header.module.css";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" }
];

export function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="/" aria-label="Iceem.tn home" className={styles.logo}>
          <span className={styles.logoIcon} aria-hidden="true">
            ICE
          </span>
          <span className={styles.logoText}>Iceem.tn</span>
        </Link>
        <nav aria-label="Primary" className={styles.nav}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={styles.navItem}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="#contact" className={styles.cta}>
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
