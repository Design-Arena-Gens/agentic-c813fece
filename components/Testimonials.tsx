'use client';

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Iceem modernised our factory’s energy infrastructure with a hybrid solar system and real-time monitoring. We cut our electricity bill by 34% within the first quarter.",
    name: "Hichem Ben Saïd",
    role: "Operations Director, SOTEFI",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=240&h=240&q=80"
  },
  {
    quote:
      "Their automation specialists delivered a reliable SCADA environment that harmonised our legacy equipment. Downtime is now near zero, and the audit trail is impeccable.",
    name: "Nadia Ferjani",
    role: "Plant Manager, Tunipower",
    image:
      "https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=facearea&w=240&h=240&q=80"
  },
  {
    quote:
      "Iceem helped us secure incentives for our solar rollout while guaranteeing compliance. The engineering quality is impressive and the aftercare is always proactive.",
    name: "Mehdi Aroua",
    role: "Real Estate Lead, Elan Group",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=240&h=240&q=80"
  }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const items = useMemo(() => testimonials, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <section id="testimonials" className={styles.wrapper} aria-label="Testimonials">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Testimonials</span>
          <h2>Trusted by innovators across Tunisia</h2>
          <p>
            Experience-driven delivery, measurable efficiency gains, and a team you
            can rely on from feasibility to long-term maintenance.
          </p>
        </div>
        <div className={styles.carousel}>
          <AnimatePresence mode="wait">
            <motion.article
              key={items[index].name}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className={styles.avatar}>
                <Image
                  src={items[index].image}
                  alt={`Portrait of ${items[index].name}`}
                  fill
                  sizes="64px"
                  priority={false}
                />
              </div>
              <blockquote className={styles.quote}>{items[index].quote}</blockquote>
              <div className={styles.meta}>
                <span className={styles.name}>{items[index].name}</span>
                <span className={styles.role}>{items[index].role}</span>
              </div>
            </motion.article>
          </AnimatePresence>
          <div className={styles.controls}>
            {items.map((item, itemIndex) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial from ${item.name}`}
                aria-pressed={index === itemIndex}
                onClick={() => setIndex(itemIndex)}
                className={index === itemIndex ? styles.controlActive : styles.control}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
