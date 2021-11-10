import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Kumar+One&amp;family=Abel&amp;display=block"
                        rel="stylesheet"
                    />
                    <meta
                        name="description"
                        content="This is the personal website of Oscar Busk"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
