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
                source: "/(rectangle)(-?that)?",
                destination: "https://rectangle.obusk.se",
                permanent: false,
                basePath: false,
            },
        ];
    },
};

module.exports = nextConfig;
