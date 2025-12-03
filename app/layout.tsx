import type { Metadata } from "next";
import "./globals.css";
import { Inter, Baloo_2 } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Cookieteer",
  description: "Custom decorated cookies baked in Toronto with love.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${baloo.variable} font-body bg-cream text-choco`}
      >
        {children}
      </body>
    </html>
  );
}
