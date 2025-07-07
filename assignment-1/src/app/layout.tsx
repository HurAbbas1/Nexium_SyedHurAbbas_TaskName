import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quote Generator",
  description: "Assignment 1 - Nexium",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-base-200 text-base-content">{children}</body>
    </html>
  );
}
