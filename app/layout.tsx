import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "22X",
    template: "%s | 22X",
  },
  description: "just an engineer",
  openGraph: {
    title: "22X",
    description: "just an engineer",
    url: "https://yzhx.xyz",
    siteName: "22X",
    images: [
      {
        url: "https://yzhx.xyz/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "to_22X",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const unifont = LocalFont({
  src: "../public/fonts/unifont_jp-15.1.04.otf",
  variable: "--font-unifont",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, unifont.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
