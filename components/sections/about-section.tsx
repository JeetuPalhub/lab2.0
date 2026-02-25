"use client";

import { BrainCircuit, DatabaseZap, Layers, ServerCog } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

const focusAreas = [
  {
    title: "Problem Solving",
    description: "Strong focus on DSA patterns and interview-level problem solving.",
    icon: BrainCircuit,
  },
  {
    title: "System Design",
    description: "Learning scalable architecture tradeoffs and resilient service design.",
    icon: Layers,
  },
  {
    title: "Backend Engineering",
    description: "Building reliable APIs, data flows, and event-driven services.",
    icon: ServerCog,
  },
  {
    title: "Frontend Craft",
    description: "Delivering clean, accessible interfaces with premium interactions.",
    icon: DatabaseZap,
  },
];

export function AboutSection() {
  return (
    <AnimatedSection id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Passionate about shipping thoughtful, scalable products."
        description="I am a Full Stack Developer focused on performance, architecture, and user-centric interfaces. I enjoy breaking down hard problems and building systems that stay maintainable as they grow."
      />

      <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
        <article className="glass-panel rounded-3xl p-7 sm:p-8">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            My core strength sits at the intersection of backend scalability and frontend
            clarity. I like engineering systems that are practical in production while
            still feeling intuitive for users and teammates.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Beyond coding, I am a tech enthusiast who continuously sharpens skills in
            DSA, system design, and real-world architecture patterns.
          </p>
        </article>

        <div className="grid gap-4">
          {focusAreas.map((area) => (
            <article key={area.title} className="glass-panel rounded-2xl p-5">
              <area.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-display text-lg font-semibold">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
