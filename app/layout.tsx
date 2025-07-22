import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { DM_Sans } from "next/font/google";

import localFont from "next/font/local";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const dmSans = DM_Sans({ subsets: ["latin"] });

// const cabinetGrotesk = localFont({
//   src: [
//     {
//       path: "assets/fonts/CabinetGrotesk-Black.woff",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "assets/fonts/CabinetGrotesk-ExtraBold.woff",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "assets/fonts/CabinetGrotesk-Bold.woff",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "assets/fonts/CabinetGrotesk-Extralight.woff",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "assets/fonts/CabinetGrotesk-Light.woff",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "assets/fonts/CabinetGrotesk-Medium.woff",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "assets/fonts/CabinetGrotesk-Regular.woff",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "assets/fonts/CabinetGrotesk-Variable.woff",
//       weight: "600",
//       style: "normal",
//     },
//   ],
// });

export const metadata: Metadata = {
  title: "Bina Kami - Bimwin Virtual Kemenag Kota Madiun",
  description: "Bimbingan Perkawinan Online Kementerian Agama Kota Madiun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(montserrat.className,  "antialiased bg-white")}>
        {children}
      </body>
    </html>
  );
}
