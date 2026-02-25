"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Boxes,
  Code2,
  Database,
  HardDrive,
  Radio,
  Rocket,
  Server,
  Wind,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { techStack } from "@/data/portfolio";

const techIconMap = {
  TypeScript: Code2,
  React: Atom,
  "Next.js": Rocket,
  "Tailwind CSS": Wind,
  PostgreSQL: Database,
  Redis: HardDrive,
  WebSockets: Radio,
  Turborepo: Boxes,
  "Node.js": Server,
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function TechStackSection() {
  return (
    <AnimatedSection id="tech-stack">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I trust for high-quality product engineering."
        description="I combine modern frontend tooling with robust backend technologies to ship fast, scalable, and maintainable systems."
      />

      <motion.div
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {techStack.map((tech) => {
          const Icon = techIconMap[tech.name as keyof typeof techIconMap];
          return (
            <motion.article
              key={tech.name}
              variants={itemVariants}
              className="glass-panel group rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <Icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
              <h3 className="mt-4 font-display text-xl font-semibold">{tech.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tech.detail}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </AnimatedSection>
  );
}
