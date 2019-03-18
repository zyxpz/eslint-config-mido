module.exports = {
  extends: "eslint:recommended",
  globals: {
    MyGlobal: true,
  },
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  env: {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true
  },
  rules: { // tab缩进
    "indent": ["warn", "tab",
      {
        "SwitchCase": 1
      }
    ],
    "quotes": 0,
    "no-console": 1,
    "no-debugger": 1,
    "no-var": 1,
    "import/named": 0,
    "semi": [
      1,
      "always"
    ],
    "no-trailing-spaces": 0,
    "eol-last": 0,
    "no-underscore-dangle": 0,
    "no-alert": 1,
    "no-lone-blocks": 0,
    // 关键字周围强制使用空格
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    // 大括号中强制使用空格
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    // 单行代码块前后要加空格
    "block-spacing": [
      "warn",
      "always"
    ],
    // 逗号后面加空格
    "comma-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    // 分号后面加空格
    "semi-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    // 在注释前有空白
    "spaced-comment": [
      "warn",
      "always"
    ],
    // 箭头函数前后要有空格
    "arrow-spacing": [
      "warn",
      {
        "before": true,
        "after": true
      }
    ],
    // 对象字面量的属性中键和值之间使用一致的间距
    "key-spacing": [
      "warn",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    // 要求操作符周围有空格
    "space-infix-ops": [
      "warn",
      {
        "int32Hint": false
      }
    ],
    "jsx-quotes": 1,
    // 强制对象换行
    "object-property-newline": ["warn", {
      "allowAllPropertiesOnSameLine": false
    }],
    // 禁用不必要的构造函数
    "no-useless-constructor": "error",
    // 要求构造函数首字母大写
    "new-cap": 1,
    // 最大行数
    "max-len": ["error", {
      "code": 100,
      "tabWidth": 4
    }],
    // 三元操作符换行
    "multiline-ternary": ["warn", "always-multiline"],
    // 禁止使用一元操作符
    "no-plusplus": ["error", {
      "allowForLoopAfterthoughts": true
    }],
    // 要求或禁止函数圆括号之前有一个空格
    "space-before-function-paren": ["error", "never"],
    // 禁止或强制圆括号内的空格
    "space-in-parens": ["error", "never"],
    // 禁止出现多个空格
    "no-multi-spaces": ["error", {
      exceptions: {
        "ImportDeclaration": true
      }
    }],
    // 禁止多行字符串
    "no-multi-str": "error",
    // 禁止对函数参数再赋值
    "no-param-reassign": ["error", {
      "props": true
    }],
    // 禁止在返回语句中赋值
    "no-return-assign": ["error", "always"],
    // 禁用不必要的await
    "no-return-await": "error",
    // 
    "no-self-compare": 2
  }
}