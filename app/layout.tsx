import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bio-Fertilizantes Cuitzeo | Inversión CleanTech",
  description: "Transformamos el lirio acuático en bio-fertilizante premium. Inversión $20K MXN con ROI en 4 meses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
