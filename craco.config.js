const CracoAlias = require("react-app-alias");

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                alias: {
                    "@components": "./src/components",
                    "@utils": "./src/utils",
                    "@stories": "./src/stories",
                },
            },
        },
    ],
};
