import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./components/navigation";

export const metadata: Metadata = {
  title: "How to sideprosjekt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
