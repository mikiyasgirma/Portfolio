import "../styles/globals.css";
import WindowWidthContextProvider from "./../contexts/WindowWidthContextProvider";
// import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <WindowWidthContextProvider>
      <Component {...pageProps} />;
    </WindowWidthContextProvider>
  );
}

export default MyApp;
