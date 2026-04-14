import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gateway Rock Design Consultants",
  description:
    "Professional home staging and interior design services rooted in timeless elegance, warm neutrals, and refined living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}