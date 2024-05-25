import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid h-screen w-full pl-[56px]">
            <div className="flex flex-col">
              {/* <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b border-primary px-4">
                <h1 className="text-xl font-semibold">Playground</h1>
              </header> */}
              <main>
              {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
