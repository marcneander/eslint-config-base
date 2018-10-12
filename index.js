module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb-base',
        'prettier'
    ],
    plugins: ['prettier'],
    env: {
        node: true
    },
    rules: {
        // prettier
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'none',
                tabWidth: 4,
                printWidth: 120
            }
        ]
    }
};