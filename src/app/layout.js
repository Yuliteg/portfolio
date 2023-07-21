import "./globals.css";
import { Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import ImageAbsolute from "@/components/ImageAbsolute";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div
          className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable}
    font-sora relative
    `}
        >
          <Navbar />
          <ImageAbsolute imageSrc="/assets/kindpng_821901.png" />
          {children}
        </div>
      </body>
    </html>
  );
}
