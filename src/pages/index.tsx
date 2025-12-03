import Head from "next/head";
import { FunctionComponent } from "react";
import Div100vh from "react-div-100vh";
import { Composition } from "^/components/Composition";

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
            <Div100vh>
                <main>
                    <header>
                        <a
                            href="https://github.com/oBusk"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            github.com/oBusk
                        </a>
                        <h1>
                            <a href="https://obusk.se">obusk.se</a>
                        </h1>
                        <a
                            href="https://npm-diff.app"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            npm-diff.app
                        </a>
                    </header>
                    {/* <Composition /> */}
                    <footer>
                        <span>
                            Oscar Busk ·
                            <a href="mailto:oscar.busk@gmail.com">
                                oscar.busk@gmail.com
                            </a>
                        </span>
                    </footer>
                </main>
            </Div100vh>
        </>
    );
};

export default IndexPage;
