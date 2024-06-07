# Digital Twin
A 3D visualization application built with TypeScript and Three.js. A digital twin of a factory complex.

# Getting Started
To get started with this project, you need to have `Node.js` and `npm` installed on your machine.

1. Clone the repository to your local machine.
2. Navigate to the project directory.

## Running the Development build
3. Run `npm install` to install the project dependencies.
4. Run `npm run dev` to start the development server.

## Running the Production build
3. Run `PORT=8080 docker-compose up -d` to start the production server. If unspecified, the app listens on the port 80.

# Project Structure
The main entry point of the application is `src/index.ts`, which initializes the application by creating instances of `SceneController` and `ObjectController`.

`SceneController`: This class is responsible for setting up and controlling the 3D scene. It uses the Three.js library to create and manage the 3D environment.

`ObjectController`: This class is responsible for creating and managing the objects within the 3D scene. It uses functions like `generateAnnotations()` to create annotations for the objects.

`Tooltip`: This file contains functions like `generateTooltipNametag()` and `generateTooltipTable()` which are used to create tooltips for the objects in the 3D scene.

`Utils`: This file contains utility functions that are used throughout the application.

# License
This project is licensed under the MIT License. See the LICENSE.md file for details.