import { AppProps } from "next/app";
import "normalize.css/normalize.css";
import "../styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
