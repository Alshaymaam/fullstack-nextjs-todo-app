import localFont from "next/font/local";
import "./globals.css";
import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/providers/theme-provider"
import { ClerkProvider} from "@clerk/nextjs";
import Nav from "@/components/Nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Nav/>
            {children}
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
