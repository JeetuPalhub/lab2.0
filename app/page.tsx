import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { ScrollProgress } from "@/components/scroll-progress";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JourneySection } from "@/components/sections/journey-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <div className="relative overflow-hidden">
          {/* Low-contrast dot grid keeps the background textured without visual noise. */}
          <div className="pointer-events-none fixed inset-0 -z-10 opacity-35 [background-image:radial-gradient(circle_at_1px_1px,hsl(var(--border)/0.32)_1px,transparent_0)] [background-size:30px_30px]" />
          <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 sm:px-10 lg:px-14">
            <HeroSection />
            <AboutSection />
            <TechStackSection />
            <ProjectsSection />
            <JourneySection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </PageTransition>
    </>
  );
}
