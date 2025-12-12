 🎓 Interactive Quiz Application

Project Summary

This project implements a pixel-perfect, interactive, and responsive quiz application based on the provided design specifications. It showcases modern frontend development practices using a standard component-based architecture.

🚀 Tech Stack

The application is built using the following modern JavaScript and CSS technologies:

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| Frontend Framework| React | Core library for building the user interface using components. |
| Language| TypeScript| Adds static typing for better code quality, scalability, and fewer runtime errors. |
| Styling | Tailwind CSS | A utility-first CSS framework used for rapid and highly customized styling, ensuring the design is pixel-perfect. |
| Build Tool | Vite | Modern, fast development build tool used for bundling and serving the application. |

🛠️ Setup Instructions

Follow these steps to clone the project and run it locally.

Prerequisites

You must have Node.js (version 16 or higher) and npm installed on your machine.

Installation

1.  Clone the Repository:
    ```bash
    git clone [YOUR REPOSITORY URL HERE]
    cd [YOUR PROJECT DIRECTORY NAME]
    ```

2.  Install Dependencies:
    ```bash
    npm install
    ```

3.  Run the Development Server:
    ```bash
    npm run dev
    ```

The application will now be running locally. Open your browser and navigate to the address shown in the terminal (e typically `http://localhost:5173`).

---

✨ Key Features Implemented

The quiz application includes the following features to meet the design and functional requirements:

Pixel-Perfect Design:All visual elements, colors, fonts (Playfair Display), and layout dimensions match the provided Figma specifications. 
Component-Based Architecture:The application is cleanly separated into reusable components (`QuizApp`, `QuestionCard`, `ScoreScreen`) for state management and presentation.
Interactive Options: Users can select an answer, which triggers a visual change (highlighting the chosen option).
Conditional Navigation:The "Next/Submit" button is disabled until an answer is selected for the current question.
Progress Tracking:A progress bar visually shows the user's progress through the total number of questions.
Final Score Calculation: The application calculates and displays the final score as a percentage upon completion.

---

💡 Assumptions Made

Correct Answers: The correct answers were taken directly from the questions presented in the design screenshots.
Stylized Font: The primary decorative font used for titles and scores is assumed to be Playfair Display (linked via Google Fonts).
State Management: Local React state (`useState`) and `useMemo` were used for simplicity, as the application state is relatively shallow.
Accessibility (A11y): Standard semantic HTML elements (`<button>`) and focus states were prioritized to follow WCAG guidelines.

---

⏱️ Time Spent on the Assignment

The total time spent on this assignment was approximately [INSERT YOUR TOTAL TIME HERE].

  Initial Setup & Configuration:* (e.g., 1.5 hours - Setting up React, TypeScript, Tailwind, and troubleshooting config errors)
  Component Implementation (Questions/Score):* (e.g., 2 hours - Writing JSX, logic, and state management)
  Styling and Pixel-Perfect Adjustments:* (e.g., 1 hour - Applying Tailwind classes for gradients, shadows, and spacing)
  Debugging & Refinement:* (e.g., 1.5 hours - Resolving path errors, compiler issues, and minor CSS tweaks)
