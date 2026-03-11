## About the project

This project is a desktop music player built with **Electron**.

The application provides basic functionality for playing music files, along with selected file system operations such as:

- Playing local audio files
- Deleting files
- Editing music metadata
- Organizing and marking files according to user needs

The goal of this project is to create a practical tool that allows users not only to listen to music, but also to manage their local music library directly within the application.

## Technical stack

| Tool           | Version |
| -------------- | ------- |
| Electron       | 39.2.7  |
| Electron Forge | ^7.11.1 |
| ESLint         | ^10.0.2 |
| Prettier       | ^3.8.1  |
| Vitest         | ^4.0.18 |
| Husky          | ^9.1.7  |

## How to run the project

### 1. Install dependiencies

````bash
npm install

### 2. Start the application (in development mode)

### Other available scripts

npm start         # Run the app in development mode
npm run package   # Package the app without creating installers
npm run make      # Create platform-specific distributables
npm run publish   # Publish the application
npm run lint      # Run ESLint
npm run format    # Format code using Prettier
npm test          # Run tests with Vitest
npm run test:watch # Run tests in watch/UI mode

## Rules that we follow

### Eslint

I used Eslint default rules as described [here:](https://eslint.org/docs/latest/rules/)
Used for maintaining code quality and consistency.

### Prettier

Ensures consistent code formatting across the project. [here:](https://prettier.io/docs/install)

### Commitlint

Commit messages forllow the Github commits specification: [here:](https://commitlint.js.org/concepts/commit-conventions.html)

#### Husky

Used for managing Git hooks (e.g., running lint before commits). [here:](https://typicode.github.io/husky/)

## Architecture guidelines

The application folows the standard Electron architecture:

### Main process - handles application lifecycle and system-level operations

### Renderer process - manages the user interface

### IPC communication - enables secure communication between

## Contributors

@dave8git

## Known issues

### Problem with rpm tools not found

```sh
An unhandled rejection has occurred inside Forge:
Error: Cannot make for rpm, the following external binaries need to be installed: rpmbuild

````

### Solution

apt install rpm

## How to build production package?

npm run make

### This will generate platform-specific distributables using Electron Forge.

## License

MIT
