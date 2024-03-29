/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: "/(npm-?diff)(.?app)?",
                destination: "https://npm-diff.app",
                permanent: false,
                basePath: false,
            },
            {
                source: "/(npm-?scan)(ner)?",
                destination: "https://npm-scanner.vercel.app",
                permanent: false,
                basePath: false,
            },
            {
                source: "/(mg|management-?game)",
                destination: "https://mg.obusk.se",
                permanent: false,
                basePath: false,
            },
            {
                source: "/(rectangle)(-?that)?",
                destination: "https://rectangle.obusk.se",
                permanent: false,
                basePath: false,
            },
            {
                source: "/(ng|nonogram)",
                destination: "https://ng.obusk.se",
                permanent: false,
                basePath: false,
            },
        ];
    },
};

module.exports = nextConfig;
