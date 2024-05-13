import type { Metadata } from "next";
import { Inter,IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"],display: 'swap', variable:'--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"],weight:['400','700'] ,display: 'swap',variable:'--font-ibm-plex-serif' });

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is modren banking platform for everyonr",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
