import React from 'react';
import EdgeSalesConnectSystemImage from '../icons/EdgeSalesConnectSystem.jpg';
import MobileApplication from '../icons/Mobile-appliction.png';
import { useTheme } from './ThemeProvider';

const Project: React.FC = () => {
  const { theme } = useTheme();

  // Define styles for light and dark themes
  const lightStyles = {
    color: '#000', // Change text color for light theme
    backgroundColor: '#fff', // Change background color for light theme
  };

  const darkStyles = {
    color: '#fff', // Change text color for dark theme
    backgroundColor: '#000', // Change background color for dark theme
  };

  // Apply the appropriate styles based on the current theme
  const styles = theme === 'light' ? lightStyles : darkStyles;

  return (
    <div className={`mt-10 mb-4 text-center ${theme === 'dark' ? 'dark' : ''}`} style={styles}>
      <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>PROJECTS</h1>
      <div className="flex justify-center">
        {/* First Edge Sales Connect Web Application card component */}
        <div className={`max-w-sm border border-gray-200 rounded-lg shadow ${theme === 'dark' ? 'dark:border-gray-700 dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-800'} mt-6 mr-2`}>
          <a href="#">
            <img className="rounded-t-lg" src={EdgeSalesConnectSystemImage} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className={`mb-2 text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Edge Sales Connect Web Application
              </h5>
            </a>
            <p className={`mb-3 font-normal ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              Edge Sales Connect Web Application is a system whose purpose is to help the client collect their daily sales report from the hard copy collecting to digitally receive and exporting the daily sales report.
            </p>
            <div className="flex flex-wrap justify-center mb-4">
              <div className="mr-2">
                <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
              </div>
              <div className="mr-2">
                <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
              </div>
              <div className="mr-2">
                <img src="https://img.shields.io/badge/RESTful%20API-0277BD?style=for-the-badge&logo=rest&logoColor=white" alt="RESTful API" />
              </div>
            </div>
            <a href="https://github.com/Crtomas2/Edge-Sales-Connect-System-Web-Application" className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ${theme === 'dark' ? 'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' : 'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'}`}>
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Second Edge Sales Connect Mobile Application card component */}
        <div className={`max-w-sm border border-gray-200 rounded-lg shadow ${theme === 'dark' ? 'dark:border-gray-700 dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-800'} mt-6 ml-4`}>
          <div className="p-5">
            <img src={MobileApplication} alt="Mobile Application" className="mb-3 mx-auto w-16 h-16" />
            <h5 className={`mb-2 text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Edge Sales Connect Mobile Application</h5>
            <p className={`mb-3 font-normal ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              The purpose of this mobile application is to digitally scan the barcode tag, and it will already display information like barcode number, item name, etc., and this will also enable you to send batch sales reports through RESTFUL Api and will be then received in the Edge sales connect web application.
            </p>
            <div className="flex flex-wrap justify-center mb-4">
              <div className="mr-2">
                <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" className="w-8 h-8" />
              </div>
              <div className="mr-2">
                <img src="https://img.shields.io/badge/Volley-9BAAF3?style=for-the-badge&logo=Volley&logoColor=white" alt="Volley" className="w-8 h-8" />
              </div>
              <div className="mr-2">
                <img src="https://img.shields.io/badge/RESTful%20API-0277BD?style=for-the-badge&logo=rest&logoColor=white" alt="RESTful API" className="w-8 h-8" />
              </div>
            </div>
            <a href="https://github.com/jolomunar/EdgeScanner-MobileApp" className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ${theme === 'dark' ? 'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' : 'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'}`}>
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
