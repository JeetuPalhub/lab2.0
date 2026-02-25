"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CircleDot } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { journeyPoints } from "@/data/portfolio";

export function JourneySection() {
  return (
    <AnimatedSection id="journey">
      <SectionHeading
        eyebrow="Experience / Learning Journey"
        title="Always shipping, always leveling up."
        description="My journey is centered on depth-first learning and practical implementation. I continuously explore systems that strengthen both engineering quality and product velocity."
      />

      <div className="relative rounded-3xl border border-border/70 bg-card/55 p-6 sm:p-8">
        <div className="absolute left-8 top-10 hidden h-[calc(100%-5rem)] w-px bg-border/80 sm:block" />
        <div className="space-y-5">
          {journeyPoints.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative rounded-xl border border-border/60 bg-background/70 p-4 sm:pl-14"
            >
              <span className="hidden rounded-full border border-border/70 bg-background p-2 text-primary sm:absolute sm:left-4 sm:top-1/2 sm:block sm:-translate-y-1/2">
                <CircleDot className="h-4 w-4" />
              </span>
              <p className="flex items-center gap-2 text-sm font-medium sm:text-base">
                <ArrowUpRight className="h-4 w-4 text-primary sm:hidden" />
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
