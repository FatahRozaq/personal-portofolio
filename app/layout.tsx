import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  title: "Muhamad Fatah Rozaq | Software Engineer",
  description:
    "Meet Muhamad Fatah Rozaq, a software engineer building fullstack business systems, sales force automation, and business intelligence software.",
  openGraph: {
    title: "Muhamad Fatah Rozaq | Software Engineer",
    description: "Software engineer in Bandung, Indonesia.",
    type: "profile",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={poppins.variable} lang="en">
      <body>{children}</body>
    </html>
  );
}
