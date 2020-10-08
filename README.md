# React Starter

React Starter is a React template based from create-react-app template with extra features to start project faster.

## React Version

16.13.1

## Prerequisites

- Node.js (>= 12 required)
- npm package manager (>= 6 required)

## Extra Features

- SCSS Support
- PWA
- Bundle Analyzer
- Husky (git hooks)
- Prettier (format code style)

## First Steps

1. Replace all **react-starter** keyword from this project with your new project name, for example: **my-website**
1. Replace **public/favicon.ico** with your website favicon
1. Replace **public/logo\*\.png** with your website icons
1. Update this **README.md** according to your project changes
1. If you are using monorepo multi-package repository consider removing husky (git hooks) to prevent conflicts between repos, I recommended deleting **.huskyrc.json** file and run: **npm uninstall husky** and then maybe to add husky in the root of the project

## Commands

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run start:prod`

Runs the app from build directory after running `npm run build`.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### `npm run format`

Format project files with prettier.

### `npm run lint`

Lint project files with eslint.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run analyze`

Source map explorer analyzes JavaScript bundles using the source maps.<br />
This helps you understand where code bloat is coming from.<br />
It will open automatically the browser.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
