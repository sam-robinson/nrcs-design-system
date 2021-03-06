# NRCS Design System

A design system produced for our partners at NRCS.

An adaptation of the [FPAC Design System](https://usda-fsa.github.io/fsa-design-system/) and its inherent roots from the [U.S. Web Design System](https://designsystem.digital.gov/)

A resource with specifics and expanded documentation meant as a compliment to the FPAC Design System documentation, all to support the current needs of coordinated efforts building apps at NRCS.

If you are working on a project with FPAC or its related agencies, it is suggested you consider starting FPAC design system first.

- Designed with clean simple styles, high color contrast, and accessible components for accessibilty.
- Provides color, typography, iconography, components and examples with documentation for how to use them.
- Provides two sizing scales for typography and components for different use cases, for example in larger public website to more compact and data-heavy web applications.
- The intent is to provide a solution for our development teams to converge upon for consistent implementation in design and style.
- Provides a React UI component library in two sizes, Default and Small out-of-the-box for use with different use cases (website vs compact data application). It covers implementations of most FPAC components, a handful of custom complex components, and some use of Reactstrap components for layout and forms.
- The NRCS Design System and this website is built with React (via Create React App), Storybook, using [Reactstrap](https://reactstrap.github.io/), and based on a custom [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) theme. The source for this project can serve as an example implementation of the NRCS Design System components and styles as well as a rough application skeleton.

## Install & Use NRCS Design System via NPM

### `npm install nrcs-design-system`

Then to use in your React app, import the styles (in index.js):
### `import "nrcs-design-system/scss/nrcs-design-system.scss"`

And start using components, for example:
### `import { PrimaryButton } from "nrcs-design-system"`

## NRCS Design System Development

### `git clone https://github.com/Koala-Bandits/nrcs-design-system.git`

### `npm install`

Install application dependencies

### `npm start`

Build and run the NRCS Design System web application for development

### `npm run storybook`

Build and run the NRCS Design System StoryBook application for development

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run storybook`

Runs the StoryBook app development mode for components.<br />
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build-storybook`

Builds the StoryBook app for production to the `static-storybook` folder.<br />
It correctly bundles StoryBook in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more a Create React App in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

You can learn more about Storybook in the [StoryBook Documentaion](https://storybook.js.org/docs/basics/introduction/)

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
