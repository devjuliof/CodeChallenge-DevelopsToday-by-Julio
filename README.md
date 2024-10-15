# Full-Stack JS Engineer Test Assessment - Country Info App

This project implements a Country Info App as part of a full-stack JavaScript engineer test assessment. It consists of a backend built with Node.js and a frontend built with React.js. The app provides information about various countries, including their borders, population data, and flags.

## Project Overview

### Backend

**Tech Stack:**

- Node.js (Express.js or Nest.js)

**Endpoints:**

1. **Get Available Countries**

   - **Description:** Fetches a list of available countries.
   - **API URL:** [Date Nager API](https://date.nager.at/api/v3/AvailableCountries)

2. **Get Country Info**
   - **Description:** Retrieves detailed information about a specific country.
   - **API URL:** [Country Info API](https://date.nager.at/api/v3/CountryInfo/UA)
   - **Data Provided:**
     - List of Border Countries
     - Population Data (Historical)
     - Flag URL (Country flag image)

### Frontend

**Tech Stack:**

- React.js
- Next.js (preferred but not mandatory)

**Pages:**

1. **Country List Page**

   - Displays a list of countries fetched from the backend.
   - Each country name is clickable, navigating the user to the Country Info Page.

2. **Country Info Page**
   - Displays:
     - Country Name
     - Country Flag
     - Border Countries (Clickable links to respective Country Info Pages)
     - Population Chart showing population over time.

### Additional Requirements

1. **Styling:**

   - Use any CSS framework or custom styles.
   - Ensure responsiveness and user-friendly design.

2. **Environment Variables:**

   - Create a `.env` file for sensitive data (API keys, base URLs).
   - Ensure secure usage of environment variables.
   - Add `.env` to the `.gitignore`.

3. **Code Quality:**

   - Set up ESLint and Prettier for consistent code formatting.
   - Ensure all files are linted and formatted before submission.

4. **Documentation:**
   - Include this `README.md` file with instructions to install, run, and test the application.

### API Documentation

- **Country List API:** [Nager.Date API Documentation](https://date.nager.at/swagger/index.html)
- **Country Info API:** [Postman Country Info API Documentation](https://documenter.getpostman.com/view/1134062/T1LJjU52)

### Additional Instructions

1. **Project Structure:**

   - Place the frontend (FE) and backend (BE) code in separate folders within the root directory.
   - Avoid using a monorepo structure.

2. **Running the Application:**
   - Ensure both frontend and backend can run simultaneously on different ports.
   - The frontend should communicate with the backend without issues.

### Instructions for Running:

1. **Clone the Repository:**

   - First, clone the repository to your local machine:
     ```bash
     git clone https://github.com/devjuliof/CodeChallenge-DevelopsToday-by-Julio.git
     cd CodeChallenge-DevelopsToday-by-Julio
     ```

2. **Install Dependencies:**

   - Navigate to the backend and frontend directories and install dependencies:
     ```bash
     cd backend
     npm install
     cd ../frontend
     npm install
     ```

3. **Start the Backend Server:**

   - Run the backend server:
     ```bash
     cd backend
     npm start
     ```
   - **Alternatively**, you can use:
     ```bash
     node server.js
     ```

4. **Start the Frontend Server:**

   - In a new terminal window, run the frontend server using Vite:
     ```bash
     cd frontend
     npm run dev
     ```

5. **Access the Application:**
   - Click the first link that `npm run dev` provides.

By following these instructions, you will be able to test the application locally and verify that both the frontend and backend are working together seamlessly.
