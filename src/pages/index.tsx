import Head from "next/head";
import { FunctionComponent } from "react";

type Props = {};

const IndexPage: FunctionComponent<Props> = ({}) => {
    return (
        <>
            <Head>
                <title>obusk.se</title>
                <meta
                    name="description"
                    content="This is the personal website of Oscar Busk"
                />
            </Head>
            <main>
                <header>
                    <a
                        href="https://github.com/oBusk"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        github.com/oBusk
                    </a>
                    <h1>obusk.se</h1>
                    <a
                        href="https://npm-diff.app"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        npm-diff.app
                    </a>
                </header>
                <footer>
                    <span>
                        Oscar Busk - {new Date().getFullYear()} -{" "}
                        <a href="mailto:contact@obusk.se">contact@obusk.se</a>
                    </span>
                </footer>
            </main>
        </>
    );
};

export default IndexPage;
