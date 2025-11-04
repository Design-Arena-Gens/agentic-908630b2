import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova ? Linear-style Platform",
  description: "A sleek, modern workspace UI inspired by Linear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-100`}
      >
        <Sidebar />
        <div className="md:pl-64">
          <div className="mx-auto max-w-7xl px-4">
            <Topbar />
            <main className="pb-12">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
