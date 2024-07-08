# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Create react app TodoList with typescript, yarn from Scratch

```bash
npm install --global yarn
yarn create react-app todolist --template typescript
cd .\todolist\
yarn add sass
yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
```

### Add file `.editorconfig` to share several settings together

```bash
[*]
indent_style = space
indent_size = 2
```

### Add file `.prettierrc` to share several settings together

```bash
{
    "arrowParens": "always",
    "semi": false,
    "trailingComma": "none",
    "tabWidth": 2,
    "useTabs": false,
    "singleQuote": true,
    "printWidth": 120,
    "jsxSingleQuote": true
}
```

### Add file `.eslintrc` to share several settings together

```bash
{
  "extends": ["react-app", "prettier"],
  "plugins": ["react", "prettier"],
  "rules": {
    "prettier/prettier": [
      "warn",
      {
        "arrowParens": "always",
        "semi": false,
        "trailingComma": "none",
        "tabWidth": 2,
        "useTabs": false,
        "singleQuote": true,
        "printWidth": 120,
        "jsxSingleQuote": true
      }
    ]
  }
}
```

### Add scripts to `package.json`

```bash
"lint": "eslint --ext js,jsx,ts,tsx src/",
"lint:fix": "eslint --fix --ext js,jsx,ts,tsx src/",
"prettier": "prettier --check \"src/**/(*.jsx|*.js|*.tsx|*.ts|*.css|*.scss)\"",
"prettier:fix": "prettier --write \"src/**/(*.jsx|*.js|*.tsx|*.ts|*.css|*.scss)\""
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
