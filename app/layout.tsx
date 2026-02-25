import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeetupal-portfolio.vercel.app"),
  title: {
    default: "Jeetu Pal | Full Stack Developer",
    template: "%s | Jeetu Pal",
  },
  description:
    "Jeetu Pal builds scalable full-stack applications with modern frontend systems, strong backend architecture, and problem-solving discipline.",
  keywords: [
    "Jeetu Pal",
    "Full Stack Developer",
    "Next.js portfolio",
    "TypeScript",
    "System Design",
    "WebSockets",
  ],
  authors: [{ name: "Jeetu Pal" }],
  creator: "Jeetu Pal",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Jeetu Pal | Full Stack Developer",
    description:
      "Building scalable web apps, backend systems, and thoughtful developer experiences.",
    url: "https://jeetupal-portfolio.vercel.app",
    siteName: "Jeetu Pal Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Jeetu Pal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeetu Pal | Full Stack Developer",
    description:
      "Modern developer portfolio focused on scalable architecture and premium UI.",
    creator: "@Jeetupal31",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#070b17" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} bg-background text-foreground antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
