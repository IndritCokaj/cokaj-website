import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "COKAJ – Reinigung & Hausservices in Deutschland",
  description:
    "Professionelle Reinigungsdienste, Hausmeisterservice und Renovierungen in Deutschland. Qualität, Zuverlässigkeit und Perfektion – alles aus einer Hand.",
  keywords: [
    "Reinigung",
    "Hausservice",
    "Hausmeister",
    "Renovierung",
    "Deutschland",
    "COKAJ",
  ],
  openGraph: {
    title: "COKAJ – Reinigung & Hausservices in Deutschland",
    description:
      "Professionelle Reinigung & Hausservices. Qualität, Zuverlässigkeit und Perfektion – alles aus einer Hand.",
    url: "https://cokaj.de",
    siteName: "COKAJ",
    images: [
      {
        url: "/logo.png", // place your logo.png in /public
        width: 600,
        height: 600,
        alt: "COKAJ Logo – Reinigung & Hausservices",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.png", // place in /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
