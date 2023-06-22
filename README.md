# Click Points React Application

This application is built with React.js. It renders a screen with points that can be clicked on. The application also has an undo/redo functionality for the clicked points.

## Description

In this application, we have a main component named `App`. This component maintains two main pieces of state: `points` and `checkPoints`. `points` is used to store the locations of all points that have been clicked on the screen, and `checkPoints` is used to store the history of points when the undo operation is performed.

When the screen is clicked, a new point is added to the `points` state and `checkPoints` is cleared. Each point is an object containing the `x` and `y` coordinates of the mouse click event.

The application also includes 'Undo' and 'Redo' buttons that manipulate the `points` and `checkPoints` arrays to achieve their functionality.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
