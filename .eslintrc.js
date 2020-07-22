module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['@vue/prettier', 'plugin:vue/essential'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'prettier/prettier': 'warn',
        indent: ['warn', 4, { SwitchCase: 1 }],
        'no-unused-vars': 'error',
        'max-len': ['warn', { code: 160 }],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
