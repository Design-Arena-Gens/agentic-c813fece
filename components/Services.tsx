import styles from "./Services.module.css";

const services = [
  {
    title: "Photovoltaic Systems",
    description:
      "Engineering, procurement, and commissioning for solar plants that deliver peak efficiency and rapid ROI across commercial rooftops and industrial sites.",
    icon: (
      <svg viewBox="0 0 48 48" role="img" aria-label="Solar panels">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 31h36M8 17h32l-3 14H11zM24 17l-3-9M31 17l5-6M17 17l-5-6M24 31v11"
        />
      </svg>
    )
  },
  {
    title: "Automation & SCADA",
    description:
      "End-to-end control systems integrating PLC, SCADA, and IoT monitoring for smarter operations, predictive maintenance, and energy transparency.",
    icon: (
      <svg viewBox="0 0 48 48" role="img" aria-label="Automation">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h32M8 36h32M18 12v24M30 12v24M8 24h32"
        />
        <circle
          cx="18"
          cy="24"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle
          cx="30"
          cy="24"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    )
  },
  {
    title: "Energy Efficiency Audits",
    description:
      "Diagnostic audits and retrofitting programs that highlight quick wins, reduce waste, and align with Tunisia’s sustainability regulations.",
    icon: (
      <svg viewBox="0 0 48 48" role="img" aria-label="Energy audit">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M24 6v8m9.9-3.9-5.7 5.7m13.8 4.2h-8M34 34l-6-6 6-6M18 22l-6 6 6 6m-8 8h12M8 24h8m0-8-6-6M8 42l10-10M40 42l-10-10"
        />
      </svg>
    )
  }
];

export function Services() {
  return (
    <section id="solutions" className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>What we deliver</span>
        <h2>Integrated solutions engineered for high impact</h2>
        <p>
          From assessment to commissioning, Iceem pairs technical mastery with
          responsive support to keep your infrastructure resilient, efficient,
          and future-ready.
        </p>
      </div>
      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.title} className={styles.card}>
            <span className={styles.icon}>{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
