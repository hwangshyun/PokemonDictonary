import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "승현이의 포켓몬들",
  description: "승현트레이너의 포켓몬",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full h-[30px] bg-[#99bbff57] text-center pt-[3px]">
          <h2 className="font-bold">승현이의 포켓몬들</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
