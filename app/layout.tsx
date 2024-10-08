import type { Metadata } from "next";
import Header from "../components/Header"


import "./globals.css";




export const metadata: Metadata = {
  title: "Zeit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      <body>
        <Header />
         {children}
      </body>
    </html>
  );
}
