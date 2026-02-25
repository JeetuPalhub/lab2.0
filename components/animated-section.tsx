"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
};

export function AnimatedSection({
  id,
  className,
  children,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("scroll-mt-28 py-16 sm:py-20", className)}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.26 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}
