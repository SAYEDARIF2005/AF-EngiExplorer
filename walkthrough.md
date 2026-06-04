# Engineering Career Explorer - Walkthrough

The **Engineering Career Explorer** application has been successfully built. We shifted to a Vanilla JS architecture due to the local environment limitations, resulting in a blazing-fast, dependency-free application that runs directly in the browser!

## What was built

We created a custom Single Page Application (SPA) using HTML5, CSS3, and JavaScript.

### Key Components

- **[index.html](file:///c:/Users/ADMIN/Desktop/EngiGuide/index.html)**: The main shell containing the navigation bar, footer, and the dynamic root container where views are rendered.
- **[style.css](file:///c:/Users/ADMIN/Desktop/EngiGuide/style.css)**: A robust design system using CSS Variables for easy theming. It implements a clean, modern aesthetic with a white background, primary blue accents, soft box-shadows, and micro-animations on hover states. The layout is fully responsive down to mobile screens.
- **[data.js](file:///c:/Users/ADMIN/Desktop/EngiGuide/data.js)**: Contains the mock data structuring for Branches (CSE, IT, ECE, EEE, Mechanical, Civil, etc.), Companies (Google, Microsoft, L&T, Siemens, etc.), eligibility criteria, selection timelines, and interview experiences.
- **[app.js](file:///c:/Users/ADMIN/Desktop/EngiGuide/app.js)**: The core logic handling client-side hash routing (`#home`, `#branch/cse`, `#company/google`). It dynamically injects HTML into the DOM based on the active route, avoiding full page reloads and ensuring an instant user experience.

## Features Implemented
1. **Home Page**: Features a hero section with a search bar and a grid of branch categories.
2. **Branch Details**: Clicking on a branch shows the top companies hiring for that specific domain.
3. **Company Details**: A dedicated page for each company highlighting their industry, description, eligibility criteria (CGPA, backlogs), and a visual step-by-step selection process.
4. **Interview Experiences**: A dedicated section displaying technical and HR questions asked by companies, along with candidate tips and difficulty badges.
5. **Global Navigation**: A sticky navbar with a responsive hamburger menu for mobile devices.

## How to Run

Since this is a vanilla web application, you don't need any complex build tools or servers.
1. Simply double-click the `index.html` file in the `EngiGuide` folder on your desktop to open it in your default web browser.

> [!TIP]
> This architecture is highly scalable. In the future, the `data.js` file can easily be replaced with a real `fetch()` call to a REST API or Firebase database when you're ready to deploy dynamic data.
