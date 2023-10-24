import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { ThemeProvider } from "./frontend/components/ThemeProvider";
import Header from "./frontend/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Players Liga",
  description: "Top scorer among your friends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-w-[300px]`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <main className="relative top-20 m-auto  max-w-7xl p-4">
            {children}
          </main>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
