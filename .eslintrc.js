module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parser": "vue-eslint-parser",
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    // 解析器配置
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "extraFileExtensions": [".vue"],
        "tsconfigRootDir": __dirname,
        "project": 'tsconfig.json',
        // "ecmaVersion": 2018,
        "sourceType": "module"
    },
    // 第三方插件
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": 0,
        // 分号
        "semi": ["error", "always"],
        "vue/multi-word-component-names": "off",
        // // 禁止缩进错误
        // "indent": 0,
        // // 关闭不允许使用 no-tabs
        // "no-tabs": "off",
        // "no-console": 1,
        // // 设置不冲突 underscore 库
        // "no-underscore-dangle":0,
        // 箭头函数直接返回的时候不需要 大括号 {}
        // "arrow-body-style": ["error", "as-needed"],
        // "no-alert":"error",
        // // 设置是否可以重新改变参数的值
        // "no-param-reassign": 0,
        // // 允许使用 for in
        // "no-restricted-syntax": 0,
        // "guard-for-in": 0,
        // // 不需要每次都有返回
        // "consistent-return":0,
        // // 允许使用 arguments
        // "prefer-rest-params":0,
        // // 允许返回 await
        // "no-return-await":0,
        // // 不必在使用前定义 函数
        // "no-use-before-define": 0,
        // // 允许代码后面空白
        // "no-trailing-spaces": 0,
        // 有一些 event 的时候，不需要 role 属性，不需要其他解释
        // "jsx-a11y/rule-name": 2
        // "jsx-a11y/no-static-element-interactions":0,
        // "jsx-a11y/click-events-have-key-events":0,
        // // 类成员之间空行问题
        // "lines-between-class-members":0,
        // // 不区分是否在 despendencies
        // "import/no-extraneous-dependencies": 0,
        // // 引用时候根据根目录基础
        // "import/no-unresolved": 0,
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        }
    },
    // "overrides": [
    //     {
    //         "files": ["*.js", "*.jsx", " *.ts", "*.tsx", ".vue"],
    //         "parserOptions": {
    //             "project": "./tsconfig.json"
    //         },
    //         "rules": {}
    //     }
    // ],
};