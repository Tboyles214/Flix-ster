import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flix-ster",
  description: "Search your favorite movies and TV shows",
};
const monserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={monserrat.className}>
      <body className=" flex flex-col">
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
