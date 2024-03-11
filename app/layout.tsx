import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const inter_init = Inter({
  subsets: ["latin"],
  weight: ["300", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Asmaul Huna Web",
  description:
    "Asmaul Husna - 99 Nama Allah. Aplikasi web ini menyediakan antarmuka yang ramah pengguna untuk belajar dan merenungkan makna serta signifikansi dari setiap nama ilahi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${poppins_init.variable} ${inter_init.variable}`}>
        {children}
      </body>
    </html>
  );
}
