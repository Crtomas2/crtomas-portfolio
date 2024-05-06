import React, { forwardRef } from 'react';
import { useTheme } from './ThemeProvider';
import { FiLinkedin } from 'react-icons/fi'; // Import LinkedIn icon

const Contacts = forwardRef<HTMLDivElement>((props, ref) => {
  const { theme } = useTheme();

  // Define styles for light and dark themes
  const lightStyles = {
    textColor: 'text-black', // Text color for light theme
    buttonColor: 'bg-blue-500', // Button color for light theme
  };

  const darkStyles = {
    textColor: 'text-white', // Text color for dark theme
    buttonColor: 'bg-blue-500', // Button color for dark theme
  };

  // Apply the appropriate styles based on the current theme
  const styles = theme === 'light' ? lightStyles : darkStyles;

  return (
    <div className="flex flex-col justify-center items-center h-full">
      {/* Title */}
      <h1 className={`text-3xl font-bold mt-1 ${styles.textColor}`}>Contacts</h1>
      <p className={`text-xl font-semibold mt-2 ${styles.textColor}`}>Email: charlierivera.tomas@gmail.com</p>
      
      {/* LinkedIn Button */}
      <div className="mt-1">
        <a
          href="https://www.linkedin.com/in/charlie-tomas-a5577218b/"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-extrabold text-lg py-1 px-2 rounded-2xl flex items-center text-center ${styles.buttonColor} text-white`}
        >
          {/* LinkedIn SVG icon */}
          <FiLinkedin className="w-6 h-6 mr-2" />
          LinkedIn
        </a>
      </div>
    </div>
  );
});

export default Contacts;
