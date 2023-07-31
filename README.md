# [**Social Seedings**](https://social-seedlings-alpha.vercel.app/)

This is a React web application that includes two main features:

News Feed: Fetches 10 random photos with infinite scroll using the Unsplash API. The API response provides user details, photo URLs for different resolutions, location, number of likes, and other useful data points about each feed item.

Profile Section: When clicking on the User Info section in the News Feed, the application will redirect to that user's profile page. The user details are fetched based on the username from the Unsplash API. The user's profile page displays all the photos added by the user along with their photo descriptions in a grid structure view. Additionally, the profile page offers an option to switch to the list view of the selected image.

## Features

Fetches 10 random photos with infinite scroll in the News Feed.
Clicking on User Info in the News Feed redirects to the user's profile page.
Fetches user details and their photos from the Unsplash API.
Displays photos in both grid and list view.

[Visit&nbsp;the&nbsp;live&nbsp;website](https://social-seedlings-alpha.vercel.app/)

---

## Required Environment Variables

| VARIABLE               | Sample value             |
| ---------------------- | ------------------------ |
| NEXT_PUBLIC_API_URL    | https://api.unsplash.com |
| NEXT_PUBLIC_ACCESS_KEY | Make Your Key            |

## Installation Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm install or yarn install.

## Usage

1. In the project directory, run npm start or yarn start to start the development server.
2. Open your web browser and visit http://localhost:3000 to access the application.
3. The News Feed will display random photos, and you can scroll infinitely to load more photos.
4. Click on User Info in the News Feed to visit the user's profile page.
5. On the user's profile page, you can switch between grid and list view for the photos.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Redux: State management library for React applications.
- React-Redux: Official React bindings for Redux.
- React Router: Library for handling navigation in React applications.
- Axios: Promise-based HTTP client for making API requests.
- Unsplash API: Provides access to high-quality photos from the Unsplash platform.

## Application Screenshots

