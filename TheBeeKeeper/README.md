# The Beekeeper App

## Introduction

The Beekeeping Weather Guide App is an essential tool designed to assist beekeepers in determining the optimal conditions for inspecting and managing their beehives. Built by Harrison and Luke Spitnale for the Congressional App Challenge, this app provides real-time weather data tailored to the needs of beekeepers, helping them make informed decisions on when and how to conduct hive inspections.

The app leverages live weather data to provide recommendations on temperature, wind speed, and rainfall, ensuring that inspections are conducted under the best possible conditions. By using this app, beekeepers can avoid potentially harmful situations, such as overheating or exposing their hives to unfavorable conditions.

## Features

- **Real-Time Weather Data**: Access current weather information for your location, including temperature, wind speed, and rainfall.
- **Inspection Recommendations**: Receive advice on the best times to inspect your hives based on weather conditions.
- **Beekeeping Tips**: Learn key considerations for maintaining hive health in various weather scenarios.

## Installation

To install and run the Beekeeping Weather Guide App locally, follow these steps:

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/Harrisonspity/The-Bee-Keeper.git
    ```

2. Navigate to the project directory:
    ```bash
    cd the-beekeeper-app
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Install Expo CLI globally if you haven't already:
    ```bash
    npm install -g expo-cli
    ```

5. Run the app:
    ```bash
    expo start
    ```

## Running the App on Simulators

### iOS Simulator

1. Ensure you have Xcode installed on your macOS system.
2. Open Xcode and navigate to **Preferences > Locations**, then set the command line tools.
3. Run the iOS simulator from the Expo CLI:
    ```bash
    expo start --ios
    ```

### Android Emulator

1. Install Android Studio and set up an Android Virtual Device (AVD).
2. Ensure that the AVD is running.
3. Run the Android emulator from the Expo CLI:
    ```bash
    expo start --android
    ```

### Web

To run the app in a web browser, use the following command:
```bash
expo start --web

## Usage

Once the app is running, enter your location to retrieve weather data and receive tailored beekeeping recommendations. Use the provided tips to guide your beehive inspections and ensure the health and productivity of your colonies.

## About the Congressional App Challenge

The Congressional App Challenge (CAC) is an annual competition that encourages students to create and submit original apps. Winning apps are recognized by U.S. Representatives and may be displayed in the U.S. Capitol Building for one year. The competition aims to inspire innovation and creativity in coding among young students.

---

Developed by Harrison and Luke Spitnale for the Congressional App Challenge.