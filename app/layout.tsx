import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cinnamon Works - Gluten-Free, Vegan Bakery in Pike Place Market",
  description: "Delicious gluten-free and vegan treats in Seattle's Pike Place Market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
