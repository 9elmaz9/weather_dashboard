# Weather Dashboard

![Project Screenshot](![image](https://github.com/9elmaz9/weather_dashboard/assets/132524901/06098cd7-19e6-4f80-95a6-24542e2c01e8)
)

This project is a simple weather dashboard built with TypeScript.

## Project Structure

The project has the following structure:

weather_dashboard/
├── dist/ # Compiled JavaScript files
├── node_modules/ # Installed dependencies
├── public/ # Public assets (HTML, CSS)
│ ├── index.html
│ ├── styles.css
├── src/ # TypeScript source files
│ ├── index.ts
├── tsconfig.json # TypeScript configuration file
├── package.json # Dependency management file
├── package-lock.json # Exact versions of installed dependencies


## Prerequisites

Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/en/) installed (which includes npm).
- [OpenWeatherMap API Key](https://openweathermap.org/api).

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/weather_dashboard.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd weather_dashboard
    ```

3. **Install TypeScript globally if not already installed:**

    ```sh
    npm install -g typescript
    ```

4. **Install project dependencies:**

    ```sh
    npm install
    ```

5. **Replace `YOUR_API_KEY` in `src/index.ts` with your actual OpenWeatherMap API key.**

6. **Compile the TypeScript files:**

    ```sh
    npm run build
    ```

7. **Start the project:**

    ```sh
    npm start
    ```

8. **Open `public/index.html` in your browser** to view the project.

## Usage

- Enter a city name in the input field and click "Search" to view the weather.
- The weather information for the specified city will be displayed below the search button.

## Contributing

To contribute to this project, follow these steps:

1. **Fork this repository.**
2. **Create a branch:** `git checkout -b feature-branch`.
3. **Make your changes and commit them:** `git commit -m 'Add some feature'`.
4. **Push to the original branch:** `git push origin feature-branch`.
5. **Create the pull request.**

## Contact

If you want to contact me, you can reach me at [dzhelianchykelmaz@gmail.com](mailto:dzhelianchykelmaz@gmail.com).


