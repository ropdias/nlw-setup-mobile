# Habits Tracker created using Node, React, React Native and Prisma ORM

This project was developed during the event NLW Setup from Rocketseat.

This repository will be used to save the **Front-End (MOBILE)** part of the project.

## Content Studied and Developed:

- [x] Front-End - Mobile
  - [x] Configuring Expo
  - [x] Configuring Android Emulator
  - [x] Creating Expo App
  - [x] Changing Assets (icons and splash screen)
  - [x] Installing custom fonts
    - [x] Making sure they are loaded
  - [x] Creating a Loading component
  - [x] Status Bar customization
  - [x] Knowing and Installing Nativewind
  - [x] tailwind.config in React Native
  - [x] Extending React Native types via declaration merging for tailwind to use className
  - [x] Installing Tailwind CSS Intellisense
  - [x] Creating Home
    - [x] Creating the Header component
      - [x] Including logo and utilizing SVG as a component in React Native
      - [x] Defining typing of SVG as a component
      - [x] Utilizing vector-icons
    - [x] Creating the HabitDay component
      - [x] Installing dayjs to manipulate dates
      - [x] Defining pt-br locale for dates
      - [x] Reusing the generate-range-between-dates.ts
    - [x] Generating the days in the HabitDay component
    - [x] Creating header of weekdays
  - [x] Creating basic structure of screens
    - [x] Screen to create new habit (New.tsx)
    - [x] Screen to view details of an habit (Habit.tsx)
  - [x] Implementing Navigation
    - [x] Creating the routes of the application
    - [x] Navigating to the New screen
    - [x] Defining typing of navigation routes
  - [x] Creating the interface for registering new habits
    - [x] BackButton component
    - [x] Implementing BackButton in the registration
    - [x] New habit input
    - [x] Checkbox component
    - [x] Creating one Checkbox for each day of the week
    - [x] Create the function to check/uncheck Checkbox
    - [x] Confirmation button
    - [x] Utilizing ScrollView to allow scroll
  - [x] Creating the habits of the day interface
    - [x] Navigating to the habits screen
    - [x] Using ScrollView to enable scroll
    - [x] Reusing the BackButton component
    - [x] Passing and retrieving data as a route parameter
    - [x] Formatting and showing the day of the week
    - [x] Formatting and showing day/month
    - [x] Creating the ProgressBar component
    - [x] Using the CheckBox component
  - [x] Installing axios
    - [x] Configuring access to the server
  - [x] Home screen
    - [x] Getting the summary
    - [x] Using the component Loading
    - [x] Passing props in the HabitDay component
      - [x] Creating a function to calculate the percentage of progress
      - [x] Using clsx to use conditional classes
  - [x] New screen
    - [x] Getting date from the form
    - [x] Registering and sending new habit to the API
  - [ ] Habit screen
    - [x] Get from API the habits of the day
    - [x] Show the list of habits of the day
    - [x] Created HabitsEmpty component to show an empty habit list
    - [x] Checking if selected date is from the past and show message that user can't edit
    - [x] Show progress
  - [ ] Send to the API the status of the habit (toggle/untoggle)
    - [ ] Using useFocusEffect to update home when return
  - [ ] Animation
    - [ ] Knowing React Native Reanimated
    - [ ] Installing and configuring Reanimated in the application
    - [ ] Animating ProgressBar
    - [ ] Animating Checkbox

## Technologies:

- `React Native`
- `NativeWind`
- `Typescript`
