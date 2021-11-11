import { GetStaticProps } from "next";
import { FunctionComponent, useEffect, useRef } from "react";

type Color = { name: string; colors: string[] };

type Props = {
    gradients: Color[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await fetch(
        "https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json",
    );
    const gradients = (await res.json()) as Color[];
    return {
        props: { gradients },
    };
};

const IndexPage: FunctionComponent<Props> = ({ gradients }) => {
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.style.background = `linear-gradient(to right, ${gradients[
                Math.floor(Math.random() * gradients.length)
            ].colors.join(", ")})`;
        }
    });

    return (
        <main ref={mainRef} style={{ background: "#373737" }}>
            <h1>Oscar Busk</h1>
            <p>
                Hello and welcome to my website!
                <ul>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://npm-diff.app/"
                        >
                            npm-diff.app
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://npm-scanner.vercel.app/"
                        >
                            npm-scanner.vercel.app
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://mg.obusk.se/"
                        >
                            Management Game
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://rectangle.obusk.se/"
                        >
                            Rectangle That!
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://nonogram.obusk.se/"
                        >
                            nonogram
                        </a>
                    </li>
                </ul>
            </p>
            <footer>
                Oscar Busk - {new Date().getFullYear()} -{" "}
                <a href="mailto:contact@obusk.se">contact@obusk.se</a>
            </footer>
        </main>
    );
};

export default IndexPage;
