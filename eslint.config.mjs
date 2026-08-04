import nextObusk from "@obusk/eslint-config-next";

const eslintConfig = [
    ...nextObusk,
    {
        settings: {
            react: { version: "19" },
        },
        rules: {
            "tailwindcss/classnames-order": "off",
            "tailwindcss/enforces-negative-arbitrary-values": "off",
            "tailwindcss/enforces-shorthand": "off",
            "tailwindcss/important-modifier-suffix": "off",
            "tailwindcss/no-arbitrary-value": "off",
            "tailwindcss/no-contradicting-classname": "off",
            "tailwindcss/no-custom-classname": "off",
            "tailwindcss/no-unnecessary-arbitrary-value": "off",
        },
    },
];

export default eslintConfig;
