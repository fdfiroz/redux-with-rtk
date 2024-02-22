import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layouts/Sidebar";
import StoreProvider from "@/lib/StoreProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redux with RTK Starter",
  description: "A starter template for building a Redux app with RTK.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>

      <div className="flex">
      <div className="w-[80px]">
        <Sidebar />
      </div>
      <div className="w-full">
      {children}
      </div>
    </div>
        </StoreProvider>
       </body>
    </html>
  );
}
