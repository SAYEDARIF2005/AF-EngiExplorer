# Engineering Career Explorer

This plan details the implementation of a modern, fast, and mobile-friendly web application to help engineering students find top companies for their branch, understand eligibility criteria, and read interview experiences.

## Technical Adjustment
We originally planned to use React and Vite. However, since Node.js/NPM is not available on this system, we will build a blazing fast **Vanilla HTML, CSS, and JavaScript** Single Page Application (SPA). This will require zero build tools and will run directly in the browser.

## Proposed Changes

We will create the following files in the project directory:

### Core Files

#### `index.html`
The main entry point. It will contain the sticky navigation bar, the main container where different views will be dynamically rendered, and the footer.

#### `style.css`
Global design system tokens (colors, typography, spacing). It will implement the core aesthetics: white background with blue accents, modern typography (e.g., Inter from Google Fonts), and smooth micro-animations for interactive elements.

#### `app.js`
The main JavaScript file. It will handle:
- Client-side routing (hash-based or simple state-based view switching)
- Rendering different pages (Home, Branches, Companies, Experiences, About, Contact)
- Search functionality

#### `data.js`
A JavaScript file containing the mock database of companies, branches, eligibility criteria, and interview experiences.

## Verification Plan

### Manual Verification
- Open `index.html` directly in any web browser.
- Navigate through all views (Home -> Branch -> Company Details).
- Test the search bar functionality.
- Verify mobile responsiveness (stacking cards, readable text on small screens).
- Verify the design matches the "professional, white background with blue accents" requirements.
