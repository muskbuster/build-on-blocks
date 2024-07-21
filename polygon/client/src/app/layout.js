import { Inter } from "next/font/google";
import "./globals.css";
import ShadcnThemeProvider from "@/theme/themeProvider";
import LogginChecker from "@/components/login/login-checker";
import PrivyWrapper from "@/privy/privyProvider";
import { Toaster } from "@/components/ui/toaster";
import { TmaSDKProvider } from "@/components/tma";
import Footer from "@/components/footer";
import ReduxProvider from "@/redux/reduxProvider";
import { Pointer } from "@/components/ui/cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Payroll Protocol",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <TmaSDKProvider> */}
        <ShadcnThemeProvider>
          <PrivyWrapper>
            <ReduxProvider>
              <main className="grid place-items-center min-h-screen bg-main/15 pb-20">
                <div className="hidden md:flex absolute bottom-0 right-0  h-full w-3/4 rounded-full bg-gradient-to-br from-white via-main to-red-500 opacity-[0.3] blur-3xl" />
                <Pointer
                  className={
                    "relative flex h-full w-full items-end justify-center"
                  }
                >
                  <div className="h-full w-full grid md:max-w-6xl px-6 md:px-12">
                    <LogginChecker>{children}</LogginChecker>
                  </div>
                </Pointer>
              </main>
              <Footer />
              <Toaster />
            </ReduxProvider>
          </PrivyWrapper>
        </ShadcnThemeProvider>
        {/* </TmaSDKProvider> */}
      </body>
    </html>
  );
}
