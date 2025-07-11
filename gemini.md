
# Project Context: Calorie Tracker

This is a calorie tracker application that allows users to track their daily calorie intake.

## Architecture

**api-gateway:** A Node.js service that handles all incoming API requests.
**frontend:** A React-based single-page application built with Vite and Tailwind CSS, using TypeScript.

## Technology Stack

**Languages:** JavaScript (Node.js), TypeScript
**Frameworks:** React
**Styling:** Tailwind CSS

## Coding Style

Use TypeScript for all new frontend components.
Use Tailwind CSS for styling.
Use Tailwind CSS for all styles, no exceptions.
Don't use custom CSS classes or external .css files.
Group Tailwind classes by purpose: layout → spacing → color → typography → states.
Use React hooks for state management.
Use typescript interfaces for type definitions.
All the types should be defined in the src/types folder and should be named in camelCase.
Allways be careful with the types and the variables names, use the best practices for naming and code quality.
Be carefull with excesive comments, only add comments when it is necessary.
Variable and function names should be in camelCase.
If do you need to do a function, please use arrow functions () => {}.
If you need to do a function that is going to be used as a callback, please use arrow functions () => {}.
In the components and new files, please use the best practices for code quality.
In the moment of create a new file, please consider the style of the rest of components and files.
If you are not sure about something, ask me.
All public APIs must be documented with JSDoc comments.

##Best Practices
Use descriptive names for functions and variables.
Keep functions small and with single responsibilities.
Prefer composition over nested conditionals.
Group related functions into hooks or reusable modules.
Whenever you create a new file, respect the style of existing files.


##Common Mistakes to Avoid
Don't use any without a clear justification.
Don't repeat logic that can be extracted into utility functions.
Don't use traditional CSS classes or styled components.
Don't ignore types or force conversions.

## Rules
 
Strictly follow all sections of this document.
If any instructions are unclear, ask first before making any assumptions.
Generate clean, concise code that is aligned with team practices.
When creating a new file or component, maintain the existing visual, structural, and coding style.
You are an expert developer who is knowledgeable about our entire technology stack.