import styles from "./Industries.module.css";

const industries = [
  {
    title: "Industrial Manufacturing",
    description:
      "High-efficiency drives, automated safety systems, and predictive maintenance dashboards tailored to complex production lines.",
    highlight: "34% energy cost reduction"
  },
  {
    title: "Commercial Real Estate",
    description:
      "Smart building management that combines photovoltaic plants with building automation for malls, offices, and hospitality spaces.",
    highlight: "12-month ROI on solar retrofits"
  },
  {
    title: "Public Infrastructure",
    description:
      "Grid-resilient deployments for municipalities and utilities with remote surveillance, power quality analytics, and fast dispatch support.",
    highlight: "24/7 remote monitoring"
  }
];

export function Industries() {
  return (
    <section id="industries" className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Industries</span>
          <h2>Purpose-built solutions for critical sectors</h2>
          <p>
            Iceem designs modular architectures that adapt to your industry&apos;s
            regulation, budget, and growth trajectory—without compromising uptime.
          </p>
        </div>
        <div className={styles.grid}>
          {industries.map((industry) => (
            <article key={industry.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>{industry.title}</h3>
                <span>{industry.highlight}</span>
              </div>
              <p>{industry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
