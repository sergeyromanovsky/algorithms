module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'prettier',
        'prettier/react',
        'eslint-config-prettier',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': ['error'],
        'no-undef': 'error',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'react/jsx-no-duplicate-props': 2,
        'global-require': 0,
        'object-curly-spacing': ['error', 'always'],
        'no-unused-vars': 'error',
        'eslint-comments/no-unlimited-disable': false,
        'semi': 'error',
        'no-trailing-spaces': 'error',
        'block-spacing': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-whitespace-before-property': 'error',
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error'
    },
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['prettier'],
};
