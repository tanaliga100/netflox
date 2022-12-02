import type { AppProps } from "next/app";
import { AuthProvider } from "../hooks/useAuth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // HOC
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}

export default MyApp;
