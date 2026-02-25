"use client";

import { Github, Layers3, Linkedin, Mail, Twitter } from "lucide-react";
import { contactEmail, socialLinks } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  x: Twitter,
  peerlist: Layers3,
};

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="pb-10">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something meaningful together."
        description="I am always open to discussing full-time roles, internships, collaborations, and product ideas that solve real problems."
        align="center"
      />

      <div className="glass-panel mx-auto max-w-4xl rounded-3xl p-6 text-center sm:p-8">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          If you’re looking for a developer who blends problem-solving depth with clean
          product execution, let’s connect.
        </p>

        <div className="mt-6">
          <Button asChild size="lg" className="rounded-full px-7">
            <a href={`mailto:${contactEmail}`}>
              <Mail />
              {contactEmail}
            </a>
          </Button>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {socialLinks.map((social) => {
            const Icon = socialIconMap[social.key];
            return (
              <Button
                key={social.href}
                asChild
                variant="outline"
                className="h-auto rounded-xl py-3 text-sm"
              >
                <a href={social.href} target="_blank" rel="noreferrer">
                  <Icon />
                  {social.name}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
