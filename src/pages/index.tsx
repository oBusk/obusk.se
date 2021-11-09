import { GetStaticProps } from "next";
import { FunctionComponent, useEffect } from "react";

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
    useEffect(() => {
        document.documentElement.style.background = `linear-gradient(to right, ${gradients[
            Math.floor(Math.random() * gradients.length)
        ].colors.join(", ")})`;
    });

    return (
        <main>
            <h1>🤔 That domain isn&apos;t really setup or ready yet</h1>
            <footer>
                Oscar Busk - {new Date().getFullYear()} -{" "}
                <a href="mailto:contact@obusk.se">contact@obusk.se</a>
            </footer>
        </main>
    );
};

export default IndexPage;
