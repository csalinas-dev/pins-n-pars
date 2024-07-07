import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import { RootTheme } from "@/components/RootTheme";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pins n Pars: Your Source for Hilarious Golf Moments",
  description:
    "Discover the funniest moments on the golf course with Pins n Pars. Created by Chris and Riley, we share entertaining golf content on social media. Follow our journey and enjoy a laugh with every post. Visit our website to connect with all our social media channels and stay updated with the latest funny golf videos and photos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootTheme>
          {children}
        </RootTheme>
      </body>
      <GoogleAnalytics gaId="G-FLPW53WY4Y" />
    </html>
  );
}
