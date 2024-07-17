import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";
import Logo from "@/public/logo.png"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "İlkin's Portfolio",
  description: "Modern & Minimalist Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className={inter.className}><ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
