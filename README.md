# EmoJournal

## Overview

EmoJournal is a web application designed to help users track their daily moods and improve their mental health. By recording daily emotions, users can gain insights into their emotional patterns and make informed decisions to enhance their well-being.

## Features

- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Mood Tracking**: Users can log their daily moods and view historical data.
- **Calendar View**: Visual representation of mood entries over time.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Loading Indicators**: Provides feedback during data fetching and processing.
- **Gradient Mood Visualization**: Displays mood data using gradient colors for easy interpretation.

## Components

- **Main**: The main layout component that wraps other components.
- **Dashboard**: Displays user mood data and allows mood entry.
- **Login**: Handles user authentication.
- **Loading**: Shows a loading spinner during data fetching.
- **Calendar**: Displays mood data in a calendar format.
- **Hero**: The landing page component with a call to action.
- **Button**: Reusable button component with customizable styles.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework for server-side rendering and static site generation.
- **Firebase**: Backend-as-a-service for authentication and database.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Google Fonts**: Custom fonts for enhanced typography.

## Usage

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/yourusername/emojournal.git
   cd emojournal
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Firebase**:
   - Create a Firebase project and configure authentication and Firestore.
   - Set up environment variables in a `.env.local` file with your Firebase configuration.

4. **Run the Application**:
   ```bash
   npm run dev
   ```

5. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000`.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request. Ensure your code follows the project's coding standards and includes appropriate tests.

1. **Fork the Repository**: Click the "Fork" button on the top right of the repository page.

2. **Create a Branch**: 
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes**:
   ```bash
   git commit -m "Add your message here"
   ```

4. **Push to the Branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**: Navigate to the repository on GitHub and click the "New Pull Request" button.

---

Thank you for using EmoJournal! We hope it helps you track and improve your emotional well-being.
