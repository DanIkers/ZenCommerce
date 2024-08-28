import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans", weight: "400" });

export const metadata: Metadata = {
  title: "ZEN eCommerce Store",
  description: "NextJS, Prisma, Stripe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background min-h-screen font-sans antialiased", roboto.variable)}>
        {children}
      </body>
    </html>
  );
}
