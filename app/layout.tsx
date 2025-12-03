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
  openGraph: {
    title: "Cookieteer — Designer Cookies",
    description:
      "Hand-piped, custom decorated cookies baked fresh in Toronto. Perfect for events, celebrations, and gifts.",
    url: "https://your-domain.com",
    siteName: "Cookieteer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cookieteer Designer Cookies — Toronto",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cookieteer — Designer Cookies",
    description:
      "Custom sugar cookies handmade in Toronto. Magical designs for every occasion.",
    images: ["/og-image.png"],
  },
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
